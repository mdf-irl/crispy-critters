Hooks.on("init", () => {   
  CONFIG.fontDefinitions["Jersey25"] = {
    editor: true,
    fonts: [
      {urls: ["modules/crispy-critters/fonts/Jersey25-Regular.ttf"]}
    ]
  };
});

Hooks.once("diceSoNiceReady", (dice3d) => { 
  dice3d.addTexture("pixie-pink", {
    name: "🦗 Pixie Pink",
    composite: "source-over",
    source: "modules/crispy-critters/images/pixie-pink.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Pixie Pink",
        description: "🦗 Pixie Pink",
        category: "🦗 Crispy Critters",
        background: "#cc2876",
        foreground: "#000000",
        outline: "#ffffff",
        edge: "#cc2876",
        texture: "pixie-pink",
        material: "plastic",
        font: "Jersey25"
      }, "preferred");
    });

  dice3d.addTexture("pixie-blue", {
    name: "🦗 Pixie Blue",
    composite: "source-over",
    source: "modules/crispy-critters/images/pixie-blue.webp",
  })
    .then(() => {
      dice3d.addColorset({
        name: "🦗 Pixie Blue",
        description: "🦗 Pixie Blue",
        category: "🦗 Crispy Critters",
        background: "#3e6c92",
        foreground: "#000000",
        outline: "#ffffff",
        edge: "#3e6c92",
        texture: "pixie-blue",
        material: "plastic",
        font: "Jersey25"
      }, "preferred");
    });
});
