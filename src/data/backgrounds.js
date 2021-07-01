import languageOptions from "data/languageOptions.js";

const BACKGROUNDS = {
  // Acolyte
  "Compendium.herosmith.backgrounds.Kd5m2GgxkvFozggc": {
    choices: {
      1: languageOptions(),
    },
    data: {
      1: {
        currency: { gp: 15 },
        items: [
          // 5 sticks of incense
          ...Array.from({ length: 2 }, () => "Compendium.dnd5e.items.3b0RvGi0TnTYpIxn"),

          // Vestments
          "Compendium.dnd5e.items.irtqrzaUCeshmTZp",

          // Set of Common Clothes
          "Compendium.dnd5e.items.8RXjiddJ6VGyE7vB",
        ],
        skill_proficiencies: ["ins", "rel"],
      },
    },
    personality: "Compendium.herosmith.background_characteristics.ZowmTS1xYNcd80lM",
    ideal: "Compendium.herosmith.background_characteristics.AazWPNXF6fErex2i",
    bond: "Compendium.herosmith.background_characteristics.YwKOMNt2IU6jxTys",
    flaw: "Compendium.herosmith.background_characteristics.AA23CHQZ8FejV1Io",
    equipment: {
      1: {
        choices: [
          {
            name: "Holy Symbol",
            choose: 1,
            options: [
              {
                name: "Amulet",
                data: {
                  items: ["Compendium.dnd5e.items.paqlMjggWkBIAeCe"],
                },
              },
              {
                name: "Emblem",
                data: {
                  items: ["Compendium.dnd5e.items.laVqttkGMW4B9654"],
                },
              },
              {
                name: "Reliquary",
                data: {
                  items: ["Compendium.dnd5e.items.gP1URGq3kVIIFHJ7"],
                },
              },
            ],
          },
          {
            name: "Prayer Book or Prayer Wheel",
            choose: 1,
            options: [
              {
                name: "Prayer Book",
                data: {
                  items: ["Compendium.dnd5e.items.odV5cq2HSLSCH69k"],
                },
              },
              {
                name: "Prayer Wheel",
                data: {
                  items: ["Compendium.dnd5e.items.Nd4r4hocpfu6fYDP"],
                },
              },
            ],
          },
        ],
      },
    },
  },
};

export default BACKGROUNDS;
