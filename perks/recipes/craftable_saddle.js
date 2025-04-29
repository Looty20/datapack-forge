export default {
  "id": "craftable_saddle",
  "name": "Craftable Saddle",
  "description": "Allows crafting of saddles using leather, string and iron.",
  "icon": "\ud83d\udc0e",
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
recipe give @s minecraft:saddle
      `
    },
    {
        path: "data/minecraft/recipe/saddle.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "pattern": [
    "###",
    "#i#",
    " s "
  ],
  "key": {
    "#": [
      "minecraft:leather"
    ],
    "i": [
      "string"
    ],
    "s": [
      "iron_ingot"
    ]
  },
  "show_notification": false
}
        `
    }
  ]
};