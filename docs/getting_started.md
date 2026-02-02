# Getting Started with Meldworks Development

Welcome to the Meldworks development environment. This project uses a modern toolchain centered around **Nix**, **TypeScript**, and **Packwiz** to ensure a performant and type-safe development experience.

## 🛠️ 1. Environment Setup

### Prerequisites
- **Nix** with Flakes enabled.
- **Git**

### Entering the Shell
All development tools (Node.js, TypeScript, Packwiz, JQ) are provided via a Nix Flake. To enter the development environment, run:

```bash
nix develop
```

This ensures you have the exact same tool versions as the rest of the team.

---

## 💻 2. Script Development (KubeJS + TypeScript)

We use **TypeScript** for all KubeJS scripts. This provides compile-time error checking and IDE autocompletion for the thousands of items and blocks in the modpack.

### Directory Structure
- **`src/`**: Your source TypeScript files. (Edit these!)
- **`kubejs/`**: The compiled JavaScript output. (Do not edit directly!)

Subdirectories follow the standard KubeJS structure:
- `startup_scripts/`: Registry and core initialization.
- `server_scripts/`: Recipes, loot, and server events.
- `client_scripts/`: Tooltips, UI, and rendering.

### The Development Loop
1.  **Watch for changes**: Run `npm run watch` in your terminal.
2.  **Code**: Edit files in `src/`. They will auto-compile to `kubejs/` on save.
3.  **Test**: In-game, use `/reload` to refresh server scripts.

---

## 🔍 3. Type Safety with ProbeJS

**ProbeJS** generates TypeScript definitions for every registered object in the game (thousands of items, blocks, and fluids across all mods).

### Generating Types
Whenever you add or remove mods, or if autocomplete stops working, you MUST re-generate the type definitions:
1.  **Preparation**: Temporarily disable **EMI**, **Open Parties and Claims (PAC)**, and **Xaero's Minimap/World Map** in your launcher. These mods are known to cause threading race conditions or class-loading errors during the dump.
2.  Launch Minecraft with the modpack.
3.  Once in a world, run the command: `/probejs dump`
4.  Wait for the "Dump complete" message.

> [!IMPORTANT]
> **Persistence**: Since development instances are often ephemeral, we **copy** the type definitions into the repository rather than symlinking. This ensures the definitions remain available even if the instance is deleted or moved.

### Syncing Types to the Repository
After a successful dump, sync the files to your dev environment:
```bash
nix develop --command npm run types:sync
```
This copies the generated `.d.ts` files from your Prism instance into `kubejs/probe`.

---

## 📜 4. Common Commands

| Command | Description |
| :--- | :--- |
| `nix develop` | Enter the developer shell. |
| `npm run build` | Perform a one-time TypeScript compilation. |
| `npm run watch` | Watch for file changes and auto-compile (recommended). |
| `npm run clean` | Remove all generated `.js` files in `kubejs/`. |
| `packwiz refresh` | Update the modpack index after adding/removing files. |
| `npm run build:pack` | Run the full build pipeline to create a `.mrpack`. |
