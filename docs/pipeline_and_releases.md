# Build Pipeline & Releases

Meldworks uses an automated pipeline to handle versioning, compilation, and distribution. This ensures that users always receive the correct version and can update automatically.

## 📦 1. The Build Pipeline

The primary build tool is [`build-pack.sh`](file:///home/serafina/dev/meldworks/build-pack.sh). When you run `npm run build:pack`, the following happens:

1.  **TypeScript Compilation**: Compiles everything in `src/` to `kubejs/`.
2.  **Version Generation**: Pulls the version from Git tags (see below).
3.  **Bootstrap Injection**: Downloads `packwiz-installer-bootstrap.jar` and embeds it into the pack.
4.  **Export**: Generates a `.mrpack` file in the `dist/` directory.

---

## 🏷️ 2. Versioning Strategy

We use **Git-based automatic versioning**. You never need to edit a version number in a config file manually.

- **Releases**: Tagged with a SemVer version (e.g., `git tag v1.0.0`). The build will be named `meldworks-1.0.0.mrpack`.
- **Dev Builds**: If the current commit is not tagged, the build appends the short commit hash (e.g., `meldworks-1.0.0-a3f2c1d.mrpack`).
- **Pre-releases**: If no tags exist at all, the version defaults to `0.0.0-<hash>`.

### Recommended Tagging
```bash
git tag v0.1.0   # Increment minor for new features
git tag v0.1.1   # Increment patch for bug fixes
git push --tags  # Don't forget to push your tags!
```

---

## 🌐 3. Distribution & Auto-Updates

Meldworks is configured for **Auto-Updates** via GitHub Pages.

### How it works:
1.  The `.mrpack` contains a "Pre-launch" command.
2.  When a user launches the pack in Prism, it runs the `packwiz-installer`.
3.  The installer checks `https://deveyus.github.io/meldworks/pack.toml`.
4.  If the version on GitHub is newer, it automatically downloads the changes.

### Updating the Public Pack:
To push an update to your users without requiring them to download a new `.mrpack`:
1.  Ensure your `main` branch reflects the state you want to publish.
2.  Update the `gh-pages` branch with the latest `pack.toml`, `index.toml`, `mods/`, and `config/`.

---

## ⚙️ 4. Persistent Configurations

Not all mod configurations are handled by Packwiz. To ensure important performance or balance settings are preserved across builds, we keep "source" copies in [the root `config/` directory](file:///home/serafina/dev/meldworks/config/).

**Currently tracked overrides:**
- `modernfix-mixins.properties`: Performance flags (e.g., `dynamic_resources`).
- `lightmanscurrency-common.txt`: Economy and variant registration settings.

When building the pack, these overrides are included in the final distribution.
