ServerEvents.recipes(event => {
    event.shaped('minecraft:stick', [
        'A',
        'A'
    ], {
        A: 'minecraft:oak_planks'
    });
});
console.info('Example server script loaded!');
