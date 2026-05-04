Hooks.on("init", () => {
  const fonts = {
    "New Rocker": "new-rocker/new-rocker-v17-latin-regular.woff2",
  };

  for (const [name, file] of Object.entries(fonts)) {
    CONFIG.fontDefinitions[`🦗 ${name}`] = {
      editor: true,
      fonts: [{ urls: [`modules/crispy-critters/fonts/${file}`] }]
    };
  }
});

Hooks.once("diceSoNiceReady", (dice3d) => {
  const themes = [
    {
      id: "bbc",
      name: "BBC (Big Beautiful Cow)",
      colors: {
        foreground: "#1c1c1c",
        background: "#1c1c1c",
        outline: "#ffffff",
        edge: "#ffffff",
      }
    },
    {
      id: "candy-hearts",
      name: "Candy Hearts",
      colors: {
        foreground: "#1c1c1c",
        background: "#cc2876",
        outline: "#ffffff",
        edge: "#ffffff"
      }
    },
    {
      id: "eldritch-horror",
      name: "Eldritch Horror",
      colors: {
        foreground: "#ffffff",
        background: "#643056",
        outline: "#643056",
        edge: "#643056"
      }
    },
    {
      id: "gabbys-grass",
      name: "Gabby's Grass",
      colors: {
        foreground: "#ffffff",
        background: "#74953e",
        outline: "#74953e",
        edge: "#74953e"
      }
    },
    {
      id: "god-damaged",
      name: "God Damaged",
      colors: {
        foreground: "#ffffff",
        background: "#af03ef",
        outline: "#af03ef",
        edge: "#af03ef"
      }
    },
    {
      id: "moon",
      name: "Moon",
      colors: {
        foreground: "#ffffff",
        background: "#57585a",
        outline: "#57585a",
        edge: "#57585a"
      }
    },
    {
      id: "obsidian-ice",
      name: "Obsidian Ice",
      colors: {
        foreground: "#ffffff",
        background: "#80a6ff",
        outline: "#80a6ff",
        edge: "#80a6ff"
      }
    },
    {
      id: "obsidian-magma",
      name: "Obsidian Magma",
      colors: {
        foreground: "#ffffff",
        background: "#c73032",
        outline: "#c73032",
        edge: "#c73032"
      }
    },
    {
      id: "obsidian-ooze",
      name: "Obsidian Ooze",
      colors: {
        foreground: "#ffffff",
        background: "#9cd604",
        outline: "#9cd604",
        edge: "#9cd604"
      }
    },
    {
      id: "party-skulls",
      name: "Party Skulls",
      colors: {
        foreground: "#1c1c1c",
        background: "#1c1c1c",
        outline: "#ffffff",
        edge: "#1c1c1c"
      }
    },
    {
      id: "pixie-blue",
      name: "Pixie Blue",
      colors: {
        foreground: "#188aff",
        background: "#188aff",
        outline: "#ffffff",
        edge: "#ffffff"
      }
    },
    {
      id: "pixie-pink",
      name: "Pixie Pink",
      colors: {
        foreground: "#ff7bff",
        background: "#ff7bff",
        outline: "#ffffff",
        edge: "#ffffff"
      }
    },
    {
      id: "space-oddity",
      name: "Space Oddity",
      colors: {
        foreground: "#ffffff",
        background: "#1c1c1c",
        outline: "#1c1c1c",
        edge: "#1c1c1c"
      }
    },
    {
      id: "spooky-ghosts",
      name: "Spooky Ghosts",
      colors: {
        foreground: "#1c1c1c",
        background: "#1c1c1c",
        outline: "#ffffff",
        edge: "#1c1c1c"
      }
    },
    {
      id: "sweets",
      name: "Sweets",
      colors: {
        foreground: "#1c1c1c",
        background: "#1c1c1c",
        outline: "#ffffff",
        edge: "#ffffff"
      }
    },
    {
      id: "vampira",
      name: "Vampira",
      colors: {
        foreground: "#ffffff",
        background: "#c73032",
        outline: "#c73032",
        edge: "#c73032"
      }
    },
    {
      id: "winter-is-coming",
      name: "Winter Is Coming",
      colors: {
        foreground: "#ffffff",
        background: "#80a6ff",
        outline: "#80a6ff",
        edge: "#80a6ff"
      }
    },
    {
      id: "zombies",
      name: "Zombies",
      colors: {
        foreground: "#1c1c1c",
        background: "#1c1c1c",
        outline: "#ffffff",
        edge: "#1c1c1c"
      }
    }
  ];

  themes.forEach(theme => {
    dice3d.addTexture(theme.id, {
      name: `🦗 ${theme.name}`,
      composite: "source-over",
      source: `modules/crispy-critters/textures/${theme.id}.webp`
    })
    .then(() => {
      dice3d.addColorset({
        name: `🦗 ${theme.name}`,
        description: `🦗 ${theme.name}`,
        category: "🦗 Crispy Critters",
        texture: theme.id,
        material: "plastic",
        font: "🦗 New Rocker",
        fontScale: {
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
        },
        ...theme.colors
      }, "preferred");
    });
  });
});
