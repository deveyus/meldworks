// Example KubeJS server script in TypeScript
// This will be compiled to kubejs/server_scripts/example.js

ServerEvents.recipes(event => {
  // Example recipe modification
  // NOTE: Broad removals like { output: 'stick' } can cause conflicts with Silent Gear
  // event.remove({ output: 'minecraft:stick' });
  
  event.shaped('minecraft:stick', [
    'A',
    'A'
  ], {
    A: 'minecraft:oak_planks'
  });
});

console.info('Example server script loaded!');
