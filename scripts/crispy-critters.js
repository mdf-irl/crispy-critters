Hooks.on("init", () => {   
  CONFIG.fontDefinitions["Jersey25"] = {
    editor: true,
    fonts: [
      {urls: ["modules/crispy-critters/fonts/Jersey25-Regular.ttf"]}
    ]
  };

  CONFIG.fontDefinitions["NewRocker"] = {
    editor: true,
    fonts: [
      {urls: ["modules/crispy-critters/fonts/NewRocker-Regular.ttf"]}
    ]
  };
});

Hooks.once("diceSoNiceReady", (dice3d) => { 
  dice3d.addTexture("pixie-pink", {
    name: "🦗 Pixie Pink",
    composite: "source-over",
    source: "modules/crispy-critters/textures/pixie-pink.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Pixie Pink",
        description: "🦗 Pixie Pink",
        category: "🦗 Crispy Critters",
        background: "#000000",
        foreground: "#000000",
        outline: "#ffffff",
        edge: "#ffffff",
        texture: "pixie-pink",
        material: "plastic",
        font: "Jersey25"
      }, "preferred");
    });

  dice3d.addTexture("pixie-blue", {
    name: "🦗 Pixie Blue",
    composite: "source-over",
    source: "modules/crispy-critters/textures/pixie-blue.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Pixie Blue",
        description: "🦗 Pixie Blue",
        category: "🦗 Crispy Critters",
        background: "#000000",
        foreground: "#000000",
        outline: "#ffffff",
        edge: "#ffffff",
        texture: "pixie-blue",
        material: "plastic",
        font: "Jersey25"
      }, "preferred");
    });

  dice3d.addTexture("winter-is-coming", {
    name: "🦗 Winter Is Coming",
    composite: "source-over",
    source: "modules/crispy-critters/textures/winter-is-coming.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Winter Is Coming",
        description: "🦗 Winter Is Coming",
        category: "🦗 Crispy Critters",
        background: "#80a6ff",
        foreground: "#ffffff",
        outline: "#000000",
        edge: "#80a6ff",
        texture: "winter-is-coming",
        material: "plastic",
        font: "NewRocker"
      }, "preferred");
    });

  dice3d.addTexture("vampira", {
    name: "🦗 Vampira",
    composite: "source-over",
    source: "modules/crispy-critters/textures/vampira.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Vampira",
        description: "🦗 Vampira",
        category: "🦗 Crispy Critters",
        texture: "vampira",
        material: "plastic",
        font: "NewRocker",
        foreground: "#ffffff",
        background: "#c73032",
        outline: "#c73032",
        edge: "#c73032"
      }, "preferred");
    });

  dice3d.addTexture("bbc", {
    name: "🦗 BBC (Big Beautiful Cow)",
    composite: "source-over",
    source: "modules/crispy-critters/textures/bbc.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 BBC (Big Beautiful Cow)",
        description: "🦗 BBC (Big Beautiful Cow)",
        category: "🦗 Crispy Critters",
        texture: "bbc",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("space-oddity", {
    name: "🦗 Space Oddity",
    composite: "source-over",
    source: "modules/crispy-critters/textures/space-oddity.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Space Oddity",
        description: "🦗 Space Oddity",
        category: "🦗 Crispy Critters",
        texture: "space-oddity",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("magma", {
    name: "🦗 Magma",
    composite: "source-over",
    source: "modules/crispy-critters/textures/magma.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Magma",
        description: "🦗 Magma",
        category: "🦗 Crispy Critters",
        texture: "magma",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("ooze", {
    name: "🦗 Ooze",
    composite: "source-over",
    source: "modules/crispy-critters/textures/ooze.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Ooze",
        description: "🦗 Ooze",
        category: "🦗 Crispy Critters",
        texture: "ooze",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("ice", {
    name: "🦗 Ice",
    composite: "source-over",
    source: "modules/crispy-critters/textures/ice.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Ice",
        description: "🦗 Ice",
        category: "🦗 Crispy Critters",
        texture: "ice",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("sweets", {
    name: "🦗 Sweets",
    composite: "source-over",
    source: "modules/crispy-critters/textures/sweets.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Sweets",
        description: "🦗 Sweets",
        category: "🦗 Crispy Critters",
        texture: "sweets",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("candy-hearts", {
    name: "🦗 Candy Hearts",
    composite: "source-over",
    source: "modules/crispy-critters/textures/candy-hearts.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Candy Hearts",
        description: "🦗 Candy Hearts",
        category: "🦗 Crispy Critters",
        texture: "candy-hearts",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("spooky-ghosts", {
    name: "🦗 Spooky Ghosts",
    composite: "source-over",
    source: "modules/crispy-critters/textures/spooky-ghosts.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Spooky Ghosts",
        description: "🦗 Spooky Ghosts",
        category: "🦗 Crispy Critters",
        texture: "spooky-ghosts",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("god-damaged", {
    name: "🦗 God Damaged",
    composite: "source-over",
    source: "modules/crispy-critters/textures/god-damaged.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 God Damaged",
        description: "🦗 God Damaged",
        category: "🦗 Crispy Critters",
        texture: "god-damaged",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("gabbys-grass", {
    name: "🦗 Gabby's Grass",
    composite: "source-over",
    source: "modules/crispy-critters/textures/gabbys-grass.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Gabby's Grass",
        description: "🦗 Gabby's Grass",
        category: "🦗 Crispy Critters",
        texture: "gabbys-grass",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("zombies", {
    name: "🦗 Zombies",
    composite: "source-over",
    source: "modules/crispy-critters/textures/zombies.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Zombies",
        description: "🦗 Zombies",
        category: "🦗 Crispy Critters",
        texture: "zombies",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("party-skulls", {
    name: "🦗 Party Skulls",
    composite: "source-over",
    source: "modules/crispy-critters/textures/party-skulls.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Party Skulls",
        description: "🦗 Party Skulls",
        category: "🦗 Crispy Critters",
        texture: "party-skulls",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("kitties", {
    name: "🦗 Kitties",
    composite: "source-over",
    source: "modules/crispy-critters/textures/kitties.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Kitties",
        description: "🦗 Kitties",
        category: "🦗 Crispy Critters",
        texture: "kitties",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("helly", {
    name: "🦗 HeLLy",
    composite: "source-over",
    source: "modules/crispy-critters/textures/helly.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 HeLLy",
        description: "🦗 HeLLy",
        category: "🦗 Crispy Critters",
        texture: "helly",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("moon", {
    name: "🦗 Moon",
    composite: "source-over",
    source: "modules/crispy-critters/textures/moon.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Moon",
        description: "🦗 Moon",
        category: "🦗 Crispy Critters",
        texture: "moon",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("cola", {
    name: "🦗 Cola",
    composite: "source-over",
    source: "modules/crispy-critters/textures/cola.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Cola",
        description: "🦗 Cola",
        category: "🦗 Crispy Critters",
        texture: "cola",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  dice3d.addTexture("eldritch-horror", {
    name: "🦗 Eldritch Horror",
    composite: "source-over",
    source: "modules/crispy-critters/textures/eldritch-horror.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Eldritch Horror",
        description: "🦗 Eldritch Horror",
        category: "🦗 Crispy Critters",
        texture: "eldritch-horror",
        material: "plastic",
        font: "NewRocker",
        foreground: "#000000",
        background: "#000000",
        outline: "#ffffff",
        edge: "#000000"
      }, "preferred");
    });

  });