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
PACK_NAME="${PACK_NAME:-Meldworks ${VERSION}}"

echo -e "${BLUE}📦 Version:${NC} ${GREEN}${VERSION}${NC}"
echo -e "${BLUE}🌐 Bootstrap URL:${NC} ${YELLOW}${GITHUB_PAGES_URL}${NC}"

# 2. Extract Versions from pack.toml
# Simple grep extraction
MC_VERSION=$(grep 'minecraft = ' pack.toml | cut -d '"' -f 2)
FORGE_VERSION=$(grep 'forge = ' pack.toml | cut -d '"' -f 2)

echo -e "${BLUE}🎮 Minecraft:${NC} ${GREEN}${MC_VERSION}${NC}"
echo -e "${BLUE}🔨 Forge:${NC} ${GREEN}${FORGE_VERSION}${NC}"

# 3. Compiling TypeScript
echo -e "${BLUE}[1/4] Compiling TypeScript...${NC}"
npm run build --silent

# 4. Updating pack.toml
echo -e "${BLUE}[2/4] Skipping pack.toml version update (managed by packwiz)...${NC}"
# sed -i "s/^version = .*/version = \"${VERSION}\"/" pack.toml

# 5. Preparing Staging Area
echo -e "${BLUE}[3/4] Preparing Zip Content...${NC}"
STAGING_DIR="${DIST_DIR}/staging"
rm -rf "${STAGING_DIR}"
mkdir -p "${STAGING_DIR}/minecraft"
mkdir -p "${DIST_DIR}"

# Download bootstrap if missing
if [ ! -f "${BOOTSTRAP_JAR}" ]; then
    echo -e "${YELLOW}Downloading packwiz-installer-bootstrap...${NC}"
    curl -L -s -o "${BOOTSTRAP_JAR}" \
        https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar
fi

# Copy bootstrap to minecraft/ folder (where Prism will extract it to game root)
cp "${BOOTSTRAP_JAR}" "${STAGING_DIR}/minecraft/packwiz-installer-bootstrap.jar"

# Process Templates using envsubst
export PACK_NAME PACK_URL="${GITHUB_PAGES_URL}" MC_VERSION FORGE_VERSION

# We explicitly list variables to substitute to avoid breaking $INST_JAVA and other Prism variables
envsubst '$PACK_NAME $PACK_URL' < "${ROOT_DIR}/config/prism/instance.cfg" > "${STAGING_DIR}/instance.cfg"
envsubst '$MC_VERSION $FORGE_VERSION' < "${ROOT_DIR}/config/prism/mmc-pack.json" > "${STAGING_DIR}/mmc-pack.json"

# 6. Create Zip
echo -e "${BLUE}[4/4] Creating Prism Instance Zip...${NC}"
FINAL_PATH="${DIST_DIR}/${FINAL_FILENAME}"
rm -f "${FINAL_PATH}"

cd "${STAGING_DIR}"
zip -qr "${FINAL_PATH}" .
cd "${ROOT_DIR}"

# Cleanup
rm -rf "${STAGING_DIR}"

echo -e "${GREEN}✅ Build complete: dist/${BRIGHT_GREEN}${FINAL_FILENAME}${NC}"
echo ""
echo "To install in Prism Launcher:"
echo "  1. Add Instance → Import from zip"
echo "  2. Select dist/${BRIGHT_GREEN}${FINAL_FILENAME}${NC}"
