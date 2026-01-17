# TypeScript Development Workflow for Meldworks

## Overview

This modpack uses **TypeScript** for KubeJS script development, providing type safety and IDE autocomplete via **ProbeJS**.

## Setup

1. **Enter the development environment:**
   ```bash
   nix develop
   ```

2. **Generate ProbeJS type definitions** (in-game):
   - Launch Minecraft with the modpack
   - Run `/probejs dump` in the console
   - Type definitions will be generated in `kubejs/probe/generated/`

3. **Install npm dependencies:**
   ```bash
   npm install
   ```

## Development Workflow

### Directory Structure

```
src/
├── server_scripts/    # Server-side scripts (recipes, worldgen, etc.)
├── client_scripts/    # Client-side scripts (UI, rendering, etc.)
└── startup_scripts/   # Startup scripts (registration, etc.)

kubejs/                # Compiled output (DO NOT EDIT DIRECTLY)
├── server_scripts/
├── client_scripts/
└── startup_scripts/
```

### Writing Scripts

1. **Write TypeScript in `src/`:**
   ```typescript
   // src/server_scripts/my_recipes.ts
   ServerEvents.recipes(event => {
     event.remove({ output: 'minecraft:diamond' });
   });
   ```

2. **Compile to JavaScript:**
   ```bash
   npm run build        # One-time build
   npm run watch        # Auto-rebuild on file changes
   ```

3. **Test in-game:**
   - Use `/reload` in-game to reload KubeJS scripts
   - Check logs for errors

### Available Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run watch` - Watch mode (auto-compile on save)
- `npm run clean` - Remove all compiled JS files

## Type Safety

ProbeJS generates TypeScript definitions for:
- All registered items, blocks, fluids from installed mods
- KubeJS event types and methods
- Recipe builders and custom integrations

Your IDE (VSCode recommended) will provide autocomplete for all game objects.

## Best Practices

1. **Never edit files in `kubejs/` directly** - they will be overwritten on compile
2. **Commit both `src/` and `kubejs/`** - the compiled JS is what actually runs
3. **Re-run `/probejs dump`** after adding/removing mods
4. **Use `npm run watch`** during active development for instant feedback

## Troubleshooting

- **"Cannot find name 'ServerEvents'"**: Run `/probejs dump` in-game first
- **Scripts not loading**: Check `logs/kubejs/server.log` for syntax errors
- **Type errors but script works**: ProbeJS types may be outdated, re-dump
