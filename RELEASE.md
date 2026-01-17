# Release Process

## Automated Versioning

Meldworks uses **git-based automatic versioning**:
- **Release builds:** Clean semver (e.g., `1.0.0`)
- **Dev builds:** Semver + commit hash (e.g., `1.0.0-a3f2c1d`)
- **Pre-release:** `0.0.0-<hash>` if no tags exist

### Version Format

```
<latest-tag>-<short-hash>
```

**Examples:**
- At tag `v1.0.0` → `meldworks-1.0.0.mrpack`
- After tag `v1.0.0` → `meldworks-1.0.0-a3f2c1d.mrpack`
- No tags yet → `meldworks-0.0.0-beef123.mrpack`

---

## Prerequisites

### 1. Set Up GitHub Pages (First Time Only)

The `.mrpack` includes packwiz-installer-bootstrap which enables automatic updates from GitHub Pages.

**Quick setup:**
```bash
# See GITHUB_PAGES.md for detailed instructions
git checkout --orphan gh-pages
git rm -rf .
git checkout main -- pack.toml index.toml mods/ config/
git add .
git commit -m "Initial GitHub Pages deployment"
git push origin gh-pages
```

Then enable GitHub Pages in repository settings pointing to the `gh-pages` branch.

Your pack will be available at: `https://deveyus.github.io/meldworks/pack.toml`

---

## Building a Release

### 1. Create a Release Tag

```bash
# Decide on version (semver)
git tag v1.0.0

# Push tag to remote
git push --tags
```

### 2. Build the Pack

```bash
# Enter dev environment
nix develop

# Build pack (automatic versioning)
npm run build:pack

# Or directly:
./build-pack.sh
```

### 3. Distribute

The pack will be in `dist/meldworks-<version>.mrpack`

**To install in Prism Launcher:**
1. Open Prism Launcher
2. Add Instance → Import from zip
3. Select `dist/meldworks-<version>.mrpack`

---

## Development Builds

```bash
# Just build without tagging
npm run build:pack

# Output: dist/meldworks-1.0.0-a3f2c1d.mrpack
```

Dev builds automatically append the commit hash, so you can always trace back to the exact code state.

---

## Version Scheme

Following **Semantic Versioning (semver)**:

- **Major (X.0.0):** Breaking changes, incompatible saves
- **Minor (1.X.0):** New features, backward compatible
- **Patch (1.0.X):** Bug fixes, tweaks

### Recommended Tagging Strategy

```bash
# Initial release
git tag v0.1.0

# Bug fixes
git tag v0.1.1

# New features
git tag v0.2.0

# Major overhaul
git tag v1.0.0
```

---

## Build Pipeline Details

The build process:
1. **Generate version** from git metadata
2. **Compile TypeScript** (`src/` → `kubejs/`)
3. **Update `pack.toml`** with version
4. **Export Modrinth pack** via packwiz
5. **Output** to `dist/meldworks-<version>.mrpack`

---

## Troubleshooting

**"No tags found"**
- First build will be `0.0.0-<hash>`
- Create your first tag: `git tag v0.1.0`

**"Dirty git tree" warnings**
- Commit your changes before building releases
- Dev builds work fine with uncommitted changes

**Build fails**
- Ensure you're in `nix develop` shell
- Check TypeScript compiles: `npm run build`
- Verify packwiz works: `packwiz refresh`
