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
  "Montserrat": "montserrat/montserrat-v31-latin-700.woff2",
};

const THEME_DEFAULT = {
  font: "Montserrat",
  foreground: "#ffffff",
  material: "plastic",
  visibility: "visible"
};

const SERIES = {
  "Astral Series": [
    ["cosmic-chaos", "Cosmic Chaos", "#fcae31"],
    ["ember", "Ember", "#6d186c"],
    ["moon", "Moon", "#32333e"],
    ["nebula", "Nebula", "#003b99"],
    ["radiance", "Radiance", "#efb10c"],
    ["solaris", "Solaris", "#f64933"],
    ["space-oddity", "Space Oddity", "#1d4e6d"],
    ["tempest", "Tempest", "#066f73"],
    ["tide", "Tide", "#358363"]
  ],

  "Candy Series": [
    ["candy-hearts", "Candy Hearts", "#bb0306"],
    ["cotton-candy", "Cotton Candy", "#fb87c3"],
    ["sweets", "Sweets", "#fa9633"]
  ],

  "Obsidian Series": [
    ["ice", "Ice", "#80a6ff"],
    ["magma", "Magma", "#c73032"],
    ["ooze", "Ooze", "#9cd604"]
  ],

  "Pixie Series": [
    ["pixie-blue", "Pixie Blue", "#2badff"],
    ["pixie-pink", "Pixie Pink", "#ff89ff"]
  ],

  "Signature Series": [
    ["barbarian", "Barbarian", "#e7623e"],
    ["bard", "Bard", "#ab6dac"],
    ["cleric", "Cleric", "#91a1b2"],
    ["druid", "Druid", "#7a853b"],
    ["fighter", "Fighter", "#7f513e"],
    ["monk", "Monk", "#51a5c5"],
    ["paladin", "Paladin", "#b59e54"],
    ["ranger", "Ranger", "#507f62"],
    ["rogue", "Rogue", "#555752"],
    ["sorcerer", "Sorcerer", "#992e2e"],
    ["warlock", "Warlock", "#7b469b"],
    ["wizard", "Wizard", "#2a50a1"]
  ],

  "Spooky Series": [
    ["abyssal-grave", "Abyssal Grave", "#005255"],
    ["eldritch-night", "Eldritch Night", "#784a78"],
    ["god-damaged", "God Damaged", "#af03ef"],
    ["hypno-creep", "Hypno Creep", "#161616"],
    ["party-skulls", "Party Skulls", "#07bfb0"],
    ["spooky-ghosts", "Spooky Ghosts", "#1b1e2a"],
    ["zombies", "Zombies", "#7b9c86"]
  ],

  "Wildcard Series": [
    ["bbc", "BBC (Big Beautiful Cow)", "#ffffff", {
      foreground: "#000000",
      background: "#000000",
    }],
    ["dragon-scale", "Dragon Scale", "#cd4500"],
    ["gabbys-grass", "Gabby's Grass", "#66a509"],
    ["san-diego-sunset", "San Diego Sunset", "#ef0200"],
    ["vampira", "Vampira", "#c73032"],
    ["winter-is-coming", "Winter Is Coming", "#80a6ff"]
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