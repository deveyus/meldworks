ItemEvents.tooltip(event => {
    global.tefData.forEach(tier => {
        let rankine = (tier.k * 1.8).toFixed(1);
        let tooltip = [
            Text.gray('Thermal Exchange Fluid'),
            Text.darkGray('Current Energy State: ').append(Text.yellow(`${rankine} °R`)),
            Text.darkGray('Calibration per ISO-80000-5 compliance.').italic()
        ];
        event.add(`kubejs:tef_${tier.id}`, tooltip);
        event.add(`kubejs:tef_${tier.id}_bucket`, tooltip);
    });
});
