#!/usr/bin/env bash
# Sync ProbeJS type definitions from Prism Launcher to the dev environment

set -e

# Configuration
PRISM_INSTANCES="${HOME}/.local/share/PrismLauncher/instances"
PROJECT_PROBE_DIR="kubejs/probe"

# 1. Get current version (to match instance name)
VERSION=$(bash scripts/generate-version.sh)
INSTANCE_NAME="Meldworks-${VERSION}"

# 2. Find the instance
# We search for a directory starting with Meldworks to be safe
INSTANCE_PATH=$(ls -d "${PRISM_INSTANCES}/${INSTANCE_NAME}" 2>/dev/null || ls -d "${PRISM_INSTANCES}/Meldworks"* | head -n 1)

if [ -z "$INSTANCE_PATH" ]; then
    echo "❌ Error: Could not find Prism instance for Meldworks in ${PRISM_INSTANCES}"
    exit 1
fi

PROBE_SOURCE="${INSTANCE_PATH}/minecraft/.probe"

if [ ! -d "$PROBE_SOURCE" ]; then
    echo "❌ Error: .probe directory not found in ${PROBE_SOURCE}"
    echo "Did you run /probejs dump in-game?"
    exit 1
fi

echo "🔄 Syncing types from: ${PROBE_SOURCE}"
echo "              to: ${PROJECT_PROBE_DIR}"

# 3. Perform the sync
rm -rf "${PROJECT_PROBE_DIR}/"*
mkdir -p "${PROJECT_PROBE_DIR}"
cp -r "${PROBE_SOURCE}/"* "${PROJECT_PROBE_DIR}/"

echo "✅ Type sync complete!"
