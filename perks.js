const perks = [
    // === RECIPES ===
    {
      id: "debug_card",
      name: "This Is A Debug Card",
      description: "A description goes here. It should truncate if it doesn't fit on two lines and hopefully, the button beneath it should adjust accordingly. However, if you click on the button, a window should open, where the whole text can be seen without an issue.",
      icon: "⚙️",
      category: "recipes",
      settings: [
        { type: "section", text: "Test Section Header" },
        { type: "note", text: "This is a note for developers." },
        {
          type: "slider",
          id: "debug_slider",
          label: "Debug Slider",
          min: 0,
          max: 100,
          step: 1,
          default: 50
        },
        {
          type: "text",
          id: "debug_text",
          label: "Debug Text",
          placeholder: "Enter something",
          default: "Hello world"
        },
        {
          type: "number",
          id: "debug_number",
          label: "Debug Number",
          default: 42,
          min: 0,
          max: 100
        },
        {
          type: "checkbox",
          id: "debug_checkbox",
          label: "Enable Debug Mode",
          default: true
        },
        {
          type: "radio",
          id: "debug_radio",
          label: "Debug Mode Options",
          default: "alpha",
          options: [
            { label: "Alpha", value: "alpha" },
            { label: "Beta", value: "beta" },
            { label: "Gamma", value: "gamma" }
          ]
        },
        {
          type: "textarea",
          id: "debug_textarea",
          label: "Debug Notes",
          placeholder: "Write your notes here...",
          default: "This is a test card.\nMultiline textarea test."
        },
        { type: "separator" },
        { type: "note", text: "End of settings for testing block." }
      ]
    },
    {
      id: "craftable_saddle",
      name: "Craftable Saddle",
      description: "Allows crafting of saddles using leather and iron.",
      icon: "🐎",
      category: "recipes",
    },
    {
      id: "craftable_nametag",
      name: "Craftable Name Tag",
      description: "Enables crafting name tags using paper and iron.",
      icon: "🏷️",
      category: "recipes"
    },
    {
      id: "craftable_cobweb",
      name: "Craftable Cobweb",
      description: "Lets you craft cobwebs using string.",
      icon: "🕸️",
      category: "recipes"
    },
    {
      id: "craftable_deepslate",
      name: "Craftable Deepslate",
      description: "Craft deepslate from Cobblestone and Basalt.",
      icon: "🖤🪨",
      category: "recipes"
    },
    {
      id: "stonecutting_wood",
      name: "Stonecutting Wood",
      description: "Cut wood into blocks in stonecutter as you would stone.",
      icon: "🪚🪵",
      category: "recipes"
    },
    {
      id: "copper_powered_rails",
      name: "Copper Powered Rails",
      description: "Allows using copper for powered rails.",
      icon: "⚡🛤️",
      category: "recipes"
    },
    {
      id: "craftable_chainmail",
      name: "Craftable Chainmail Armor",
      description: "Lets players craft chainmail armor using chains.",
      icon: "⛓️",
      category: "recipes"
    },
    {
      id: "craftable_calcite",
      name: "Craftable Calcite",
      description: "Craft calcite blocks from bones and cobblestone",
      icon: "⚪🪨",
      category: "recipes"
    },
    {
      id: "craftable_notch_apple",
      name: "Craftable Notch Apple",
      description: "Allows you to craft enchanted golden apples using golden blocks",
      icon: "✨🍏",
      category: "recipes"
    },
    {
      id: "craftable_slimeballs",
      name: "Craftable Slimeballs",
      description: "Craft Slimeballs from green dye and water.",
      icon: "💧🟢",
      category: "recipes"
    },
    {
        id: "armored_elytra",
        name: "Armored Elytra",
        description: "Permanently combine an Elytra with any Chestplate. All enchantments and protection levels are retained, but can’t be modified afterward.",
        icon: "🛡️🪽",
        category: "recipes"
      },
  
    // === LOOT TABLES ===
    {
      id: "husk_drop_sand",
      name: "Husks Drop Sand",
      description: "Husks have a chance to drop sand on death.",
      icon: "🪨",
      category: "loot"
    },
    {
      id: "bats_drop_membranes",
      name: "Bats Drop Membranes",
      description: "Bats have a chance to drop membrane on death.",
      icon: "🦇",
      category: "loot"
    },
    {
      id: "villager_meat",
      name: "Villager Meat",
      description: "My friends asked me to add this... Villagers drop meat, which can be cooked and eaten.",
      icon: "🥩",
      category: "loot"
    },
    {
      id: "extra_wheat_from_villager_chests",
      name: "Extra Wheat in Villager Chests",
      description: "Slight boost to wheat loot in villages.",
      icon: "🌾",
      category: "loot"
    },
  
    // === TWEAKS ===
    {
      id: "tree_planting",
      name: "Automatic Tree Planting",
      description: "Saplings left on the ground have a chance to replant themselves after a while.",
      icon: "🌱",
      category: "tweaks"
    },
    {
      id: "stackable_soups",
      name: "Stackable Soups",
      description: "Soups can be stacked, making them a valid food source.",
      icon: "🍲",
      category: "tweaks",
      settings: [
        {
          type: "section",
          text: "Soup Stacking Options"
        },
        {
          type: "note",
          text: "This affects all soups including mushroom stew and suspicious stew, depending on your options below."
        },
        {
          type: "slider",
          id: "max_stack",
          label: "Max Stack Size",
          min: 1,
          max: 64,
          step: 1,
          default: 16
        },
        {
          type: "checkbox",
          id: "include_stew",
          label: "Include Stew Variants",
          default: true
        },
        {
          type: "text",
          id: "custom_tag",
          label: "Custom NBT Tag",
          placeholder: "e.g., stackable",
          default: ""
        },
        {
          type: "separator"
        },
        {
          type: "section",
          text: "Experimental Settings"
        },
        {
          type: "note",
          text: "These are advanced options for overriding default game behavior. Use with caution."
        },
        {
          type: "checkbox",
          id: "override_defaults",
          label: "Override Vanilla Stack Rules",
          default: false
        },
        {
          type: "textarea",
          id: "affected_items",
          label: "Affected Items (one per line)",
          placeholder: "e.g.\nminecraft:iron\nminecraft:redstone",
          default: "minecraft:iron\nminecraft:redstone\nminecraft:coal"
        }
        
      ]
    },
    {
      id: "no_enderman_grief",
      name: "No Enderman Grief",
      description: "Prevents Endermen from picking up blocks.",
      icon: "🙅‍♂️",
      category: "tweaks"
    },
    {
      id: "lock_weather",
      name: "Weather Lock",
      description: "The weather will remain constant.",
      icon: "🌤️",
      category: "tweaks"
    },
    {
      id: "totem_void",
      name: "Enhanced Totem Of Undying",
      description: "The totem will now attempt to save you by teleporting you to a nearby safe location when you fall into the void in The End (unless too far).",
      icon: "🗿",
      category: "tweaks"
    },
    {
      id: "infinite_burn",
      name: "Players burn infninitely",
      description: "When set on fire, players will burn until they die / find water",
      icon: "🔥💀",
      category: "tweaks"
    },
    {
      id: "trader_death_items",
      name: "Wandering Trader Sells Lost Items",
      description: "When you die, after a while a trader appears near your spawn location, selling the items you have lost...",
      icon: "📦🦙",
      category: "tweaks"
    },
    {
      id: "glint_override",
      name: "Enchantment Glint Override",
      description: "No glint over enchanted items. (Visual change)",
      icon: "❌✨",
      category: "tweaks"
    },
    {
      id: "ender_chest_pages",
      name: "Ender Chest Pages",
      description: "Players can store more items in their ender chests.",
      icon: "🪄📚",
      category: "tweaks"
    },
    {
      id: "auto_breeding",
      name: "Passionate Livestock",
      description: "Animals breed automatically when they have enough food.",
      icon: "❤️‍🔥🐄",
      category: "tweaks",
      settings: [
        {
          type: "section",
          text: "Auto-Breeding Settings"
        },
        {
          type: "slider",
          id: "breeding_range",
          label: "Detection Range (blocks)",
          min: 1,
          max: 16,
          step: 1,
          default: 8
        },
        {
          type: "number",
          id: "food_threshold",
          label: "Food Threshold per Animal",
          default: 3,
          min: 1,
          max: 10
        },
        {
          type: "radio",
          id: "breeding_mode",
          label: "Breeding Mode",
          default: "proximity",
          options: [
            { label: "Proximity-based", value: "proximity" },
            { label: "Inventory-based", value: "inventory" },
            { label: "Always Active", value: "always" }
          ]
        },
        {
          type: "checkbox",
          id: "enable_cooldown",
          label: "Enable Breeding Cooldown",
          default: true
        },
        {
          type: "number",
          id: "cooldown_seconds",
          label: "Cooldown Duration (seconds)",
          default: 60,
          min: 10,
          max: 600,
          step: 10
        },
        {
          type: "note",
          text: "The cooldown only applies if 'Enable Breeding Cooldown' is checked."
        }
      ]
    }
    
  ];