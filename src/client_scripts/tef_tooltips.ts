ItemEvents.tooltip(event => {
    global.tefData.forEach(tier => {
        let rankine = (tier.k * 1.8).toFixed(1)
        let tooltip = [
            Text.gray('Thermal Exchange Fluid'),
            Text.darkGray('Current Energy State: ').append(Text.yellow(`${rankine} °R`)),
            Text.darkGray('Calibration per ISO-80000-5 compliance.').italic()
        ]

        // Target the fluid item itself (often seen in JEI or fluid tanks)
        event.add(`kubejs:tef_${tier.id}`, tooltip)
        
        // Target the bucket item
        event.add(`kubejs:tef_${tier.id}_bucket`, tooltip)
    })
})