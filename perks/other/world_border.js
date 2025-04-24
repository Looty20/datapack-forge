export default {
  id: "world_border",
  name: "World Border",
  description: "Defines a world border centered around the spawn chunk. Adjust the radius to limit how far players can travel.",
  icon: "🚧",
  category: "other",
  settings: [
    {
      type: "number",
      id: "border_radius",
      label: "Border Radius (blocks)",
      placeholder: "Enter radius in blocks...",
      default: 1000,
      min: 100,
      max: 30000,
      step: 50
    }
  ],
  files: [
    {
      path: "data/namespace/function/load.mcfunction",
      content: `
# World border setup
worldborder center 0 0
worldborder set [border_radius]
`.trim()
    }
  ]
};
