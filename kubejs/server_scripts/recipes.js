ServerEvents.recipes(event => {
    event.shaped('meldworks:mechanical_meter', [
        ' G ',
        ' P ',
        ' C '
    ], {
        G: 'minecraft:glass_pane',
        P: '#forge:plates/copper',
        C: 'minecraft:compass'
    });
    event.shaped('meldworks:agricultural_analyzer', [
        ' R ',
        ' G ',
        ' M '
    ], {
        R: 'create:polished_rose_quartz',
        G: '#forge:plates/gold',
        M: 'meldworks:mechanical_meter'
    });
    event.shapeless('4x meldworks:indicator_dust', [
        'minecraft:bone_meal',
        '#forge:dusts/silver',
        'minecraft:redstone'
    ]);
    const nutrients = [
        { id: 'nitrogen', base: 'farmersdelight:tree_bark', dust: 'minecraft:bone_meal' },
        { id: 'phosphorus', base: 'minecraft:bone_meal', dust: 'minecraft:sand' },
        { id: 'potassium', base: 'supplementaries:ash', dust: 'minecraft:charcoal' }
    ];
    const tiers = [
        { id: 'poor', amount: 1, mat: 'minecraft:dirt' },
        { id: 'good', amount: 2, mat: 'minecraft:clay_ball' },
        { id: 'extravagant', amount: 4, mat: 'create:experience_nugget' }
    ];
    nutrients.forEach(n => {
        tiers.forEach(t => {
            event.shapeless(`${t.amount}x meldworks:${t.id}_${n.id}_fertilizer`, [
                n.base,
                n.dust,
                t.mat
            ]);
        });
    });
    event.shapeless('meldworks:living_farmland', [
        'minecraft:farmland',
        'meldworks:indicator_dust'
    ]);
});
