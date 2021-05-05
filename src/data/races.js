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
        abilities: {
          cha: 1,
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
