ItemEvents.tooltip(event => {
    global.tefData.forEach(tier => {
        // Calculation is local to this display loop
        let rankine = (tier.k * 1.8).toFixed(1)

        event.add(`kubejs:tef_${tier.id}`, [
            Text.gray('Thermal Exchange Fluid'),
            Text.darkGray('Current Energy State: ').append(Text.yellow(`${rankine} °R`)),
            Text.darkGray('Calibration per ISO-80000-5 compliance.').italic()
        ])
    })
})