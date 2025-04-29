export default {
  "id": "craftable_notch_apple",
  "name": "Craftable Notch Apple",
  "description": "Allows you to craft enchanted golden apples using golden blocks",
  "icon": "\u2728\ud83c\udf4f",
  "category": "recipes",
  "settings": [
    {
      "type": "text",
      "id": "notch_apple_material",
      "label": "Surrounding material",
      "placeholder": "Please, enter something",
      "default": "minecraft:gold_block"
    },
    {
      "type": "separator"
    },
    {
      "type": "note",
      "text": "Place an apple in the center of the crafting grid and surround it with a block of your choice, which you can select using the field above."
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
recipe give @s minecraft:enchanted_golden_apple
      `
    },
    {
        path: "data/minecraft/recipe/enchanted_golden_apple.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "misc",
  "pattern": [
    "###",
    "#a#",
    "###"
  ],
  "key": {
    "#": [
      "[notch_apple_material]"
    ],
    "a": [
      "minecraft:apple"
    ]
  },
  "result": {
    "id": "minecraft:enchanted_golden_apple"
  },
  "show_notification": false
}
        `
    }
  ]
};

