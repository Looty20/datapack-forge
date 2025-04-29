// === Recipes ===
import debugCard from './recipes/debug_card.js';
import craftableSaddle from './recipes/craftable_saddle.js';
import craftableNameTag from './recipes/craftable_nametag.js';
import craftableCobweb from './recipes/craftable_cobweb.js';
import craftableDeepslate from './recipes/craftable_deepslate.js';
import stonecuttingWood from './recipes/stonecutting_wood.js';
import copperPoweredRails from './recipes/copper_powered_rails.js';
import craftableChainmail from './recipes/craftable_chainmail.js';
import craftableCalcite from './recipes/craftable_calcite.js';
import craftableNotchApple from './recipes/craftable_notch_apple.js';
import craftableSlimeballs from './recipes/craftable_slimeballs.js';
import armoredElytra from './recipes/armored_elytra.js';
import philosophersPickaxe from './recipes/philosophers_pickaxe.js';
import invisibleItemFrame from './recipes/invisible_item_frame.js';

// === Loot Tables ===
import huskDropSand from './loot/husk_drop_sand.js';
import batsDropMembranes from './loot/bats_drop_membranes.js';
import villagerMeat from './loot/villager_meat.js';
import extraWheat from './loot/extra_wheat_from_villager_chests.js';

// === Tweaks ===
import treePlanting from './tweaks/tree_planting.js';
import stackableSoups from './tweaks/stackable_soups.js';
import noEndermanGrief from './tweaks/no_enderman_grief.js';
import lockWeather from './tweaks/lock_weather.js';
import totemVoid from './tweaks/totem_void.js';
import infiniteBurn from './tweaks/infinite_burn.js';
import traderDeathItems from './tweaks/trader_death_items.js';
import glintOverride from './tweaks/glint_override.js';
import enderChestPages from './tweaks/ender_chest_pages.js';
import autoBreeding from './tweaks/auto_breeding.js';

// === Players ===
import playerAttributes from './players/player_attributes.js';

// === Enemies ===
import enemyCardExample from './enemies/enemy_card_example.js';

// === Other ===
import welcomeMessage from './other/welcome_message.js';
import worldBorder from './other/world_border.js';


export const perks = [
  // Recipes
  debugCard,
  craftableSaddle,
  craftableNameTag,
  craftableCobweb,
  craftableDeepslate,
  stonecuttingWood,
  copperPoweredRails,
  craftableChainmail,
  craftableCalcite,
  craftableNotchApple,
  craftableSlimeballs,
  armoredElytra,
  philosophersPickaxe,
  invisibleItemFrame,

  // Loot
  huskDropSand,
  batsDropMembranes,
  villagerMeat,
  extraWheat,

  // Tweaks
  treePlanting,
  stackableSoups,
  noEndermanGrief,
  lockWeather,
  totemVoid,
  infiniteBurn,
  traderDeathItems,
  glintOverride,
  enderChestPages,
  autoBreeding,

  // Players
  playerAttributes,

  // Enemies
  enemyCardExample,

  // Other
  welcomeMessage,
  worldBorder
];
