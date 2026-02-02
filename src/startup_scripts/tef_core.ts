StartupEvents.registry('fluid', event => {
    const tefTiers = [
        { id: 'subatomic',     name: 'Subatomic',     color: 0xD1E8FF, k: 0.01 },
        { id: 'cryogenic',     name: 'Cryogenic',     color: 0x4FC3F7, k: 77.0 },
        { id: 'frigid',        name: 'Frigid',        color: 0x007ACC, k: 150.0 },
        { id: 'cold',          name: 'Cold',          color: 0xADD8E6, k: 260.0 },
        { id: 'neutral',       name: 'Neutral',       color: 0xE2E2E2, k: 293.0 },
        { id: 'hot',           name: 'Hot',           color: 0xFF8C00, k: 350.0 },
        { id: 'hyperthermal',  name: 'Hyperthermal',  color: 0xFF4500, k: 550.0 },
        { id: 'incandescent',  name: 'Incandescent',  color: 0xFFD700, k: 1200.0 },
        { id: 'supercritical', name: 'Supercritical', color: 0xFFFFFF, k: 5000.0 }
    ]

    tefTiers.forEach(tier => {
        event.create(`tef_${tier.id}`)
            .displayName(`${tier.name} TEF`)
            .stillTexture('minecraft:block/water_still')
            .flowingTexture('minecraft:block/water_flow')
            .color(tier.color)
            .noBlock() 
    })

    // Just store the raw data objects
    global.tefData = tefTiers
})