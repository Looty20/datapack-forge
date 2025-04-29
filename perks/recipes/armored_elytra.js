export default {
  "id": "armored_elytra",
  "name": "Armored Elytra",
  "description": "Permanently combine an Elytra with a netherite Chestplate. All enchantments and protection levels are retained",
  "icon": "\ud83d\udee1\ufe0f\ud83e\udebd",
  "category": "recipes",
  files: [
    {
      path: "data/namespace/advancement/fj.json",
      content:`
      {
 "criteria": {
   "requirement": {
     "trigger": "minecraft:tick"
   }
 },
 "rewards": {
   "function": "namespace:fj"
 }
}
      `
    },
    {
      path: "data/namespace/function/fj.mcfunction",
      content: `
recipe give @s minecraft:armored_elytra
      `
    },
    {
        path: "data/minecraft/recipe/armored_elytra.json",
        content: `
{
  "type": "minecraft:crafting_transmute",
  "category": "blocks",
  "input": "minecraft:netherite_chestplate",
  "material": "minecraft:elytra",
  "result": {
    "id": "minecraft:netherite_chestplate",
    "count": 1,
    "components": {
      "glider": {}
    }
  }
}
        `
    }
  ]
};