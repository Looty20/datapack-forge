export default {
  "id": "copper_powered_rails",
  "name": "Copper Powered Rails",
  "description": "Allows using copper for powered rails.",
  "icon": "\u26a1\ud83d\udee4\ufe0f",
  "category": "recipes",
  "settings": [
    {
      "type": "number",
      "id": "powered_rail_amount",
      "label": "Amount produced",
      "default": 6,
      "min": 0,
      "max": 100
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
recipe give @s minecraft:powered_rails_copper
      `
    },
    {
        path: "data/minecraft/recipe/powered_rails_copper.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "redstone",
  "pattern": [
    "# #",
    "#s#",
    "#r#"
  ],
  "key": {
    "#": [
      "minecraft:copper_ingot"
    ],
    "s": [
      "minecraft:stick"
    ],
    "r": [
      "minecraft:redstone"
    ]
  },
  "result": {
    "id": "minecraft:powered_rail",
    "count": [powered_rail_amount]
  },
  "show_notification": false
}
        `
    }
  ]
};