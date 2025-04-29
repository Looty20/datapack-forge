export default {
  "id": "craftable_deepslate",
  "name": "Craftable Deepslate",
  "description": "Craft deepslate from Cobblestone and Basalt.",
  "icon": "\ud83d\udda4\ud83e\udea8",
  "category": "recipes",
  "settings": [
    {
      "type": "number",
      "id": "cobbled_deepslate_amount",
      "label": "Amount produced",
      "default": 2,
      "min": 0,
      "max": 64
    }
  ],
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
recipe give @s minecraft:cobbled_deepslate
      `
    },
    {
        path: "data/minecraft/recipe/cobbled_deepslate.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "pattern": [
    "CB",
    "BC"
  ],
  "key": {
    "B": [
      "cobblestone"
    ],
    "C": [
      "minecraft:basalt"
    ]
  },
  "result": {
    "id": "minecraft:cobbled_deepslate",
    "count": 2
  },
  "show_notification": false,
  "count": [cobbled_deepslate_amount]
}
        `
    }
  ]
};