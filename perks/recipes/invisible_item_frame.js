export default {
    "id": "invisible_item_frame",
    "name": "Invis. Frames",
    "description": "Allows you to craft invisible item frames, perfect for adding subtle detail to your builds — like placing items seamlessly on tables or shelves.",
    "icon": "🖼️",
    "category": "recipes",
    "settings": [
      {
        "type": "number",
        "id": "invisible_frame_amount",
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
  recipe give @s minecraft:invis_frame
        `
      },
      {
          path: "data/minecraft/recipe/invis_frame.json",
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
  
  