BlockEvents.placed('meldworks:living_farmland', event => {
    const { block } = event;
    block.entityData.n_val = 20.0;
    block.entityData.p_val = 20.0;
    block.entityData.k_val = 20.0;
    block.entityData.absorbed_sum = 0.0;
    block.entityData.is_resting = false;
    block.entityData.has_fertilized_this_season = false;
    block.entityData.last_reset_season = global.currentSubSeason || "spring_1";
});
BlockEvents.broken('meldworks:living_farmland', event => {
    const { block, level } = event;
    const data = block.entityData;
    if (data && data.absorbed_sum > 0) {
        let count = Math.floor(data.absorbed_sum / 10);
        if (count > 0) {
            block.popItem(Item.of('meldworks:indicator_dust', count));
        }
    }
});
BlockEvents.rightClicked(event => {
    const { block, item, player, hand, level } = event;
    if (hand != 'main_hand')
        return;
    let target = block.id == 'meldworks:living_farmland' ? block : block.down;
    if (target.id != 'meldworks:living_farmland')
        return;
    let data = target.entityData;
    if (item.id == 'meldworks:mechanical_meter' || item.id == 'meldworks:agricultural_analyzer') {
        if (player.shiftKeyDown) {
            const getRough = (val) => {
                if (val < 25)
                    return "Depleted";
                if (val < 50)
                    return "Low";
                if (val < 75)
                    return "Healthy";
                return "Rich";
            };
            player.statusMessage = Text.yellow(`N: ${getRough(data.n_val)} | P: ${getRough(data.p_val)} | K: ${getRough(data.k_val)}`);
        }
        else if (item.id == 'meldworks:agricultural_analyzer') {
            player.statusMessage = Text.green(`Nitrogen: ${data.n_val.toFixed(1)}% | Phosphorus: ${data.p_val.toFixed(1)}% | Potassium: ${data.k_val.toFixed(1)}%`);
            if (data.is_resting)
                player.tell(Text.red("Soil is currently resting."));
        }
        return;
    }
    if (item.id == 'meldworks:indicator_dust') {
        data.reaction_expiry = level.time + 1200;
        if (!player.creativeMode)
            item.count--;
        level.spawnParticles('minecraft:glow', true, target.x + 0.5, target.y + 1.1, target.z + 0.5, 0.2, 0.1, 0.2, 15, 0.05);
        player.statusMessage = Text.gold("Chemical indicator applied.");
        return;
    }
    if (item.hasTag('meldworks:fertilizers')) {
        if (data.has_fertilized_this_season) {
            player.statusMessage = Text.red("Soil has already been fertilized this season.");
            return;
        }
        let id = item.id.split(':').pop();
        let [tier, nutrient] = id.split('_');
        let nKey = nutrient.charAt(0) + '_val';
        let amount = 0;
        if (tier == 'poor')
            amount = 15;
        if (tier == 'good')
            amount = 35;
        if (tier == 'extravagant')
            amount = 65;
        data[nKey] = Math.min(100, data[nKey] + amount);
        data.has_fertilized_this_season = true;
        if (!player.creativeMode)
            item.count--;
        level.spawnParticles('minecraft:happy_villager', true, target.x + 0.5, target.y + 1.1, target.z + 0.5, 0.2, 0.2, 0.2, 10, 0.05);
        player.statusMessage = Text.green(`Applied ${nutrient} fertilizer.`);
    }
});
ForgeEvents.onEvent('sereneseasons.api.event.SeasonChangedEvent$Standard', event => {
    global.currentSubSeason = event.newSeason.subSeason.toString().toLowerCase();
    console.log(`Farming System: Season changed to ${global.currentSubSeason}`);
});
