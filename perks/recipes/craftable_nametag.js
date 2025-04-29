export default {
  "id": "craftable_nametag",
  "name": "Craftable Name Tag",
  "description": "Enables crafting name tags using paper and iron.",
  "icon": "\ud83c\udff7\ufe0f",
  "category": "recipes",
  "settings": [
    {
      "type": "number",
      "id": "nametag_amount",
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
recipe give @s minecraft:name_tag
      `
    },
    {
        path: "data/minecraft/recipe/name_tag.json",
        content: `
{
  "type": "minecraft:crafting_shapeless",
  "category": "misc",
  "ingredients": [
    [
      "string"
    ],
    [
      "minecraft:iron_ingot"
    ],
    [
      "minecraft:ink_sac",
      "minecraft:glow_ink_sac"
    ],
    [
      "minecraft:paper"
    ]
  ],
  "result": {
    "id": "minecraft:name_tag",
    "count": [nametag_amount]
  }
}
        `
    }
  ]
};

