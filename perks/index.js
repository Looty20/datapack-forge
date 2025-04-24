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
import playerCardExample from './players/player_card_example.js';
import playerHealth from './players/player_health.js';

// === Enemies ===
import enemyCardExample from './enemies/enemy_card_example.js';

// === Other ===
import otherCardExample from './other/other_card_example.js';

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
  playerCardExample,
  playerHealth,

  // Enemies
  enemyCardExample,

  // Other
  otherCardExample
];
