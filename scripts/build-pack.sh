#!/usr/bin/env bash
# Optimized Build Script for Meldworks Modpack
# Automatically handles versioning, TS compilation, and packwiz-installer injection

set -e

# Configuration
ROOT_DIR=$(pwd)
SCRIPTS_DIR="${ROOT_DIR}/scripts"
DIST_DIR="${ROOT_DIR}/dist"
BOOTSTRAP_JAR=".packwiz-installer-bootstrap.jar"
PACKWIZ_INDEX="modrinth.index.json"

# Colors for output
GREEN='\033[0;32m'
BRIGHT_GREEN='\033[1;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting Meldworks Build...${NC}"

# 1. Generate version and set output names
VERSION=$(bash "${SCRIPTS_DIR}/generate-version.sh")
FINAL_FILENAME="meldworks-${VERSION}.zip"
GITHUB_PAGES_URL="${PACKWIZ_URL:-https://deveyus.github.io/meldworks/pack.toml}"

echo -e "${BLUE}📦 Version:${NC} ${GREEN}${VERSION}${NC}"
echo -e "${BLUE}🌐 Bootstrap URL:${NC} ${YELLOW}${GITHUB_PAGES_URL}${NC}"

# 2. Compile TypeScript
echo -e "${BLUE}[1/3] Compiling TypeScript...${NC}"
npm run build --silent

# 3. Update pack.toml version
echo -e "${BLUE}[2/3] Updating pack.toml version...${NC}"
sed -i "s/^version = .*/version = \"${VERSION}\"/" pack.toml

# 4. Generate Modrinth export
echo -e "${BLUE}[3/3] Exporting and Injecting Bootstrap...${NC}"
mkdir -p "${DIST_DIR}"
FINAL_PATH="${DIST_DIR}/${FINAL_FILENAME}"

# Export directly to dist
packwiz modrinth export -o "${FINAL_PATH}" -y

# 5. Inject packwiz-installer (Optimized: No full unzip)
if [ ! -f "${BOOTSTRAP_JAR}" ]; then
    echo -e "${YELLOW}Downloading packwiz-installer-bootstrap...${NC}"
    curl -L -o "${BOOTSTRAP_JAR}" \
        https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar
fi

# Create a temporary workspace for manifest modification
TEMP_DIR=$(mktemp -d)
trap "rm -rf '${TEMP_DIR}'" EXIT

# Extract only the modrinth.index.json
unzip -q "${FINAL_PATH}" "${PACKWIZ_INDEX}" -d "${TEMP_DIR}"

# Update the manifest with pre-launch command
jq --arg url "$GITHUB_PAGES_URL" \
   '.preLaunchCommand = "\"$INST_JAVA\" -jar packwiz-installer-bootstrap.jar \($url)"' \
   "${TEMP_DIR}/${PACKWIZ_INDEX}" > "${TEMP_DIR}/updated_${PACKWIZ_INDEX}"

# Update the ZIP file in-place:
# -j: junk paths (flat file)
# -u: update existing file
cd "${TEMP_DIR}"
mv "updated_${PACKWIZ_INDEX}" "${PACKWIZ_INDEX}"
zip -ujq "${FINAL_PATH}" "${PACKWIZ_INDEX}"
cd "${ROOT_DIR}"

# Add the bootstrap jar to overrides/
# We use a temporary overrides/ structure to maintain the internal zip path
mkdir -p "${TEMP_DIR}/overrides"
cp "${BOOTSTRAP_JAR}" "${TEMP_DIR}/overrides/packwiz-installer-bootstrap.jar"
cd "${TEMP_DIR}"
zip -rujq "${FINAL_PATH}" "overrides/packwiz-installer-bootstrap.jar"
cd "${ROOT_DIR}"

echo -e "${GREEN}✅ Build complete: dist/${BRIGHT_GREEN}${FINAL_FILENAME}${NC}"
echo ""
echo "Follow the release instructions in docs/release.md to publish."
echo ""
echo "To install in Prism Launcher:"
echo "  1. Open Prism Launcher"
echo "  2. Add Instance → Import from zip"
echo "  3. Select dist/${BRIGHT_GREEN}${FINAL_FILENAME}${NC}"
echo "  4. The pack will auto-update from GitHub Pages on launch"
