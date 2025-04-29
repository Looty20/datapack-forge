export default {
  "id": "craftable_cobweb",
  "name": "Craftable Cobweb",
  "description": "Lets you craft cobwebs using string.",
  "icon": "\ud83d\udd78\ufe0f",
  "category": "recipes",
  "settings": [
    {
      "type": "number",
      "id": "cobweb_amount",
      "label": "Amount produced",
      "default": 1,
      "min": 0,
      "max": 100
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
recipe give @s minecraft:cobweb
      `
    },
    {
        path: "data/minecraft/recipe/cobweb.json",
        content: `
{
  "type": "minecraft:crafting_shaped",
  "category": "building",
  "pattern": [
    "# #",
    " # ",
    "# #"
  ],
  "key": {
    "#": [
      "string"
    ]
  },
  "result": {
    "id": "minecraft:cobweb",
    "count": [cobweb_amount]
  },
  "show_notification": false
}
        `
    }
  ]
};