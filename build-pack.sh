#!/usr/bin/env bash
# Build Meldworks modpack for distribution

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building Meldworks Modpack...${NC}"

# Generate version
VERSION=$(bash scripts/generate-version.sh)
echo -e "${BLUE}Version: ${GREEN}${VERSION}${NC}"

# GitHub Pages URL for packwiz bootstrapper
GITHUB_PAGES_URL="${PACKWIZ_URL:-https://deveyus.github.io/meldworks/pack.toml}"
echo -e "${BLUE}Bootstrap URL: ${YELLOW}${GITHUB_PAGES_URL}${NC}"

# Step 1: Compile TypeScript
echo -e "${BLUE}[1/4] Compiling TypeScript...${NC}"
npm run build

# Step 2: Update pack.toml version
echo -e "${BLUE}[2/4] Updating pack.toml version...${NC}"
sed -i "s/^version = .*/version = \"${VERSION}\"/" pack.toml

# Step 3: Export Modrinth pack
echo -e "${BLUE}[3/4] Exporting Modrinth pack...${NC}"
packwiz modrinth export -y

# Step 4: Inject packwiz-installer into the .mrpack
echo -e "${BLUE}[4/4] Configuring packwiz-installer bootstrap...${NC}"

# Download packwiz-installer-bootstrap if not present
if [ ! -f ".packwiz-installer-bootstrap.jar" ]; then
    echo -e "${YELLOW}Downloading packwiz-installer-bootstrap...${NC}"
    curl -L -o .packwiz-installer-bootstrap.jar \
        https://github.com/packwiz/packwiz-installer-bootstrap/releases/latest/download/packwiz-installer-bootstrap.jar
fi

# Extract the .mrpack
MRPACK_FILE=$(ls *.mrpack)
TEMP_DIR=$(mktemp -d)
unzip -q "$MRPACK_FILE" -d "$TEMP_DIR"

# Add packwiz-installer-bootstrap to overrides
mkdir -p "$TEMP_DIR/overrides"
cp .packwiz-installer-bootstrap.jar "$TEMP_DIR/overrides/packwiz-installer-bootstrap.jar"

# Modify modrinth.index.json to add pre-launch command
jq --arg url "$GITHUB_PAGES_URL" \
   '.preLaunchCommand = "\"$INST_JAVA\" -jar packwiz-installer-bootstrap.jar \($url)"' \
   "$TEMP_DIR/modrinth.index.json" > "$TEMP_DIR/modrinth.index.json.tmp"
mv "$TEMP_DIR/modrinth.index.json.tmp" "$TEMP_DIR/modrinth.index.json"

# Repackage the .mrpack
cd "$TEMP_DIR"
zip -q -r "../meldworks-${VERSION}.mrpack" .
cd - > /dev/null

# Move to dist/
mkdir -p dist
mv "meldworks-${VERSION}.mrpack" "dist/meldworks-${VERSION}.mrpack"

# Cleanup
rm -rf "$TEMP_DIR" "$MRPACK_FILE"

echo -e "${GREEN}✅ Build complete: dist/meldworks-${VERSION}.mrpack${NC}"
echo ""
echo "Bootstrap URL: ${GITHUB_PAGES_URL}"
echo ""
echo "To install in Prism Launcher:"
echo "  1. Open Prism Launcher"
echo "  2. Add Instance → Import from zip"
echo "  3. Select dist/meldworks-${VERSION}.mrpack"
echo "  4. The pack will auto-update from GitHub Pages on launch"
