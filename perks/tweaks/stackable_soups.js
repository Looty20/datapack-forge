export default {
  "id": "stackable_soups",
  "name": "Stackable Soups",
  "description": "Soups can be stacked, making them a valid food source.",
  "icon": "\ud83c\udf72",
  "category": "tweaks",
  "settings": [
    {
      "type": "section",
      "text": "Soup Stacking Options"
    },
    {
      "type": "note",
      "text": "This affects all soups including mushroom stew and suspicious stew, depending on your options below."
    },
    {
      "type": "slider",
      "id": "max_stack",
      "label": "Max Stack Size",
      "min": 1,
      "max": 64,
      "step": 1,
      "default": 16
    },
    {
      "type": "checkbox",
      "id": "include_stew",
      "label": "Include Stew Variants",
      "default": true
    },
    {
      "type": "text",
      "id": "custom_tag",
      "label": "Custom NBT Tag",
      "placeholder": "e.g., stackable",
      "default": ""
    },
    {
      "type": "separator"
    },
    {
      "type": "section",
      "text": "Experimental Settings"
    },
    {
      "type": "note",
      "text": "These are advanced options for overriding default game behavior. Use with caution."
    },
    {
      "type": "checkbox",
      "id": "override_defaults",
      "label": "Override Vanilla Stack Rules",
      "default": false
    },
    {
      "type": "textarea",
      "id": "affected_items",
      "label": "Affected Items (one per line)",
      "placeholder": "e.g.\nminecraft:iron\nminecraft:redstone",
      "default": "minecraft:iron\nminecraft:redstone\nminecraft:coal"
    }
  ]
};