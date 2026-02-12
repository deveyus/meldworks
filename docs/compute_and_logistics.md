# Design Doc: Compute, Logic, and Information Logistics

## 1. The Machine Requirement Lifecycle
Aligned with `eras.md`, machine complexity scales as follows:
1.  **Era 1-2 (Kinetic/Thermal):** Torque & Heat/Pressure.
2.  **Era 3-4 (Synthesis/Steel):** Chemical Catalysts & Maintenance (Machine Parts).
3.  **Era 5 (Petrochem):** High-Flow Lubrication & Thermal Management (TEF).
4.  **Era 7+ (Information):** Data Throughput & Automation Logic.

## 2. Information Progression (Post-Atomic)

| Era | Stage | Medium | Logistics |
| :--- | :--- | :--- | :--- |
| **Era 7** | **Information** | **Punch Cards / Tapes** | Physical Item Loops (Conveyors) |
| **Era 8** | **Exosphere** | **Magnetic Storage** | Vacuum-Hardened Data Modules |
| **Era 9** | **Orbital** | **Signal Clusters** | Ballistic Data (Physical Link Nodes) |
| **Era 10+** | **Interplanetary** | **Quantum / Antimatter** | Entanglement / Near-Zero Latency |

## 3. Era 7: The Advent of Data
Introduced after the **Atomic Era (Era 6)** "solves" the power problem. Computation is used to refine inefficient Era 3-5 processes.
*   **The Medium:** "Instruction Tapes" (High-stack items).
*   **The Technology:** **Computer Vision Sawmills**, **Neural Uplinks**, and **Server Racks**.
*   **The Interaction:** A machine (e.g., a Fractionation Tower) that previously ran at 70% efficiency can now reach 100% if provided with a constant loop of "Optimization Data" (Physical tapes).

## 4. Era 9: Ballistic Information
As we reach the **Orbital Era**, logistics moves from belts to **Mass Drivers**.
*   **The Challenge:** Information must be physically "launched" between Luna and Earth.
*   **The Medium:** "Hardened Data Slugs."
*   **The Interaction:** A Luna-based regolith processor requires "Calibration Data" from an Earth-based Mainframe. This creates a cross-planetary logistics loop where data slugs are launched, consumed, and launched back as "Telemetry Data."

## 6. Information Accessibility: HUD Logistics
All field data is standardized through the **Jade (WAILA) HUD**. The "Link" to this data is provided by era-specific tools.

| Era | Implementation | The Tool | Requirement |
| :--- | :--- | :--- | :--- |
| **Era 1-3** | **Consumable** | **Indicator Dust** | Apply to block. Temporarily enables Jade NPK display. |
| **Era 4-6** | **Handheld** | **Mechanical Meter** | Held in hand. Enables Jade NPK display while looking at block. |
| **Era 7+** | **Curio** | **Data Terminal** | Equipped. Permanently enables Jade NPK display. |

### 6.1 Applied Case: Soil Analysis
*   **Indicator Dust:** Using the dust on a block triggers a "Chemical Reaction" state in the NBT, allowing Jade to render the NPK values for a short duration.
*   **Mechanical Meter:** Jade NPK text is visible only while the meter is in the player's main or off-hand.
*   **Data Terminal:** Passive integration. Values are always visible in the Jade overlay for the user when looking at farmland.

## 7. Implementation Notes
*   **Era 5 Gap:** We will strictly keep Compute out of the Petrochemical era. Era 5 is about fluids, pipelines, and the "desperate search for power."
*   **Era 7 Payoff:** Compute is the "Reward" for surviving the power-hungry Era 5. It allows the player to finally automate away the micromanagement of earlier eras.

