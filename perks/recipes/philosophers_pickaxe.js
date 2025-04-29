export default {
    "id": "philosophers_pickaxe",
    "name": "Philosopher's Pickaxe",
    "description": "A pickaxe of finite durability, imbued with exceptional fortune. Can be crafted using an iron pickaxe, lapis blocks and golden ingots",
    "icon": "📜⛏️",
    "category": "recipes",
    "settings": [
        {
            "type": "number",
            "id": "philosophers_pickaxe_durability",
            "label": "Durability",
            "default": 5,
            "min": 0,
            "max": 250
        },
        {
            "type": "number",
            "id": "philosophers_pickaxe_fortune",
            "label": "Fortune level",
            "default": 5,
            "min": 0,
            "max": 250
        },
        {
            "type": "separator"
        },
        {
            "type": "text",
            "id": "philosophers_pickaxe_custom_model_data_string",
            "label": "Custom model data string",
            "placeholder": "Add a string value",
            "default": "philosophers_pickaxe"
        },
        {
            "type": "note",
            "text": "This value allows you to link models from a resourcepack onto this item, giving it a unique look. Only change if you know what you're doing (or if there's a conflict)."
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
recipe give @s minecraft:philosophers_pickaxe
          `
        },
        {
            path: "data/minecraft/recipe/philosophers_pickaxe.json",
            content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "equipment",
  "pattern": [
    "aaa",
    "bcb",
    " c "
  ],
  "key": {
    "a": [
      "minecraft:lapis_block"
    ],
    "b": [
      "minecraft:diamond"
    ],
    "c": [
      "minecraft:stick"
    ]
  },
  "result": {
    "id": "minecraft:diamond_pickaxe",
    "components": {
      "minecraft:max_damage": [philosophers_pickaxe_durability],
      "minecraft:enchantments": {
        "minecraft:fortune": [philosophers_pickaxe_fortune]
      },
      "minecraft:enchantment_glint_override": false,
      "minecraft:repair_cost": 1000,
      "minecraft:item_name": "Philosopher's Pickaxe",
      "minecraft:rarity": "uncommon",
      "minecraft:custom_model_data": {
        "strings": [
          "phil"
        ]
      }
    }
  },
  "show_notification": false
}
            `
        }
      ]
  };