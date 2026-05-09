ItemEvents.tooltip(event => {
    const nutrientNames = {
        'n': Text.aqua('Nitrogen (N)'),
        'p': Text.lightPurple('Phosphorus (P)'),
        'k': Text.yellow('Potassium (K)')
    };
    const cropToSeed = {
        'minecraft:wheat': 'minecraft:wheat_seeds',
        'minecraft:carrots': 'minecraft:carrot',
        'minecraft:potatoes': 'minecraft:potato',
        'minecraft:beetroots': 'minecraft:beetroot_seeds',
        'minecraft:pumpkin_stem': 'minecraft:pumpkin_seeds',
        'minecraft:melon_stem': 'minecraft:melon_seeds',
        'farmersdelight:tomato_crop': 'farmersdelight:tomato_seeds',
        'farmersdelight:cabbage_crop': 'farmersdelight:cabbage_seeds',
        'farmersdelight:onion_crop': 'farmersdelight:onion_seeds',
        'farmersdelight:rice_panicles': 'farmersdelight:rice',
    };
    Object.keys(global.cropMap).forEach(blockId => {
        let crop = global.cropMap[blockId];
        let seedId = cropToSeed[blockId] || blockId;
        let returnPercent = (0.57 - ((crop.take - 1) * 0.02)) * 100;
        event.add(seedId, [
            Text.gray('Requires: ').append(nutrientNames[crop.type]),
            Text.gray('Consumption: ').append(Text.red(`${crop.take.toFixed(1)}%`)),
            Text.gray('Replenishment: ').append(Text.green(`${returnPercent.toFixed(0)}%`)).append(Text.gray(' of others'))
        ]);
    });
});
