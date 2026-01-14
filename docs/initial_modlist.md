# Meldworks Initial Modlist

This document tracks the core mods planned for Meldworks. Items are organized by their primary role in the simulation.

## Table of Contents
1. [The Core Simulation (Engine)](#1-the-core-simulation-engine)
2. [World & Environment](#2-world--environment)
3. [Space & Physics](#3-space--physics)
4. [Tech (Kinetic/Thermal/Chemical/Steel)](#4-tech-kineticthermalchemicalsteel)
5. [Nuclear & Advanced Tech](#5-nuclear--advanced-tech)
6. [Logistics & Storage](#6-logistics--storage)
7. [Gear & RPG](#7-gear--rpg)
8. [Economy & Farming](#8-economy--farming)
9. [Mobs & Bosses](#9-mobs--bosses)
10. [Building, Decor & Utility](#10-building-decor--utility)
11. [Experimental / To-Test](#11-experimental--to-test)

---

**1. The Core Simulation (Engine)**

*   **KubeJS**
    *   [Modrinth](https://modrinth.com/mod/kubejs)
    *   *Role:* The backbone script engine for recipes, world generation, and event handling.

*   **Multiblocked2** (Officially "Multiblocked" on 1.20+)
    *   [Modrinth](https://modrinth.com/mod/multiblocked) / [CurseForge](https://www.curseforge.com/minecraft/mc-mods/multiblocked2) (Check version carefully, often beta/dev builds are needed for 1.20.1 features).
    *   *Role:* The structural engine for Rockets, Factories, and Custom Machines.

*   **Architectury API**
    *   [Modrinth](https://modrinth.com/mod/architectury-api)
    *   *Role:* Mandatory dependency for KubeJS on Forge.

*   **Rhino**
    *   [Modrinth](https://modrinth.com/mod/rhino)
    *   *Role:* JavaScript parser dependency for KubeJS.


**2. World & Environment**

*   **Terralith**
    *   [Modrinth](https://modrinth.com/mod/terralith)
    *   *Role:* Overworld biome expansion (Yellowstone, Painted Deserts).

*   **Tectonic**
    *   [Modrinth](https://modrinth.com/mod/tectonic)
    *   *Role:* Massive terrain reshaping (Cliffs, Rivers, Aquifers).

*   **TerraBlender**
    *   [Modrinth](https://modrinth.com/mod/terrablender)
    *   *Role:* Dependency for mixing Terralith/Tectonic biomes.

*   **Serene Seasons**
    *   [Modrinth](https://modrinth.com/mod/serene-seasons)
    *   *Role:* The 12-day year cycle, crop growth regulation, and "Winter Threat."

*   **Dynamic Trees**
    *   [Modrinth](https://modrinth.com/mod/dynamictrees)
    *   *Role:* Replaces vanilla trees with growing, felling-physics trees.

*   **Pollution of the Realms**
    *   [CurseForge](https://www.curseforge.com/minecraft/mc-mods/pollution-of-the-realms)
    *   *Role:* Carbon/Sulfur emissions engine. (Modrinth availability is spotty/missing).

*   **Advanced Chimneys**
    *   [CurseForge](https://www.curseforge.com/minecraft/mc-mods/advanced-chimneys)
    *   *Role:* Pollution mitigation structures.

*   **Geolosys** (Referred to as Geolysis)
    *   [Modrinth](https://modrinth.com/mod/geolosys)
    *   *Role:* GregTech-style ore clusters and surface samples for prospecting.

*   **Water Source**
    *   [Modrinth](https://modrinth.com/mod/water-source-2)
    *   *Role:* Disables infinite water source creation; allows specific config overrides.

*   **Geophilic**
    *   [Modrinth](https://modrinth.com/mod/geophilic)
    *   *Role:* Light vanilla biome improvements (fallen logs, rocks) to aid the "Foraging" phase.

*   **Au Naturel (Natural Temperature)**
    *   [Modrinth](https://modrinth.com/mod/au-naturel) / [CurseForge](https://www.curseforge.com/minecraft/mc-mods/au-naturel)
    *   *Role:* Forces Latitude-based biome generation (Equator/Poles).


**3. Space & Physics**

*   **Thin Air**
    *   [Modrinth](https://modrinth.com/mod/thin-air)
    *   *Role:* The atmospheric engine. Used to tag our custom KubeJS dimensions as "No Oxygen" or "Low Oxygen."

*   **Gravity API** (Fork by Fuzs)
    *   [Modrinth](https://modrinth.com/mod/gravity-api)
    *   *Role:* Gravity manipulation. KubeJS hooks into this to apply G-forces (0.16G, 2.5G) when a player enters specific dimensions.

*   **Forge Sky Boxes** (FSB)
    *   [Modrinth](https://modrinth.com/mod/forgeskyboxes)
    *   *Role:* Renders the Planets, Rings, and Starfields via Resource Packs in our custom dimensions.


**4. Tech (Kinetic/Thermal/Chemical/Steel)**

*   **Create**
    *   [Modrinth](https://modrinth.com/mod/create)
    *   *Role:* The Kinetic Era foundation. Rotational force, mixers, presses.

*   **Create: Steam 'n' Rails**
    *   [Modrinth](https://modrinth.com/mod/create-steam-n-rails)
    *   *Role:* Expanded train logic, semaphores, and new track types for Era 4 logistics.

*   **Create: New Age**
    *   [Modrinth](https://modrinth.com/mod/create-new-age)
    *   *Role:* Electricity generation (Rotational $\to$ Electric), Motors, and the basis for our custom Wire tiers (Copper/Steel/Aluminum/Superconductor).

*   **Create: Slice & Dice**
    *   [Modrinth](https://modrinth.com/mod/slice-and-dice)
    *   *Role:* Automating the complex "Farmer's Delight" food prep without magic blocks.

*   **Create: Horse Power**
    *   [Modrinth](https://modrinth.com/mod/create-horse-power)
    *   *Role:* The Era 1 "Whim Gin." Turns horses into early-game torque without KubeJS scripting.

*   **Immersive Engineering**
    *   [Modrinth](https://modrinth.com/mod/immersive-engineering)
    *   *Role:* The backbone of Heavy Industry. Blast Furnaces, Crushers, Conveyors, Excavators.

*   **Immersive Petroleum**
    *   [CurseForge](https://www.curseforge.com/minecraft/mc-mods/immersive-petroleum)
    *   *Role:* The Era 5 Petrochemical engine. Pumpjacks, Distillation Towers, Asphalt.

*   **Immersive Posts**
    *   [Modrinth](https://modrinth.com/mod/immersive-posts)
    *   *Role:* Extends IE wire aesthetics for long-distance/cross-biome power transmission.
 
*   **Immersive Aircraft**
    *   [Modrinth](https://modrinth.com/mod/immersive-aircraft)
    *   *Role:* Steam-punk style flight (Biplanes, Airships). High-tier late Era 4 / Era 5 logistics.

*   **Tinkers' Construct**
    *   [Modrinth](https://modrinth.com/mod/tinkers-construct)
    *   *Role:* **Smeltery & Melter Only.** Tools disabled. Used for Era 1 metallurgy and Era 2 alloys.

*   **ChemLib**
    *   [Modrinth](https://modrinth.com/mod/chemlib)
    *   *Role:* **Library Mode Only.** Provides the item registry for Elements (Carbon, Sulfur, Xenon) so we don't have to register them manually.


**5. Nuclear & Advanced Tech**

*   **NuclearCraft: Neoteric** (Tom Dodd's Port)
    *   [Modrinth](https://modrinth.com/mod/nuclearcraft-neoteric)
    *   *Role:* The Era 6 Atomic Engine. Fission reactors, radiation logic, and the "Big In" power source.

*   **Little Logistics**
    *   [Modrinth](https://modrinth.com/mod/little-logistics)
    *   *Role:* Physical "Macro" transport. Automated tugboats and fluid barges for Era 4-6 logistics (Oil/Nuclear Waste shipping).

*   **Advanced Hook Launchers** (AdHooks)
    *   [CurseForge](https://www.curseforge.com/minecraft/mc-mods/advanced-hook-launchers)
    *   *Role:* Physics-based grappling hooks (Pudge Hook, Web Hook). Essential mobility for the Era 8 Asteroid Belt (Zero G).

*   **Scannable**
    *   [Modrinth](https://modrinth.com/mod/scannable)
    *   *Role:* The "Prospector's Tool." Configured to detect specific "Core Blocks" inside Asteroids or deep planets.


**6. Logistics & Storage**

*   **Classic Pipes** *(Provisional)*
    *   [Modrinth](https://modrinth.com/mod/classic-pipes)
    *   *Role:* "Old School" item tubes. Useful for tight vertical routing where conveyors struggle.

*   **Little Logistics**
    *   [Modrinth](https://modrinth.com/mod/little-logistics)
    *   *Role:* **Macro Transport.** Automated Tugboats and Trains (smaller scale than Create). Essential for fluid barges.

*   **Tom's Simple Storage Mod**
    *   [Modrinth](https://modrinth.com/mod/toms-simple-storage-mod)
    *   *Role:* Inventory Interface / Brain.

*   **Sophisticated Storage**
    *   [Modrinth](https://modrinth.com/mod/sophisticated-storage)
    *   *Role:* Physical buffers (Barrels/Chests).

*   **Lootr**
    *   [Modrinth](https://modrinth.com/mod/lootr)
    *   *Role:* Multiplayer chest instancing.


**7. Gear & RPG**

*   **Silent Gear**
    *   [Modrinth](https://modrinth.com/mod/silent-gear)
    *   *Role:* **The Forge.** The main system for Tools and Armor. Replaces vanilla crafting with Part-based assembly (Rod + Binding + Head).

*   **Silent's Gems**
    *   [Modrinth](https://modrinth.com/mod/silents-gems)
    *   *Role:* **Materials.** Provides the gem resources for high-tier Silent Gear parts and the "Gem Cutter" economy.

*   **Apotheosis**
    *   [Modrinth](https://modrinth.com/mod/apotheosis)
    *   *Role:* **The Sink.** Affix system and Enchanting.
    *   *Config:* Mob farming module disabled. Gems/Sigils acquired via "Lootbox" economy or Industrial Geode processing.

*   **Relics**
    *   [Modrinth](https://modrinth.com/mod/relics)
    *   *Role:* **The Hunter's Economy.** Unique, uncraftable artifacts found in dungeons. High-value trade items.

*   **Iron's Spells 'n Spellbooks**
    *   [Modrinth](https://modrinth.com/mod/irons-spells-n-spellbooks)
    *   *Role:* **Jewelry Only (Heavily Configured).**
    *   *Plan:* Strip the spellcasting. Keep the Curios/Jewelry system to allow players to wear Rings/Necklaces for stat boosts.


**8. Economy & Farming**

*   **Lightman's Currency**
    *   [Modrinth](https://modrinth.com/mod/lightmans-currency)
    *   *Role:* **The Economy.** Physical coins, wallets, and the Trade Terminals for the "Federation Exchange."

*   **Farmer's Delight**
    *   [Modrinth](https://modrinth.com/mod/farmers-delight)
    *   *Role:* **The Baseline.** Physical cooking on stoves, cutting boards, and rich soil mechanics.

*   **Cultural Delights**
    *   [Modrinth](https://modrinth.com/mod/cultural-delights)
    *   *Role:* **Variety.** Adds Sushi, Burritos, etc., to make Spice of Life easier to manage.

*   **Spice of Life: Sweet Potato Edition**
    *   [Modrinth](https://modrinth.com/mod/spice-of-life-sweet-potato-edition)
    *   *Role:* **Dietary Pressure.** Encourages players to automate a varied food supply rather than eating just bread.

*   **Spoiled**
    *   [Modrinth](https://modrinth.com/mod/spoiled)
    *   *Role:* **The Rot.** Food spoilage mechanic. Forces the use of Ice Boxes (from Vinery/HerbalBrews/Create) and preservatives.

*   **Let's Do: Vinery**
    *   [Modrinth](https://modrinth.com/mod/vinery)
    *   *Role:* **The Vintner.** Wine pressing, aging barrels, and lattice crops. (High-Value NBT Trade Goods).

*   **Let's Do: Brewery**
    *   [Modrinth](https://modrinth.com/mod/brewery)
    *   *Role:* **The Pub.** Hops, barley, and drying logic.

*   **Let's Do: HerbalBrews**
    *   [Modrinth](https://modrinth.com/mod/herbalbrews)
    *   *Role:* **The Herbalist.** Tea/Coffee processing (Drying Racks) and utility buffs (Anti-Insomnia).

*   **Let's Do: Meadow**
    *   [Modrinth](https://modrinth.com/mod/meadow)
    *   *Role:* **The Cheesemonger.** Adds the Cheese Press and dairy mechanics we identified as a key "Outside Niche."


**9. Mobs & Bosses**

*   **Improved Mobs**
    *   [Modrinth](https://modrinth.com/mod/improved-mobs)
    *   *Role:* The Siege Engine. Mobs can break blocks and use items.

*   **In Control!**
    *   [Modrinth](https://modrinth.com/mod/in-control)
    *   *Role:* The Director. Customizes mob spawning logic.

*   **Taterzens**
    *   [Modrinth](https://modrinth.com/mod/taterzens)
    *   *Role:* The NPCs for quests and world-building.

*   **L_Ender's Cataclysm**
    *   [Modrinth](https://modrinth.com/mod/l_enders-cataclysm)
    *   *Role:* The Planetary Guardians. High-tier bosses.

*   **Bosses' Rise**
    *   [Modrinth](https://modrinth.com/mod/bosses-rise)
    *   *Role:* The Mid-Game Threats. Adds the Infernal Dragon, Yeti, and Sandworm.

*   **Bosses of Mass Destruction**
    *   [Modrinth](https://modrinth.com/mod/bosses-of-mass-destruction-forge)
    *   *Role:* The End-Game Spectacle. Adds the Night Lich and Void Blossom.


**10. Building, Decor & Utility**

*   **FramedBlocks**
    *   [Modrinth](https://modrinth.com/mod/framedblocks)
    *   *Role:* **The Architect's Tool.** Slopes, curves, and custom shapes for aerodynamic factories.

*   **Rechiseled**
    *   [Modrinth](https://modrinth.com/mod/rechiseled)
    *   *Role:* **The Aesthetics.** Texture variants for factory blocks without the bloat of Chipped.

*   **Build Guide**
    *   [Modrinth](https://modrinth.com/mod/build-guide)
    *   *Role:* **The Surveyor.** Client-side projection of circles, spheres, and cylinders to assist manual building.

*   **Construction Wand**
    *   [Modrinth](https://modrinth.com/mod/construction-wand)
    *   *Role:* **The Labor Saver.** Heavily gated (Era 3/4) to help place massive concrete floors.

*   **Measurements**
    *   [Modrinth](https://modrinth.com/mod/measurements)
    *   *Role:* **The Draughtsman.** Tape measure tool to render distance lines in-world. Essential for multiblock planning.

*   **Supplementaries**
    *   [Modrinth](https://modrinth.com/mod/supplementaries)
    *   *Role:* **The Glue.** Sacks, Traps (Siege Defense), Signs, and physical logic blocks.

*   **Exposure**
    *   [Modrinth](https://modrinth.com/mod/exposure)
    *   *Role:* **The Camera.** Photography mechanics for the "Journalist" or "Spy" economy niche.

*   **Map Atlases**
    *   [Modrinth](https://modrinth.com/mod/map-atlases)
    *   *Role:* **Terrestrial Navigation (Early Game).** Physical, craftable maps.

*   **Xaero's World Map** & **Xaero's Minimap**
    *   [Modrinth](https://modrinth.com/mod/xaeros-world-map) / [Modrinth](https://modrinth.com/mod/xaeros-minimap)
    *   *Role:* **Orbital Navigation (Late Game).** Locked behind "Satellite Launch" permissions (Era 8).

*   **Corail Tombstone**
    *   [CurseForge](https://www.curseforge.com/minecraft/mc-mods/corail-tombstone)
    *   *Role:* **Death Logic.** Prevents item despawn lag and frustration.

*   **Sound Physics Remastered**
    *   [Modrinth](https://modrinth.com/mod/sound-physics-remastered)
    *   *Role:* **Auditory Immersion.** Reverb and occlusion in factories/caves. (Configured for performance).

*   **EMI**
    *   [Modrinth](https://modrinth.com/mod/emi)
    *   *Role:* **The Recipe Tree.** Essential for visualizing complex petrochemical processing chains.

*   **AttributeFix**
    *   [Modrinth](https://modrinth.com/mod/attributefix)
    *   *Role:* **Math Fix.** Allows armor/damage/speed to scale beyond vanilla caps.

*   **Toast Control**
    *   [Modrinth](https://modrinth.com/mod/toast-control)
    *   *Role:* **UI Cleanliness.** Blocks the "Tutorial/Recipe Unlocked" spam.

*   **Embeddium**
    *   [Modrinth](https://modrinth.com/mod/embeddium)
    *   *Role:* **Rendering Engine.** Massive FPS boost.

*   **Oculus**
    *   [Modrinth](https://modrinth.com/mod/oculus)
    *   *Role:* **Shader Support.**

*   **Spark**
    *   [Modrinth](https://modrinth.com/mod/spark)
    *   *Role:* **Profiler.** Essential for debugging lag.

*   **FerriteCore**
    *   [Modrinth](https://modrinth.com/mod/ferrite-core)
    *   *Role:* **Memory Optimization.**

*   **ModernFix**
    *   [Modrinth](https://modrinth.com/mod/modernfix)
    *   *Role:* **General Optimization.**

*   **EntityCulling**
    *   [Modrinth](https://modrinth.com/mod/entityculling)
    *   *Role:* **Render Culling.** Hides tile entities behind walls (crucial for big factories).

*   **Searchables**
    *   [Modrinth](https://modrinth.com/mod/searchables)
    *   *Role:* **UI Helper.** Adds search bars to chests/settings.

*   **Jade**
    *   [Modrinth](https://modrinth.com/mod/jade)
    *   *Role:* **HUD Info.** Shows block data, harvestability, and fluid tank contents (WAILA).

*   **Controlling**
    *   [Modrinth](https://modrinth.com/mod/controlling)
    *   *Role:* **Keybind Manager.** Essential for managing the massive amount of keybinds in this pack.

*   **Mouse Tweaks**
    *   [Modrinth](https://modrinth.com/mod/mouse-tweaks)
    *   *Role:* **Inventory Logic.** Drag-to-craft and scroll-wheel sorting.


**11. Experimental / To-Test**

*   **Gacha!! Lootbox**
    *   [Modrinth](https://modrinth.com/mod/gacha-lootbox)
    *   *Role:* **The Economy Sink.** The 3D animated lootbox. Needs testing to see if the animations feel "High Value" enough for the expensive keys.

*   **Realistic Block Physics**
    *   [Modrinth](https://modrinth.com/mod/realistic-block-physics)
    *   *Role:* **Mining Safety.** Adds structural integrity and cave-ins.
    *   *Test Requirement:* **CRITICAL.** You need to test this in the **Asteroid Belt** and **Space Dimensions**. If it causes the islands to fall into the void or causes massive lag, it must be cut immediately.