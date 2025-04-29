export default {
  id: "stonecutting_wood",
  name: "Stonecutting Wood",
  description: "Cut wood into blocks in stonecutter as you would stone.",
  icon: "🪚🪵",
  category: "recipes",
  files: [
    ...[
      "oak", "spruce", "birch", "jungle", "acacia", "dark_oak",
      "mangrove", "cherry", "crimson", "warped", "pale_oak"
    ].flatMap(type => [
      {
        path: `data/minecraft/recipe/stonecutting_${type}_stairs.json`,
        content: `
{
  "type": "minecraft:stonecutting",
  "ingredient": "minecraft:${type}_planks",
  "result": {
  "id": "minecraft:${type}_stairs",
  "count": 1
  }
}
        `.trim()
      },
      {
        path: `data/minecraft/recipe/stonecutting_${type}_slab.json`,
        content: `
{
  "type": "minecraft:stonecutting",
  "ingredient": "minecraft:${type}_planks",
  "result": {
  "id": "minecraft:${type}_slab",
  "count": 2
  }
}
        `.trim()
      },
      {
        path: `data/minecraft/recipe/stonecutting_${type}_fence.json`,
        content: `
{
  "type": "minecraft:stonecutting",
  "ingredient": "minecraft:${type}_planks",
  "result": {
  "id": "minecraft:${type}_fence",
  "count": 1
  }
}
        `.trim()
      }
    ])
  ]
};