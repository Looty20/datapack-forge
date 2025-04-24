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
      "step": 0.5,
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
      "max": 10,
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
      "id": "follow_range",
      "label": "Follow Range",
      "min": 1,
      "max": 128,
      "step": 1,
      "default": 32
    },
    {
      "type": "slider",
      "id": "flying_speed",
      "label": "Flying Speed",
      "min": 0.01,
      "max": 1.0,
      "step": 0.01,
      "default": 0.05
    },
    {
      "type": "slider",
      "id": "max_absorption",
      "label": "Max Absorption",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 0
    }
  ]
};
