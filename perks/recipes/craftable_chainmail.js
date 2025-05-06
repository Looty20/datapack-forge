export default {
  "id": "craftable_chainmail",
  "name": "Craftable Chainmail Armor",
  "description": "Lets players craft chainmail armor using iron nuggets.",
  "icon": "\u26d3\ufe0f",
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
recipe give @s minecraft:chainmail_boots
recipe give @s minecraft:chainmail_chestplate
recipe give @s minecraft:chainmail_helmet
recipe give @s minecraft:chainmail_leggings
      `
    },
    {
        path: "data/minecraft/recipe/chainmail_boots.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "pattern": [
    "# #",
    "# #"
  ],
  "key": {
    "#": [
      "minecraft:iron_nugget"
    ]
  },
  "result": {
    "id": "minecraft:chainmail_boots"
  },
  "show_notification": false
}
        `
    },
    {
      path: "data/minecraft/recipe/chainmail_chestplate.json",
      content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "pattern": [
    "# #",
    "###",
    "###"
  ],
  "key": {
    "#": [
      "minecraft:iron_nugget"
    ]
  },
  "result": {
    "id": "minecraft:chainmail_chestplate"
  },
  "show_notification": false
}
      `
    },
    {
    path: "data/minecraft/recipe/chainmail_helmet.json",
    content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "pattern": [
    "###",
    "# #"
  ],
  "key": {
    "#": [
      "minecraft:iron_nugget"
    ]
  },
  "result": {
    "id": "minecraft:chainmail_helmet"
  },
  "show_notification": false
}
    `
    },
    {
  path: "data/minecraft/recipe/chainmail_leggings.json",
  content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "pattern": [
    "###",
    "# #",
    "# #"
  ],
  "key": {
    "#": [
      "minecraft:iron_nugget"
    ]
  },
  "result": {
    "id": "minecraft:chainmail_leggings"
  },
  "show_notification": false
}
  `
    }
  ]
};