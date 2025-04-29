export default {
  "id": "craftable_calcite",
  "name": "Craftable Calcite",
  "description": "Craft calcite blocks from bones and cobblestone",
  "icon": "\u26aa\ud83e\udea8",
  "category": "recipes",
  "settings": [
    {
      "type": "number",
      "id": "calcite_amount",
      "label": "Amount produced",
      "default": 1,
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
recipe give @s minecraft:calcite
      `
    },
    {
        path: "data/minecraft/recipe/calcite.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "pattern": [
    "ab",
    "ba"
  ],
  "key": {
    "a": [
      "minecraft:cobblestone"
    ],
    "b": [
      "minecraft:bone"
    ]
  },
  "result": {
    "id": "minecraft:calcite",
    "count": [calcite_amount]
  },
  "show_notification": false
}
        `
    }
  ]
};