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
  "🦗 Bangers": "bangers/bangers-v25-latin-regular.woff2",
  "🦗 Creepster": "creepster/creepster-v13-latin-regular.woff2",
  "🦗 Fredoka Bold": "fredoka/fredoka-v17-latin-700.woff2",
  "🦗 New Rocker": "new-rocker/new-rocker-v17-latin-regular.woff2"
};

const THEMES = [
  {
    name: "bbc", // FINAL
    texture: "bbc",
    description: "🦗 BBC (Big Beautiful Cow)",
    font: "🦗 Fredoka Bold",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "candy-hearts", // FINAL
    texture: "candy-hearts",
    description: "🦗 Candy Hearts",
    font: "🦗 Fredoka Bold",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  { 
    name: "eldritch-night", // FINAL
    texture: "eldritch-night",
    description: "🦗 Eldritch Night",
    font: "🦗 Creepster",
    foreground: "#000000", 
    background: "#000000",
    outline: "#ff4da6", 
    edge: "#ff4da6"
  },
  {
    name: "gabbys-grass", // FINAL
    texture: "gabbys-grass",
    description: "🦗 Gabby's Grass",
    font: "🦗 New Rocker",
    foreground: "#ffffff",
    background: "#000000",
    outline: "#66a509",
    edge: "#66a509"
  },  
  {
    name: "god-damaged", // FINAL
    texture: "god-damaged",
    description: "🦗 God Damaged",
    font: "🦗 New Rocker",
    foreground: "#ffffff",
    background: "#af03ef",
    outline: "#af03ef",
    edge: "#af03ef"
  },
  {
    name: "moon", // FINAL
    texture: "moon",
    description: "🦗 Moon",
    font: "🦗 New Rocker",
    foreground: "#32333e",
    background: "#000000",
    outline: "#ffffff",
    edge: "#32333e"
  },
  {
    name: "obsidian-ice", // FINAL
    texture: "obsidian-ice",
    description: "🦗 Obsidian Ice",
    font: "🦗 New Rocker",
    foreground: "#ffffff",
    background: "#80a6ff",
    outline: "#80a6ff",
    edge: "#80a6ff"
  },
  {
    name: "obsidian-magma", // FINAL
    texture: "obsidian-magma",
    description: "🦗 Obsidian Magma",
    font: "🦗 New Rocker",
    foreground: "#ffffff",
    background: "#c73032",
    outline: "#c73032",
    edge: "#c73032"
  },
  {
    name: "obsidian-ooze", // FINAL
    texture: "obsidian-ooze",
    description: "🦗 Obsidian Ooze",
    font: "🦗 New Rocker",
    foreground: "#ffffff",
    background: "#9cd604",
    outline: "#9cd604",
    edge: "#9cd604"
  },
  {
    name: "party-skulls", // FINAL
    texture: "party-skulls",
    description: "🦗 Party Skulls",
    font: "🦗 Bangers",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  { 
    name: "pixie-blue", // FINAL
    texture: "pixie-blue",
    description: "🦗 Pixie Blue",
    font: "🦗 Bangers",
    foreground: "#0007c7",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  { 
    name: "pixie-pink", // FINAL
    texture: "pixie-pink",
    description: "🦗 Pixie Pink",
    font: "🦗 Bangers",
    foreground: "#db008b",
    background: "#000000",
    outline: "#000000",
    edge: "#ffffff"
  },
  {
    name: "space-oddity", // FINAL
    texture: "space-oddity",
    description: "🦗 Space Oddity",
    font: "🦗 New Rocker",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#1d4e6d"
  },
  {
    name: "spooky-ghosts", // FINAL
    texture: "spooky-ghosts",
    description: "🦗 Spooky Ghosts",
    font: "🦗 Creepster",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "sweets", // FINAL
    texture: "sweets",
    description: "🦗 Sweets",
    font: "🦗 Fredoka Bold",
    foreground: "#000000",
    background: "#000000",
    outline: "#ffffff",
    edge: "#ffffff"
  },
  {
    name: "vampira", // FINAL
    texture: "vampira",
    description: "🦗 Vampira",
    font: "🦗 New Rocker",
    foreground: "#ffffff", 
    background: "#c73032",
    outline: "#c73032", 
    edge: "#c73032"
  },
  {
    name: "winter-is-coming", // FINAL
    texture: "winter-is-coming",
    description: "🦗 Winter Is Coming",
    font: "🦗 New Rocker",
    foreground: "#ffffff", 
    background: "#80a6ff",
    outline: "#80a6ff", 
    edge: "#80a6ff"
  },
  {
    name: "zombies", // FINAL
    texture: "zombies",
    description: "🦗 Zombies",
    font: "🦗 Bangers",
    foreground: "#000000", 
    background: "#000000",
    outline: "#7cff6b", 
    edge: "#7cff6b"
  }
];

Hooks.on("init", async () => {
  await registerFonts();
});

Hooks.once("diceSoNiceReady", async (dice3d) => {
  await registerTextures(dice3d);
  await registerThemes(dice3d);
});

async function registerFonts() {
  for (const [name, file] of Object.entries(FONTS)) {
    CONFIG.fontDefinitions[`${name}`] = {
      editor: true,
      fonts: [{ urls: [`modules/crispy-critters/fonts/${file}`] }]
    };
  }
}

async function registerTextures(dice3d) {
  for (const theme of THEMES) {
    await dice3d.addTexture(theme.name, {
      name: theme.description,
      composite: "source-over",
      source: `modules/crispy-critters/textures/${theme.texture}.webp`
    });
  }
}

async function registerThemes(dice3d) {
  for (const theme of THEMES) {
    await dice3d.addColorset(
      {
        name: theme.name,
        texture: theme.texture,
        description: theme.description,
        category: "🦗 Crispy Critters",
        material: "plastic",
        font: theme.font,
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
