StartupEvents.registry('block', event => {
    event.create('living_farmland')
        .displayName('Living Farmland')
        .material('dirt')
        .hardness(0.6)
        .tagBlock('minecraft:mineable/shovel')
        .blockEntity(entity => {
        entity.addFloat('n_val');
        entity.addFloat('p_val');
        entity.addFloat('k_val');
        entity.addFloat('absorbed_sum');
        entity.addBoolean('is_resting');
        entity.addBoolean('has_fertilized_this_season');
        entity.addString('last_reset_season');
        entity.addLong('reaction_expiry');
    })
        .randomTick(tick => {
        const { block, level } = tick;
        let data = block.entityData;
        if (!data)
            return;
        if (global.currentSubSeason && data.last_reset_season != global.currentSubSeason) {
            data.is_resting = false;
            data.has_fertilized_this_season = false;
            data.last_reset_season = global.currentSubSeason;
        }
        if (data.is_resting)
            return;
        let cropBlock = block.up;
        const cropData = global.cropMap[cropBlock.id];
        if (!cropData)
            return;
        let takeTier = cropData.take;
        let type = cropData.type;
        let returnPercent = 0.57 - ((takeTier - 1) * 0.02);
        if (data[type + '_val'] < takeTier) {
            let redistributed = data.absorbed_sum / 2;
            data.n_val = Math.min(100, data.n_val + redistributed);
            data.p_val = Math.min(100, data.p_val + redistributed);
            data.k_val = Math.min(100, data.k_val + redistributed);
            data.is_resting = true;
            data.absorbed_sum = 0;
            cropBlock.set('minecraft:air');
            level.spawnParticles('minecraft:smoke', true, cropBlock.x + 0.5, cropBlock.y + 0.5, cropBlock.z + 0.5, 0.1, 0.1, 0.1, 15, 0.05);
        }
        else {
            data[type + '_val'] -= takeTier;
            data.absorbed_sum += takeTier;
            const others = ['n', 'p', 'k'].filter(t => t != type);
            others.forEach(o => {
                data[o + '_val'] = Math.min(100, data[o + '_val'] + (takeTier * returnPercent));
            });
        }
    });
});
StartupEvents.registry('item', event => {
    event.create('indicator_dust').displayName('Indicator Dust');
    event.create('mechanical_meter').displayName('Mechanical Soil Meter').maxStackSize(1);
    event.create('agricultural_analyzer').displayName('Agricultural Analyzer').maxStackSize(1);
    const nutrients = ['nitrogen', 'phosphorus', 'potassium'];
    const tiers = [
        { id: 'poor', name: 'Poor' },
        { id: 'good', name: 'Good' },
        { id: 'extravagant', name: 'Extravagant' }
    ];
    nutrients.forEach(n => {
        tiers.forEach(t => {
            event.create(`${t.id}_${n}_fertilizer`)
                .displayName(`${t.name} ${n.charAt(0).toUpperCase() + n.slice(1)} Fertilizer`)
                .tag('meldworks:fertilizers');
        });
    });
});
