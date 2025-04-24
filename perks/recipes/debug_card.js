export default {
  "id": "debug_card",
  "name": "This Is A Debug Card",
  "description": "A description goes here. It should truncate if it doesn't fit on two lines and hopefully, the button beneath it should adjust accordingly. However, if you click on the button, a window should open, where the whole text can be seen without an issue.",
  "icon": "\u2699\ufe0f",
  "category": "recipes",
  "settings": [
    {
      "type": "section",
      "text": "Test Section Header"
    },
    {
      "type": "note",
      "text": "This is a note for developers."
    },
    {
      "type": "slider",
      "id": "debug_slider",
      "label": "Debug Slider",
      "min": 0,
      "max": 100,
      "step": 1,
      "default": 50
    },
    {
      "type": "text",
      "id": "debug_text",
      "label": "Debug Text",
      "placeholder": "Enter something",
      "default": "Hello world"
    },
    {
      "type": "number",
      "id": "debug_number",
      "label": "Debug Number",
      "default": 42,
      "min": 0,
      "max": 100
    },
    {
      "type": "checkbox",
      "id": "debug_checkbox",
      "label": "Enable Debug Mode",
      "default": true
    },
    {
      "type": "radio",
      "id": "debug_radio",
      "label": "Debug Mode Options",
      "default": "alpha",
      "options": [
        {
          "label": "Alpha",
          "value": "alpha"
        },
        {
          "label": "Beta",
          "value": "beta"
        },
        {
          "label": "Gamma",
          "value": "gamma"
        }
      ]
    },
    {
      "type": "textarea",
      "id": "debug_textarea",
      "label": "Debug Notes",
      "placeholder": "Write your notes here...",
      "default": "This is a test card.\nMultiline textarea test."
    },
    {
      "type": "separator"
    },
    {
      "type": "note",
      "text": "End of settings for testing block."
    }
  ]
};