#!/usr/bin/env bash
# Generate version from git metadata
# Format: <latest-tag>-<short-hash> or <tag> if on a tag

set -e

# Get the latest tag (if any)
LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null || echo "")

# Get current commit hash (short)
SHORT_HASH=$(git rev-parse --short HEAD)

# Check if we're exactly on a tag
if [ -n "$LATEST_TAG" ] && git describe --exact-match --tags HEAD &>/dev/null; then
    # On a tag - use clean version
    VERSION="${LATEST_TAG#v}"  # Remove 'v' prefix
else
    # Not on a tag - append hash
    if [ -n "$LATEST_TAG" ]; then
        VERSION="${LATEST_TAG#v}-${SHORT_HASH}"
    else
        # No tags yet - use 0.0.0-hash
        VERSION="0.0.0-${SHORT_HASH}"
    fi
fi

echo "$VERSION"
