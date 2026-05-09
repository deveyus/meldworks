StartupEvents.registry('block', event => {
    event.create('living_farmland')
        .displayName('Living Farmland')
        .material('dirt')
        .hardness(0.6)
        .tagBlock('minecraft:mineable/shovel')
        .blockEntity(entity => {
            entity.addFloat('n_val')
            entity.addFloat('p_val')
            entity.addFloat('k_val')
            entity.addFloat('absorbed_sum')
            entity.addBoolean('is_resting')
            entity.addBoolean('has_fertilized_this_season')
            entity.addString('last_reset_season')
            entity.addLong('reaction_expiry')
        })
        .randomTick(tick => {
            const { block, level } = tick
            let data = block.entityData
            if (!data) return

            // 1. Seasonal Reset Logic (Lazy)
            if (global.currentSubSeason && data.last_reset_season != global.currentSubSeason) {
                data.is_resting = false
                data.has_fertilized_this_season = false
                data.last_reset_season = global.currentSubSeason
            }

            // 2. Growth Logic
            if (data.is_resting) return

            let cropBlock = block.up
            const cropData = global.cropMap[cropBlock.id]
            if (!cropData) return

            let takeTier = cropData.take
            let type = cropData.type
            let returnPercent = 0.57 - ((takeTier - 1) * 0.02)

            // Nutrient Check & Handshake
            if (data[type + '_val'] < takeTier) {
                // Death Sequence: 150% return of halved absorbed sum to all buckets
                let redistributed = data.absorbed_sum / 2
                data.n_val = Math.min(100, data.n_val + redistributed)
                data.p_val = Math.min(100, data.p_val + redistributed)
                data.k_val = Math.min(100, data.k_val + redistributed)
                
                data.is_resting = true
                data.absorbed_sum = 0
                
                cropBlock.set('minecraft:air')
                level.spawnParticles('minecraft:smoke', true, cropBlock.x + 0.5, cropBlock.y + 0.5, cropBlock.z + 0.5, 0.1, 0.1, 0.1, 15, 0.05)
            } else {
                // Success: Consume and Replenish others
                data[type + '_val'] -= takeTier
                data.absorbed_sum += takeTier
                
                const others = ['n', 'p', 'k'].filter(t => t != type)
                others.forEach(o => {
                    data[o + '_val'] = Math.min(100, data[o + '_val'] + (takeTier * returnPercent))
                })
                
                // In this implementation, we allow the crop's own random tick to handle the actual age increment.
                // The farmland's tick acts as the "nutrient bill".
            }
        })
})

KubeJS.Events.onCommonRegistration(event => {
    event.blockDataProvider('meldworks:living_farmland', Java.loadClass('dev.latvian.mods.kubejs.block.entity.BlockEntityJS'))
        .setCallback((tag, accessor) => {
            const { blockEntity } = accessor
            if (blockEntity && blockEntity.block.id == 'meldworks:living_farmland') {
                const data = blockEntity.data
                tag.putFloat('n_val', data.getFloat('n_val'))
                tag.putFloat('p_val', data.getFloat('p_val'))
                tag.putFloat('k_val', data.getFloat('k_val'))
                tag.putBoolean('is_resting', data.getBoolean('is_resting'))
                tag.putLong('reaction_expiry', data.getLong('reaction_expiry'))
            }
        })
})

StartupEvents.registry('item', event => {
    event.create('indicator_dust').displayName('Indicator Dust')
    event.create('mechanical_meter').displayName('Mechanical Soil Meter').maxStackSize(1)
    event.create('agricultural_analyzer').displayName('Agricultural Analyzer').maxStackSize(1)

    const nutrients = ['nitrogen', 'phosphorus', 'potassium']
    const tiers = [
        { id: 'poor',        name: 'Poor' },
        { id: 'good',        name: 'Good' },
        { id: 'extravagant', name: 'Extravagant' }
    ]

    nutrients.forEach(n => {
        tiers.forEach(t => {
            event.create(`${t.id}_${n}_fertilizer`)
                .displayName(`${t.name} ${n.charAt(0).toUpperCase() + n.slice(1)} Fertilizer`)
                .tag('meldworks:fertilizers')
        })
    })
})