export default {
  "id": "player_attributes",
  "name": "Player Attributes",
  "description": "Every player who joins the game will automatically receive the following custom attributes and stats.",
  "icon": "🧍",
  "category": "players",
  "settings": [
    {
      "type": "section",
      "text": "Core Player Stats"
    },
    {
      "type": "slider",
      "id": "max_health",
      "label": "Max Health",
      "min": 1,
      "max": 1024,
      "step": 1,
      "default": 20
    },
    {
      "type": "slider",
      "id": "movement_speed",
      "label": "Movement Speed",
      "min": 0.01,
      "max": 1.0,
      "step": 0.01,
      "default": 0.1
    },
    {
      "type": "slider",
      "id": "attack_damage",
      "label": "Attack Damage",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 1
    },
    {
      "type": "slider",
      "id": "attack_speed",
      "label": "Attack Speed",
      "min": 0,
      "max": 10,
      "step": 0.1,
      "default": 4
    },
    {
      "type": "slider",
      "id": "armor",
      "label": "Armor",
      "min": 0,
      "max": 30,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "armor_toughness",
      "label": "Armor Toughness",
      "min": 0,
      "max": 20,
      "step": 0.1,
      "default": 0
    },

    {
      "type": "separator"
    },

    {
      "type": "section",
      "text": "Advanced Attributes"
    },
    {
      "type": "slider",
      "id": "knockback_resistance",
      "label": "Knockback Resistance",
      "min": 0,
      "max": 1,
      "step": 0.05,
      "default": 0
    },
    {
      "type": "slider",
      "id": "attack_knockback",
      "label": "Attack Knockback",
      "min": 0,
      "max": 5,
      "step": 0.1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "luck",
      "label": "Luck",
      "min": -100,
      "max": 100,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "max_absorption",
      "label": "Max Absorption",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "block_break_speed",
      "label": "Block break speed",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 1
    },
    {
      "type": "slider",
      "id": "block_interaction_range",
      "label": "Block interaction range",
      "min": 0,
      "max": 64,
      "step": 1,
      "default": 5
    },
    {
      "type": "slider",
      "id": "burning_time",
      "label": "Burning time",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 1
    },
    {
      "type": "slider",
      "id": "entity_interaction_range",
      "label": "Entity interaction range",
      "min": 0,
      "max": 64,
      "step": 1,
      "default": 5
    },
    {
      "type": "slider",
      "id": "explosion_knockback_resistance",
      "label": "Explosion knockback resistance",
      "min": 0,
      "max": 1,
      "step": 0.05,
      "default": 0
    },
    {
      "type": "slider",
      "id": "fall_damage_multiplier",
      "label": "Fall damage multiplier",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 1
    },
    {
      "type": "slider",
      "id": "gravity",
      "label": "Gravity",
      "min": -5,
      "max": 5,
      "step": 0.05,
      "default": 0.08
    },
    {
      "type": "slider",
      "id": "jump_strength",
      "label": "Jump strength",
      "min": 0,
      "max": 100,
      "step": 0.01,
      "default": 0.42
    },
    {
      "type": "slider",
      "id": "mining_efficiency",
      "label": "Mining efficiency",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "movement_efficiency",
      "label": "Movement efficiency",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "oxygen_bonus",
      "label": "Oxygen bonus",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "safe_fall_distance",
      "label": "Safe fall distance",
      "min": 0,
      "max": 100,
      "step": 0.5,
      "default": 3
    },
    {
      "type": "slider",
      "id": "scale",
      "label": "Scale",
      "min": 0.2,
      "max": 100,
      "step": 0.2,
      "default": 1
    },
    {
      "type": "slider",
      "id": "sneaking_speed",
      "label": "Sneaking speed",
      "min": 0,
      "max": 100,
      "step": 0.1,
      "default": 0.3
    },
    {
      "type": "slider",
      "id": "step_height",
      "label": "Step height",
      "min": 0,
      "max": 100,
      "step": 0.1,
      "default": 0.6
    },
    {
      "type": "slider",
      "id": "submerged_mining_speed",
      "label": "Submerged mining speed",
      "min": 0,
      "max": 100,
      "step": 0.1,
      "default": 0.2
    },
    {
      "type": "slider",
      "id": "sweeping_damage_ratio",
      "label": "Sweeping damage ratio",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
    },
    {
      "type": "slider",
      "id": "water_movement_efficiency",
      "label": "Water movement efficiency",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
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

# Player Attributes
attribute @s minecraft:armor base set 10
      `
    }
  ]
};
