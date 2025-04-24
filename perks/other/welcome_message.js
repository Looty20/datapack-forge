export default {
  "id": "welcome_message",
  "name": "Welcome Message",
  "description": "This message is shown to players the first time they join the game. Avoid using special characters that may affect formatting.\n(\" and \\)",
  "icon": "👋",
  "category": "other",
  "settings": [
    {
      "type": "textarea",
      "id": "welcome_text",
      "label": "Welcome Message Text",
      "placeholder": "Enter the welcome message players will see...",
      "default": "Welcome aboard"
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
tellraw @s [{text:"[welcome_text]", color:"green"}]
      `
    }
  ]
};