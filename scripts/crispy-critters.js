const MODULE_ID = "crispy-critters";
const PREFIX = "🦗";
const CATEGORY = `${PREFIX} Crispy Critters`;

const FONT_SCALE = {
  d2: 1,
  d4: 1,
  d6: 1.3,
  d8: 1.1,
  d10: 1,
  d12: 1.1,
  d20: 1,
  d3: 1.3,
  d5: 1,
  df: 2,
  d100: 0.75
};

const FONTS = {
  "New Rocker": "new-rocker/new-rocker-v17-latin-regular.woff2"
};

const D20_LABELS = Array.from({ length: 20 }, (_, i) => String(i + 1));

const SPECIAL_D20_PRESETS = [
  {
    systemId: "dr-cricket-d20-crit",
    name: "Dr. Cricket (oversized d20)",
    labels: [
      ...D20_LABELS.slice(0, 19),
      `modules/${MODULE_ID}/faces/dr-cricket-d20-crit.webp`
    ],
    scaleModifier: 1.25
  },
  {
    systemId: "standard-oversized",
    name: "Standard (oversized d20)",
    labels: D20_LABELS,
    scaleModifier: 1.25
  }
];

const BASE_THEMES = [
  { id: "bbc", name: "BBC (Big Beautiful Cow)", background: "#262221" },
  { id: "candy-hearts", name: "Candy Hearts", background: "#ef283c" },
  { id: "eldritch-horror", name: "Eldritch Horror", background: "#643056" },
  { id: "gabbys-grass", name: "Gabby's Grass", background: "#74953e" },
  { id: "god-damaged", name: "God Damaged", background: "#af03ef" },
  { id: "moon", name: "Moon", background: "#57585a" },
  { id: "obsidian-ice", name: "Obsidian Ice", background: "#80a6ff" },
  { id: "obsidian-magma", name: "Obsidian Magma", background: "#c73032" },
  { id: "obsidian-ooze", name: "Obsidian Ooze", background: "#9cd604" },
  { id: "party-skulls", name: "Party Skulls", background: "#10bcad" },
  { id: "pixie-blue", name: "Pixie Blue", background: "#188aff" },
  { id: "pixie-pink", name: "Pixie Pink", background: "#ff7bff" },
  { id: "space-oddity", name: "Space Oddity", background: "#3b4165" },
  { id: "spooky-ghosts", name: "Spooky Ghosts", background: "#11131f" },
  { id: "sweets", name: "Sweets", background: "#f5702d" },
  { id: "vampira", name: "Vampira", background: "#c73032" },
  { id: "winter-is-coming", name: "Winter Is Coming", background: "#80a6ff" },
  { id: "zombies", name: "Zombies", background: "#869e75" }
];

Hooks.on("init", () => {
  for (const [name, file] of Object.entries(FONTS)) {
    CONFIG.fontDefinitions[`${PREFIX} ${name}`] = {
      editor: true,
      fonts: [{ urls: [`modules/${MODULE_ID}/fonts/${file}`] }]
    };
  }
});

Hooks.once("diceSoNiceReady", async (dice3d) => {
  registerSpecialD20Presets(dice3d);
  await registerThemes(dice3d);
});

function registerSpecialD20Presets(dice3d) {
  for (const preset of SPECIAL_D20_PRESETS) {
    dice3d.addSystem(
      {
        id: preset.systemId,
        name: `${PREFIX} ${preset.name}`
      },
      "preferred"
    );

    dice3d.addDicePreset({
      type: "d20",
      labels: preset.labels,
      scaleModifier: preset.scaleModifier,
      system: preset.systemId
    });
  }
}

async function registerThemes(dice3d) {
  for (const theme of BASE_THEMES) {
    await dice3d.addTexture(theme.id, {
      name: `${PREFIX} ${theme.name}`,
      composite: "source-over",
      source: `modules/${MODULE_ID}/textures/${theme.id}.webp`
    });

    addThemeVariant(dice3d, theme, {
      suffix: "black",
      foreground: "#000000",
      outline: "#ffffff"
    });

    addThemeVariant(dice3d, theme, {
      suffix: "white",
      foreground: "#ffffff",
      outline: "#000000"
    });
  }
}

function addThemeVariant(dice3d, theme, variant) {
  dice3d.addColorset(
    {
      name: `${PREFIX} ${theme.name} (${variant.suffix})`,
      description: `${PREFIX} ${theme.name} (${variant.suffix})`,
      category: CATEGORY,
      texture: theme.id,
      material: "plastic",
      font: `${PREFIX} New Rocker`,
      fontScale: FONT_SCALE,
      foreground: variant.foreground,
      background: theme.background,
      outline: variant.outline,
      edge: theme.background
    },
    "preferred"
  );
}