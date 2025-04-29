export default {
  "id": "craftable_slimeballs",
  "name": "Craftable Slimeballs",
  "description": "Craft Slimeballs from green dye and water.",
  "icon": "\ud83d\udca7\ud83d\udfe2",
  "category": "recipes",
  "settings": [
    {
      "type": "number",
      "id": "slimeball_amount",
      "label": "Amount produced",
      "default": 1,
      "min": 0,
      "max": 64
    },
    {
      "type": "separator"
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
recipe give @s minecraft:slimeball
      `
    },
    {
        path: "data/minecraft/recipe/slimeball.json",
        content: `
{
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    [
      "minecraft:water_bucket"
    ],
    [
      "green_dye"
    ]
  ],
  "result": {
    "id": "minecraft:slime_ball",
    "count": [slimeball_amount]
  },
  "show_notification": false
}
        `
    }
  ]
};