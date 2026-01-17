# Build Pipeline Complete ✅

## What's Been Set Up

### 1. **Automated Versioning**
- **Git-based:** `<latest-tag>-<hash>` format
- **Release builds:** Clean semver (e.g., `1.0.0`)
- **Dev builds:** Semver + hash (e.g., `1.0.0-a3f2c1d`)
- **No manual version tracking required**

### 2. **Build Script** (`build-pack.sh`)
Automated pipeline that:
1. Compiles TypeScript (`src/` → `kubejs/`)
2. Generates version from git
3. Updates `pack.toml` with version
4. Downloads packwiz-installer-bootstrap
5. Exports `.mrpack` 
6. Injects bootstrapper and GitHub Pages URL
7. Outputs to `dist/meldworks-<version>.mrpack`

### 3. **Packwiz-Installer Integration**
- **Bootstrapper JAR** automatically downloaded and embedded
- **GitHub Pages URL** configured: `https://deveyus.github.io/meldworks/pack.toml`
- **Auto-updates** enabled for users on pack launch
- **Pre-launch command** injected into `.mrpack` (if `jq` available)

### 4. **GitHub Pages Setup**
- Deployment guide created (`GITHUB_PAGES.md`)
- Optional GitHub Actions workflow for auto-deployment
- Enables automatic pack updates for all users

---

## Usage

### Build a Release

```bash
# 1. Tag a release
git tag v1.0.0
git push --tags

# 2. Build the pack
nix develop
npm run build:pack

# Output: dist/meldworks-1.0.0.mrpack
```

### Build Dev Version

```bash
# Just build (no tagging)
npm run build:pack

# Output: dist/meldworks-1.0.0-a3f2c1d.mrpack
```

### Configure GitHub Pages URL

```bash
# Set custom URL before building
export PACKWIZ_URL="https://your-domain.com/pack.toml"
npm run build:pack
```

---

## Distribution Workflow

1. **User downloads** `meldworks-1.0.0.mrpack` from releases
2. **Imports into Prism Launcher**
3. **On launch:** packwiz-installer-bootstrap runs
4. **Checks GitHub Pages** for pack updates
5. **Auto-downloads** new/updated mods
6. **User stays in sync** with your latest changes

---

## Documentation

- **`RELEASE.md`** - Full release process and versioning guide
- **`GITHUB_PAGES.md`** - GitHub Pages deployment instructions
- **`TYPESCRIPT_WORKFLOW.md`** - TypeScript development workflow

---

## Next Steps

1. **Set up GitHub Pages** (see `GITHUB_PAGES.md`)
2. **Create your first release tag:** `git tag v0.1.0`
3. **Build the pack:** `npm run build:pack`
4. **Test in Prism Launcher**
5. **Publish to GitHub Releases**

---

## Environment Variable

- **`PACKWIZ_URL`** - Override GitHub Pages URL (default: `https://deveyus.github.io/meldworks/pack.toml`)

Example:
```bash
PACKWIZ_URL="https://custom.domain/pack.toml" npm run build:pack
```
