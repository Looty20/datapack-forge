export default {
  "id": "auto_breeding",
  "name": "Passionate Livestock",
  "description": "Animals breed automatically when they have enough food.",
  "icon": "\u2764\ufe0f\u200d\ud83d\udd25\ud83d\udc04",
  "category": "tweaks",
  "settings": [
    {
      "type": "section",
      "text": "Auto-Breeding Settings"
    },
    {
      "type": "slider",
      "id": "breeding_range",
      "label": "Detection Range (blocks)",
      "min": 1,
      "max": 16,
      "step": 1,
      "default": 8
    },
    {
      "type": "number",
      "id": "food_threshold",
      "label": "Food Threshold per Animal",
      "default": 3,
      "min": 1,
      "max": 10
    },
    {
      "type": "radio",
      "id": "breeding_mode",
      "label": "Breeding Mode",
      "default": "proximity",
      "options": [
        {
          "label": "Proximity-based",
          "value": "proximity"
        },
        {
          "label": "Inventory-based",
          "value": "inventory"
        },
        {
          "label": "Always Active",
          "value": "always"
        }
      ]
    },
    {
      "type": "checkbox",
      "id": "enable_cooldown",
      "label": "Enable Breeding Cooldown",
      "default": true
    },
    {
      "type": "number",
      "id": "cooldown_seconds",
      "label": "Cooldown Duration (seconds)",
      "default": 60,
      "min": 10,
      "max": 600,
      "step": 10
    },
    {
      "type": "note",
      "text": "The cooldown only applies if 'Enable Breeding Cooldown' is checked."
    }
  ]
};