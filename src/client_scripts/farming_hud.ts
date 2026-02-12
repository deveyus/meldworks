JadeEvents.onClientRegistration(event => {
    event.block('meldworks:living_farmland', Java.loadClass('net.minecraft.world.level.block.Block'))
        .tooltip((tooltip, accessor) => {
            const { block, player, level, serverData } = accessor
            if (block.id != 'meldworks:living_farmland') return
            if (!serverData) return

            let hasAccess = false
            
            // 1. Handheld
            if (player.mainHandItem.id == 'meldworks:mechanical_meter' || player.offHandItem.id == 'meldworks:mechanical_meter') {
                hasAccess = true
            }
            
            // 2. Equipped Curio (Agricultural Analyzer)
            // Check if the analyzer is in any curio slot
            if (player.curios && player.curios.has('meldworks:agricultural_analyzer')) {
                hasAccess = true
            }
            
            // 3. Indicator Dust
            if (level.time < serverData.getLong('reaction_expiry')) {
                hasAccess = true
            }

            if (hasAccess) {
                tooltip.add(Text.of('NPK Analysis:').gold())
                tooltip.add(Text.of(` Nitrogen:   ${serverData.getFloat('n_val').toFixed(1)}`).green())
                tooltip.add(Text.of(` Phosphorus: ${serverData.getFloat('p_val').toFixed(1)}`).aqua())
                tooltip.add(Text.of(` Potassium:  ${serverData.getFloat('k_val').toFixed(1)}`).yellow())
                if (serverData.getBoolean('is_resting')) {
                    tooltip.add(Text.of('Status: Resting').italic().gray())
                }
            }
        })
})