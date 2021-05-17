const RACES = {
  // Dragonborn
  "Compendium.dnd5e.races.K4DNDcR6vngbp0pf": {
    subraces: {},
    data: {
      abilities: {
        str: 2,
        cha: 1,
      },
      languages: ["common", "draconic"],
      size: "med",
      speed: 30,
      name: "Dragonborn",
    },
  },

  // Dwarf
  "Compendium.dnd5e.races.6N31WSez2szqQcIQ": {
    subraces: {
      // Hill Dwarf
      "Compendium.dnd5e.races.UQiRQUTBcsz8gZU1": {
        data: {
          abilities: {
            wis: 1,
          },
          name: "Hill Dwarf",
        },
      },
    },
    data: {
      abilities: {
        con: 2,
      },
      name: "Dwarf",
      speed: 25,
      size: "med",
      languages: ["common", "dwarvish"],
      weapon_proficiences: ["battleaxe", "handaxe", "light hammer", "warhammer"],
    },
    choices: [
      {
        name: "Tool Proficiency",
        choose: 1,
        options: [
          {
            name: "Smith's Tools",
            data: { tool_proficiencies: ["smith"] },
          },
          {
            name: "Brewer's Supplies",
            data: { tool_proficiencies: ["brewer"] },
          },
          {
            name: "Mason's Tools",
            data: { tool_proficiencies: ["mason"] },
          },
        ],
      },
    ],
  },

  // Elf
  "Compendium.dnd5e.races.rAGnsfgw3ZqAme1v": {
    subraces: {
      "Compendium.dnd5e.races.A69KxdH1renVPrQV": {
        data: {
          abilities: {
            int: 1,
          },
          weapon_proficiences: ["longsword", "shortsword", "shortbow", "longbow"],
          name: "High Elf",
        },
        choices: [
          {
            name: "Extra Language Proficiency",
            choose: 1,
            options: [
              {
                name: "Abyssal",
                data: { languages: ["abyssal"] },
              },
              {
                name: "Celestial",
                data: { languages: ["celestial"] },
              },
              {
                name: "Deep Speech",
                data: { languages: ["deep"] },
              },
              {
                name: "Draconic",
                data: { languages: ["draconic"] },
              },
              {
                name: "Dwarvish",
                data: { languages: ["dwarvish"] },
              },
              {
                name: "Giant",
                data: { languages: ["giant"] },
              },
              {
                name: "Gnomish",
                data: { languages: ["gnomish"] },
              },
              {
                name: "Goblin",
                data: { languages: ["goblin"] },
              },
              {
                name: "Halfling",
                data: { languages: ["halfling"] },
              },
              {
                name: "Infernal",
                data: { languages: ["infernal"] },
              },
              {
                name: "Orc",
                data: { languages: ["orc"] },
              },
              {
                name: "Primordial",
                data: { languages: ["primordial"] },
              },
              {
                name: "Sylvan",
                data: { languages: ["sylvan"] },
              },
              {
                name: "Undercommon",
                data: { languages: ["undercommon"] },
              },
            ],
          },
          {
            name: "Cantrip",
            choose: 1,
            options: [
              {
                name: "Acid Splash",
                data: { items: ["Compendium.dnd5e.spells.JLTQyqXEaJDrTXyW"] },
              },
              {
                name: "Chill Touch",
                data: { items: ["Compendium.dnd5e.spells.vrN18tbTw7io5MWd"] },
              },
              {
                name: "Dancing Lights",
                data: { items: ["Compendium.dnd5e.spells.CAxSzHWizrafT033"] },
              },
              { name: "Fire Bolt", data: { items: ["Compendium.dnd5e.spells.EOmsUcFQJTfG2oio"] } },
              { name: "Light", data: { items: ["Compendium.dnd5e.spells.Bnn9Nzajixvow9xi"] } },
              { name: "Mage Hand", data: { items: ["Compendium.dnd5e.spells.Utk1OQRwYkMkFRD3"] } },
              { name: "Mending", data: { items: ["Compendium.dnd5e.spells.kjmjY0zlE6IEiQVL"] } },
              { name: "Message", data: { items: ["Compendium.dnd5e.spells.icZokbgV1jIMpNCv"] } },
              {
                name: "Minor Illusion",
                data: { items: ["Compendium.dnd5e.spells.oIzA2MEHwxhtQneU"] },
              },
              {
                name: "Poison Spray",
                data: { items: ["Compendium.dnd5e.spells.g2u9PYfqWQAyg9OI"] },
              },
              {
                name: "Prestidigitation",
                data: { items: ["Compendium.dnd5e.spells.udsLtG0BugXHR2JQ"] },
              },
              {
                name: "Ray of Frost",
                data: { items: ["Compendium.dnd5e.spells.ctW81uiX56xZR2c5"] },
              },
              {
                name: "Shocking Grasp",
                data: { items: ["Compendium.dnd5e.spells.XvbiNhNqXXIFisIy"] },
              },
              {
                name: "True Strike",
                data: { items: ["Compendium.dnd5e.spells.mGGlcLdggHwcL7MG"] },
              },
            ],
          },
        ],
      },
    },
    data: {
      abilities: {
        dex: 2,
      },
      name: "Elf",
      speed: 30,
      size: "med",
      languages: ["common", "elvish"],
    },
  },

  // Gnome
  "Compendium.dnd5e.races.kmRnMETG5hB9Bmwu": {
    subraces: {
      "Compendium.dnd5e.races.TZtarkKs6cgGD7z2": {
        data: {
          abilities: {
            con: 1,
          },
          tool_proficiencies: ["art"],
          name: "Rock Gnome",
        },
      },
    },
    data: {
      abilities: {
        int: 2,
      },
      languages: ["common", "gnomish"],
      size: "sm",
      speed: 25,
      name: "Gnome",
    },
  },

  // Half-Elf
  "Compendium.dnd5e.races.Hye5IZwPOSwV0qRR": {
    subraces: {},
    data: {
      abilities: {
        cha: 2,
      },
      languages: ["common", "elvish"],
      size: "med",
      speed: 30,
      name: "Half-Elf",
    },
    choices: [
      {
        name: "Ability Score Increase",
        choose: 2,
        options: [
          {
            name: "Strength",
            data: { abilities: { str: 1 } },
          },
          {
            name: "Dexterity",
            data: { abilities: { dex: 1 } },
          },
          {
            name: "Wisdom",
            data: { abilities: { wis: 1 } },
          },
          {
            name: "Constitution",
            data: { abilities: { con: 1 } },
          },
          {
            name: "Intelligence",
            data: { abilities: { int: 1 } },
          },
        ],
      },
    ],
  },

  // Half-Orc
  "Compendium.dnd5e.races.n5L000DkNBU6h2oJ": {
    subraces: {},
    data: {
      abilities: {
        str: 2,
        con: 1,
      },
      languages: ["common", "orc"],
      size: "med",
      speed: 30,
      name: "Half-Orc",
    },
  },

  // Halfling
  "Compendium.dnd5e.races.GH2dNne2bt1NjcJk": {
    subraces: {
      // Lightfoot Halfling
      "Compendium.dnd5e.races.ZgYBjYYfiUstQD6f": {
        data: {
          abilities: {
            cha: 1,
          },
          name: "Lightfoot Halfling",
        },
      },
    },
    data: {
      abilities: {
        dex: 2,
      },
      languages: ["common", "elvish"],
      size: "sm",
      speed: 25,
      name: "Halfling",
    },
  },

  // Human
  "Compendium.dnd5e.races.ydP3QzCmur55mtY2": {
    subraces: {},
    data: {
      abilities: {
        str: 1,
        con: 1,
        dex: 1,
        wis: 1,
        int: 1,
        cha: 1,
      },
      languages: ["common"],
      size: "med",
      speed: 30,
      name: "Human",
    },
  },

  // Tiefling
  "Compendium.dnd5e.races.aHTokZ151W0ASSmo": {
    subraces: {},
    data: {
      abilities: {
        cha: 2,
        int: 1,
      },
      languages: ["common", "Infernal"],
      size: "med",
      speed: 30,
      name: "Tiefling",
    },
  },
};

export default RACES;
