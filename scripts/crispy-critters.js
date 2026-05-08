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

const FONTS = {
  "Bangers": "bangers/bangers-v25-latin-regular.woff2",
  "Creepster": "creepster/creepster-v13-latin-regular.woff2",
  "Fredoka": "fredoka/fredoka-v17-latin-700.woff2",
  "New Rocker": "new-rocker/new-rocker-v17-latin-regular.woff2"
};

const THEMES = [
  {
    name: "astral-ember", // 5-8-26
    texture: "astral-ember",
    description: "Astral Ember",
    font: "Bangers",
    foreground: "#ffffff",
    background: "#6d186c",
    outline: "#6d186c",
    edge: "#6d186c"
  },
  {
    name: "astral-tide", // 5-8-26
    texture: "astral-tide",
    description: "Astral Tide",
    font: "Bangers",
    foreground: "#ffffff",
    background: "#358363",
    outline: "#358363",
    edge: "#358363"
  },
  {
    name: "bbc", // 5-7-26
    texture: "bbc",
    description: "BBC (Big Beautiful Cow)",
    font: "Fredoka",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "candy-hearts", // 5-7-26
    texture: "candy-hearts",
    description: "Candy Hearts",
    font: "Fredoka",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "cosmic-chaos", // 5-8-26
    texture: "cosmic-chaos",
    description: "Cosmic Chaos",
    font: "Bangers",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#fcae31"
  },
  {
    name: "cotton-candy", // 5-8-26
    texture: "cotton-candy",
    description: "Cotton Candy",
    font: "Fredoka",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  { 
    name: "eldritch-night", // 5-7-26
    texture: "eldritch-night",
    description: "Eldritch Night",
    font: "Creepster",
    foreground: "#000000", 
    background: "#000000",
    outline: "#ff4da6", 
    edge: "#ff4da6"
  },
  {
    name: "gabbys-grass", // 5-7-26
    texture: "gabbys-grass",
    description: "Gabby's Grass",
    font: "New Rocker",
    foreground: "#ffffff",
    background: "#000000",
    outline: "#66a509",
    edge: "#66a509"
  },  
  {
    name: "god-damaged", // 5-7-26
    texture: "god-damaged",
    description: "God Damaged",
    font: "New Rocker",
    foreground: "#ffffff",
    background: "#af03ef",
    outline: "#af03ef",
    edge: "#af03ef"
  },
  {
    name: "moon", // 5-7-26
    texture: "moon",
    description: "Moon",
    font: "New Rocker",
    foreground: "#32333e",
    background: "#000000",
    outline: "#ffffff",
    edge: "#32333e"
  },
  {
    name: "nebula", // 5-8-26
    texture: "nebula",
    description: "Nebula",
    font: "New Rocker",
    foreground: "#ffffff",
    background: "#003b99",
    outline: "#003b99",
    edge: "#003b99"
  },
  {
    name: "obsidian-ice", // 5-7-26
    texture: "obsidian-ice",
    description: "Obsidian Ice",
    font: "New Rocker",
    foreground: "#ffffff",
    background: "#80a6ff",
    outline: "#80a6ff",
    edge: "#80a6ff"
  },
  {
    name: "obsidian-magma", // 5-7-26
    texture: "obsidian-magma",
    description: "Obsidian Magma",
    font: "New Rocker",
    foreground: "#ffffff",
    background: "#c73032",
    outline: "#c73032",
    edge: "#c73032"
  },
  {
    name: "obsidian-ooze", // 5-7-26
    texture: "obsidian-ooze",
    description: "Obsidian Ooze",
    font: "New Rocker",
    foreground: "#ffffff",
    background: "#9cd604",
    outline: "#9cd604",
    edge: "#9cd604"
  },
  {
    name: "party-skulls", // 5-7-26
    texture: "party-skulls",
    description: "Party Skulls",
    font: "Bangers",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  { 
    name: "pixie-blue", // 5-7-26
    texture: "pixie-blue",
    description: "Pixie Blue",
    font: "Bangers",
    foreground: "#0007c7",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  { 
    name: "pixie-pink", // 5-7-26
    texture: "pixie-pink",
    description: "Pixie Pink",
    font: "Bangers",
    foreground: "#db008b",
    background: "#000000",
    outline: "#000000",
    edge: "#ffffff"
  },
  { 
    name: "san-diego-sunset", // 5-8-26
    texture: "san-diego-sunset",
    description: "San Diego Sunset",
    font: "Bangers",
    foreground: "#ffffff",
    background: "#ef0200",
    outline: "#ef0200",
    edge: "#ef0200"
  },
  {
    name: "space-oddity", // 5-7-26
    texture: "space-oddity",
    description: "Space Oddity",
    font: "New Rocker",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#1d4e6d"
  },
  {
    name: "spooky-ghosts", // 5-7-26
    texture: "spooky-ghosts",
    description: "Spooky Ghosts",
    font: "Creepster",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "sweets", // 5-7-26
    texture: "sweets",
    description: "Sweets",
    font: "Fredoka",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "vampira", // 5-7-26
    texture: "vampira",
    description: "Vampira",
    font: "New Rocker",
    foreground: "#ffffff", 
    background: "#c73032",
    outline: "#c73032", 
    edge: "#c73032"
  },
  {
    name: "winter-is-coming", // 5-7-26
    texture: "winter-is-coming",
    description: "Winter Is Coming",
    font: "New Rocker",
    foreground: "#ffffff", 
    background: "#80a6ff",
    outline: "#80a6ff", 
    edge: "#80a6ff"
  },
  {
    name: "zombies", // 5-7-26
    texture: "zombies",
    description: "Zombies",
    font: "Bangers",
    foreground: "#000000", 
    background: "#000000",
    outline: "#7cff6b", 
    edge: "#7cff6b"
  }
];

Hooks.on("init", () => {
  registerFonts();
});

Hooks.once("diceSoNiceReady", async (dice3d) => {
  await registerTextures(dice3d);
  registerThemes(dice3d);
});

function registerFonts() {
  for (const [name, file] of Object.entries(FONTS)) {
    CONFIG.fontDefinitions[`🦗 ${name}`] = {
      editor: true,
      fonts: [{ urls: [`modules/crispy-critters/fonts/${file}`] }]
    };
  }
}

async function registerTextures(dice3d) {
  for (const theme of THEMES) {
    await dice3d.addTexture(theme.name, {
      name: `🦗 ${theme.description}`,
      composite: "source-over",
      source: `modules/crispy-critters/textures/${theme.texture}.webp`
    });
  }
}

function registerThemes(dice3d) {
  for (const theme of THEMES) {
    dice3d.addColorset(
      {
        name: theme.name,
        texture: theme.texture,
        description: `🦗 ${theme.description}`,
        category: "🦗 Crispy Critters",
        material: "plastic",
        font: `🦗 ${theme.font}`,
        foreground: theme.foreground,
        background: theme.background,
        outline: theme.outline,
        edge: theme.edge,
        visibility: "visible"
      },
      "preferred"
    )
  }
}
