const perks = [
    // === RECIPES ===
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
      id: "smooth_random_tick",
      name: "Smoother Random Ticks",
      description: "Spreads random ticks more evenly for farms.",
      icon: "⚙️",
      category: "tweaks"
    }
  ];