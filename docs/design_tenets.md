### 1. The Prime Directive: The ANIA Rule
*   **Arbitrary Number is Arbitrary:** All numbers (RF/t, mB, Durability) in this document are placeholders. Structure comes first; mathematical balance and refinement come later.

### 2. Core Philosophy: The Engine
*   **Mods are Libraries:** We do not rely on mods to provide the gameplay loop. We use mods (KubeJS, Multiblocked2, Photon2) as asset libraries to build a custom gameplay, except where mods prodive hard-to-replicate features, such as Immersive Aircraft, Create, and others.
*   **Simulation over Gamification:** If a mechanic feels like a "minigame" (magic block processing), replace it with a "simulation" (heat, pressure, fluid dynamics).
*   **No Magic Blocks:** No single block should solve a complex logistical problem instantly. No "Magic Box" batteries. No "Magic Box" farms.

### 3. Logistics & Physics
*   **Logistics is Gameplay:** Teleportation of items, fluids, and power is banned or strictly gated (Mass Drivers, Cargo Launches, etc.). Transport must be physical (Belts, Trains, Pipes, Rockets) and take time.
*   **Geography Matters:** The biome and dimension you build in dictates your processing efficiency.
    *   *Example:* Settling ponds require arid climates; cooling towers benefit from cold climates.
*   **Ore is Freight:** Mining is a volume problem, not just a rarity problem. Ores are heavy, unstackable (or low-stack), and require "Palletization/Gabions" to move efficiently.
*   **No Infinite Sources:** Water is finite. Cobble gens are of minimal use. Resources must be extracted or synthesized, not summoned. Energy from solar is limited by the sun and an inability to skip the night.

### 4. Industry & Architecture
*   **The "Works" Model:** Progression is not linear; it is Interdependent.
    *   *No Dead Ends:* Waste from one industry (e.g., Sulfur from Copper) is the Catalyst for another (Acid for Batteries).
*   **The "Screw" Rule (Abstraction):** Do not micro-craft useless intermediates (screws, bolts) that only exist to be crafted further. Visual components (plates, rods, frames) are acceptable exceptions, as long as they are unified across resources.  f.e. All Ingots have a corresponding Plate, Rod, and Gear.
*   **Friction & Maintenance:** Machines effectiveness degrades over time. High-efficiency operation requires consumables (Lubricant, Coolant, consumable Machine Parts). Neglect leads to inefficiency, not just stoppage. However, we balance with the assumption that machines run at 100% efficiency for 100% of their lifespan. We portray this as a bonus to efficiency, rather than a penalty to uptime.
*   **Power is Fluid:** Electricity is not just a number in a wire. It is a commodity to be generated, converted into a medium (Charged Electrolyte), and shipped via tanks.  Restricting storage and storage efficiency and to a lesser degree storage volume efficiency is a core balancing mechanic of the modpack.

### 5. Economy & Society
*   **The Living Ledger:** The economy is procedural, not static. Economies grow and shrink based on player fulfillment of their demands. Prices fluctuate daily.
*   **The "Lag Tax":** Land claims and chunk loading are rented, not owned. The cost scales with the number of chunks claimed by that player.  If possible, a surcharge is added for the number of tile entities in the claimed chunks. (Difficulty and processing overhead unknown: Research Spike.)
*   **The Service Split:**
    *   **Industrial:** Mass-produced fluids/items (Fuel, Plastic, Steel) for the Federation (the lore name of the economy simulation).
    *   **Craft/Artisan:** NBT-rich items (Vintage Wine, Coffee, Trophy Fish) for enabling lower progression players to have meaningful items to trade.
*   **Wealth Destruction:** The economy must have sinks. Gems (Apotheosis) being destroyed on death (Research Spike) and Lootboxes as a source of them exist to delete currency from the server. More sinks are needed.

### 6. Survival & Threat
*   **The Winter Threat:** Time is a resource. You must stockpile food and fuel before Winter (Serene Seasons) kills your crops and slows your trees.
*   **The Encroaching Darkness:** Mobs are a siege threat. They break walls and torches via AI Overhaul. Safety requires active defense, not just light levels.  Immersive Engineering may not be enough automated defense against the mobs.  (Research Spike)
*   **Mob Farms are Obsolete:** Mobs do not drop significant useful items.  Experience is the only reason to kill mobs and may be removed entirely, as optionns such as Create offer alternative means of experience.  Perhaps a shop item?  (May not work as "good gear" is still the same driver, much like gems/lootboxes: Research Spike)

### 7. Space & Expansion
*   **The Tyranny of the Rocket:** Gravity is an exponential cost. Launching from Earth is hard; launching from the Moon is easy. Logistics networks must respect gravity wells.
*   **Ballistic Logistics:** Late-game transport relies on Mass Drivers and Suborbital Hoppers. These systems require timing and calibration; failure results in catastrophic damage (Kinetic Bombardment).
*   **Abundance:** Space is not for exploration; it is for resource extraction. The goal is to import the abundance (Infinite Solar, Asteroid mining) that solves terrestrial bottlenecks.