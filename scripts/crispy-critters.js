/*
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠀⢰⣆⠀⠀⣴⣄⠀⠙⠷⣦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠘⣷⡄⠹⡆⠀⠀⠙⠻⢶⣤⣌⡙⢷⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢰⠆⠈⢻⣆⠈⠀⠀⠀⠀⠀⠀⠉⠛⠛⠺⠿⣿⣶⣤⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣼⠀⠊⠀⢻⣷⣄⠀⢀⣀⡀⢰⣶⣶⣶⣤⡄⠀⠈⠙⣿⠆⠀⠀⠀
⠀⢀⣤⡔⢀⡏⢀⣿⣷⡀⢻⣿⣷⡀⠻⣷⣄⡉⢻⣿⠏⢠⡞⠰⠾⠛⠀⠀⠀⠀
⠀⠀⠈⠁⢸⠇⢸⣿⣿⣧⡈⢻⣿⠿⠀⠙⠛⠃⠈⠛⠀⢿⣇⡐⠀⢶⡀⠀⠀⠀
⠀⠀⠀⠀⣾⠀⣤⣤⣤⣤⡤⠄⠁⣴⡶⠿⠿⠿⠂⢶⣦⡈⢉⣤⣤⡈⢳⣤⡄⠀
⠀⠀⠂⠀⡇⠀⠀⠀⠀⠀⠀⠀⣸⡟⠀⢶⣆⠀⠀⠀⠉⠛⠋⠁⠈⠳⣄⣀⡄⠀
⠀⠠⠴⠖⠃⠀⠀⠀⠀⠀⠀⠀⢿⣅⠀⠀⠙⠓⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
*/

const MODULE_ID = "crispy-critters";
const PREFIX = "🦗";
const PATH = `modules/${MODULE_ID}`;

const FONTS = {
  "Montserrat": "montserrat/montserrat-v31-latin-700.woff2"
};

const COLOR = {
  BLACK: "#000000",
  WHITE: "#ffffff"
};

const BLACK_TEXT = {
  foreground: COLOR.BLACK,
  background: COLOR.BLACK
};

const BLACK_TEXT_WHITE_OUTLINE = {
  ...BLACK_TEXT,
  outline: COLOR.WHITE
};

const THEME_DEFAULT = {
  font: "Montserrat",
  foreground: COLOR.WHITE,
  material: "plastic",
  visibility: "visible"
};

/*
SERIES:
[<theme ID/texture webp file name>, <theme display name>, <accent color>, <optional overrides>]

Default theme settings:
- font: Montserrat
- foreground (numbering color): white
- background (dice color): <accent color>
- outline: <accent color>
- edge: <accent color>
- material: plastic
- visibility: visible

You can override all default settings when defining a theme
*/

const SERIES = {
  "Astral Series": [
    ["as-black-hole", "Black Hole", "#fde5ce"],
    ["as-cataclysm", "Cataclysm", COLOR.BLACK],
    ["as-cosmic-chaos", "Cosmic Chaos", "#fcae31"],
    ["as-ember", "Ember", "#6d186c"],
    ["as-moon", "Moon", "#32333e"],
    ["as-nebula", "Nebula", "#003b99"],
    ["as-radiance", "Radiance", "#efb10c"],
    ["as-solaris", "Solaris", "#f64933"],
    ["as-space-oddity", "Space Oddity", "#1d4e6d"],
    ["as-tempest", "Tempest", "#066f73"],
    ["as-tide", "Tide", "#358363"]
  ],

  "Candy Series": [
    ["cs-candy-hearts", "Candy Hearts", "#bb0306"],
    ["cs-cotton-candy", "Cotton Candy", "#fb87c3"],
    ["cs-mint-chocolate-chip", "Mint Chocolate Chip", "#7fa96e", BLACK_TEXT],
    ["cs-saltwater-taffy", "Saltwater Taffy", "#7bcbe2", BLACK_TEXT],
    ["cs-sweets", "Sweets", "#fa9633", BLACK_TEXT],
    ["cs-waffles", "Waffles", "#f3a936"]
  ],

  "Crystal Series": [
    ["crs-amethyst", "Amethyst", "#9966cc"],
    ["crs-diamond", "Diamond", "#eaf6ff", BLACK_TEXT],
    ["crs-emerald", "Emerald", "#50c878"],
    ["crs-ruby", "Ruby", "#e0115f"],
    ["crs-sapphire", "Sapphire", "#0f52ba"],
    ["crs-topaz", "Topaz", "#ffc857"]
  ],

  "Mythic Marble Series": [
    ["mms-blazewave", "Blazewave", "#fd7c01"],
    ["mms-dreamweaver", "Dreamweaver", "#6232cb"],
    ["mms-enchanted-forest", "Enchanted Forest", "#649e63"],
    ["mms-funhouse-fever", "Funhouse Fever", "#fcc54a"],
    ["mms-funkalicious", "Funkalicious", "#de537d"],
    ["mms-necrosis", "Necrosis", "#554085"],
    ["mms-nefarious-knight", "Nefarious Knight", "#780203"],
    ["mms-neptunes-wake", "Neptune's Wake", "#aad4d2"],
    ["mms-phoenix", "Phoenix", "#fd5b02"],
    ["mms-skybreaker", "Skybreaker", "#3e5979"],
    ["mms-toxic-twirls", "Toxic Twirls", "#cbf50a"]
  ],

  "Obsidian Series": [
    ["os-ice", "Ice", "#80a6ff"],
    ["os-magma", "Magma", "#c73032"],
    ["os-ooze", "Ooze", "#9cd604"]
  ],

  "Pixie Series": [
    ["ps-pixie-blue", "Pixie Blue", "#2badff"],
    ["ps-pixie-pink", "Pixie Pink", "#ff89ff"]
  ],

  "Signature Series": [
    ["ss-barbarian", "Barbarian", "#e7623e"],
    ["ss-bard", "Bard", "#ab6dac"],
    ["ss-cleric", "Cleric", "#91a1b2"],
    ["ss-druid", "Druid", "#7a853b"],
    ["ss-fighter", "Fighter", "#7f513e"],
    ["ss-monk", "Monk", "#51a5c5"],
    ["ss-paladin", "Paladin", "#b59e54"],
    ["ss-ranger", "Ranger", "#507f62"],
    ["ss-rogue", "Rogue", "#555752"],
    ["ss-sorcerer", "Sorcerer", "#992e2e"],
    ["ss-warlock", "Warlock", "#7b469b"],
    ["ss-wizard", "Wizard", "#2a50a1"],   
  ],

  "Spooky Series": [
    ["sps-abyssal-grave", "Abyssal Grave", "#005255"],
    ["sps-bones", "Bones", "#593a14"],
    ["sps-dexters-delight", "Dexter's Delight", "#630201", BLACK_TEXT_WHITE_OUTLINE],
    ["sps-eldritch-night", "Eldritch Night", "#784a78"],
    ["sps-god-damaged", "God Damaged", "#af03ef"],
    ["sps-hypno-creep", "Hypno Creep", "#161616"],
    ["sps-party-skulls", "Party Skulls", "#07bfb0"],
    ["sps-spooky-ghosts", "Spooky Ghosts", "#1b1e2a"],
    ["sps-wall-of-eyes", "Wall of Eyes", COLOR.BLACK],
    ["sps-zombies", "Zombies", "#7b9c86"],
  ],

  "Wildcard Series": [
    ["ws-bbc", "BBC (Big Beautiful Cow)", COLOR.WHITE, BLACK_TEXT_WHITE_OUTLINE],
    ["ws-checkers", "Checkers", "#b7050a"],
    ["ws-dragon-scale", "Dragon Scale", "#cd4500"],
    ["ws-fort-ardovon", "Fort Ardovon", "#f5c709"],
    ["ws-gabbys-grass", "Gabby's Grass", "#66a509"],
    ["ws-san-diego-sunset", "San Diego Sunset", "#ef0200"],
    ["ws-synthwave", "Synthwave", "#600095"],
    ["ws-vampira", "Vampira", "#c73032"],
    ["ws-winter-is-coming", "Winter Is Coming", "#80a6ff"]
  ]
};

const THEMES = Object.entries(SERIES).flatMap(([category, themes]) =>
  themes.map(([name, description, color, overrides = {}]) => ({
    ...THEME_DEFAULT,
    name,
    texture: name,
    description,
    category,
    background: color,
    outline: color,
    edge: color,
    ...overrides
  }))
);

Hooks.on("init", registerFonts);

Hooks.once("diceSoNiceReady", async (dice3d) => {
  await registerTextures(dice3d);
  registerThemes(dice3d);
});

function registerFonts() {
  for (const [name, file] of Object.entries(FONTS)) {
    CONFIG.fontDefinitions[`${PREFIX} ${name}`] = {
      editor: true,
      fonts: [{ urls: [`${PATH}/fonts/${file}`] }]
    };
  }
}

async function registerTextures(dice3d) {
  await Promise.all(
    THEMES.map(({ name, description, texture }) =>
      dice3d.addTexture(name, {
        name: `${PREFIX} ${description}`,
        composite: "source-over",
        source: `${PATH}/textures/${texture}.webp`
      })
    )
  );
}

function registerThemes(dice3d) {
  for (const theme of THEMES) {
    dice3d.addColorset(
      {
        ...theme,
        description: `${PREFIX} ${theme.description}`,
        category: `${PREFIX} ${theme.category}`,
        font: `${PREFIX} ${theme.font}`
      },
      "preferred"
    );
  }
}