const RACES = {
  // Dragonborn
  "Compendium.dnd5e.races.K4DNDcR6vngbp0pf": {
    subraces: {},
    data: {
      abilities: {
        str: 2,
        cha: 1,
      },
      items: [
        "Compendium.dnd5e.races.K4DNDcR6vngbp0pf",
        "Compendium.dnd5e.races.XxCuhIk6hAu6rNB0",
        "Compendium.dnd5e.races.KL7wx9Q8XNJQir0k",
      ],
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
          items: ["Compendium.dnd5e.races.UQiRQUTBcsz8gZU1"],
          name: "Hill Dwarf",
        },
      },
    },
    data: {
      abilities: {
        con: 2,
      },
      items: [
        "Compendium.dnd5e.races.6N31WSez2szqQcIQ",
        "Compendium.dnd5e.races.ufysTkqet2Ctmtyi",
        "Compendium.dnd5e.races.mQPZDRbUhgYTbXKa",
      ],
      name: "Dwarf",
      speed: 25,
      size: "med",
      languages: ["common", "dwarvish"],
      weapon_proficiences: ["battleaxe", "handaxe", "light hammer", "warhammer"],
      token: {
        dimSight: 60,
      },
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
          items: ["Compendium.dnd5e.races.A69KxdH1renVPrQV"],
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
      items: ["Compendium.dnd5e.races.rAGnsfgw3ZqAme1v", "Compendium.dnd5e.races.cnTbpPPeGW7vGjOV"],
      name: "Elf",
      speed: 30,
      size: "med",
      languages: ["common", "elvish"],
      skill_proficiencies: ["per"],
    },
    token: {
      dimSight: 60,
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
          items: [
            "Compendium.dnd5e.races.TZtarkKs6cgGD7z2",
            "Compendium.dnd5e.races.OQA1sHxKnSJq01dL",
            "Compendium.dnd5e.races.koRPOLtj8XAFMwnW",
          ],
          tool_proficiencies: ["art"],
          name: "Rock Gnome",
        },
      },
    },
    data: {
      abilities: {
        int: 2,
      },
      items: ["Compendium.dnd5e.races.kmRnMETG5hB9Bmwu", "Compendium.dnd5e.races.EHhr9umJ5kxJFCQH"],
      languages: ["common", "gnomish"],
      size: "sm",
      speed: 25,
      name: "Gnome",
      token: {
        dimSight: 60,
      },
    },
  },

  // Half-Elf
  "Compendium.dnd5e.races.Hye5IZwPOSwV0qRR": {
    subraces: {},
    data: {
      abilities: {
        cha: 2,
      },
      items: ["Compendium.dnd5e.races.Hye5IZwPOSwV0qRR", "Compendium.dnd5e.races.cnTbpPPeGW7vGjOV"],
      languages: ["common", "elvish"],
      size: "med",
      speed: 30,
      name: "Half-Elf",
      token: {
        dimSight: 60,
      },
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
      {
        name: "Skill Proficiencies",
        choose: 2,
        options: [
          {
            name: "Acrobatics",
            data: {
              skill_proficiencies: ["acr"],
            },
          },
          {
            name: "Animal Handling",
            data: {
              skill_proficiencies: ["ani"],
            },
          },
          {
            name: "Arcana",
            data: {
              skill_proficiencies: ["arc"],
            },
          },
          {
            name: "Athletics",
            data: {
              skill_proficiencies: ["ath"],
            },
          },
          {
            name: "Deception",
            data: {
              skill_proficiencies: ["dec"],
            },
          },
          {
            name: "History",
            data: {
              skill_proficiencies: ["his"],
            },
          },
          {
            name: "Insight",
            data: {
              skill_proficiencies: ["ins"],
            },
          },
          {
            name: "Intimidation",
            data: {
              skill_proficiencies: ["itm"],
            },
          },
          {
            name: "Investigation",
            data: {
              skill_proficiencies: ["inv"],
            },
          },
          {
            name: "Medicine",
            data: {
              skill_proficiencies: ["med"],
            },
          },
          {
            name: "Nature",
            data: {
              skill_proficiencies: ["nat"],
            },
          },
          {
            name: "Perception",
            data: {
              skill_proficiencies: ["prc"],
            },
          },
          {
            name: "Performance",
            data: {
              skill_proficiencies: ["prf"],
            },
          },
          {
            name: "Persuasion",
            data: {
              skill_proficiencies: ["per"],
            },
          },
          {
            name: "Religion",
            data: {
              skill_proficiencies: ["rel"],
            },
          },
          {
            name: "Sleight of Hand",
            data: {
              skill_proficiencies: ["slt"],
            },
          },
          {
            name: "Stealth",
            data: {
              skill_proficiencies: ["ste"],
            },
          },
          {
            name: "Survival",
            data: {
              skill_proficiencies: ["sur"],
            },
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
      items: [
        "Compendium.dnd5e.races.n5L000DkNBU6h2oJ",
        "Compendium.dnd5e.races.97c8i9Z28thvZuA8",
        "Compendium.dnd5e.races.0kUsT4sMUOr5FcoX",
      ],
      languages: ["common", "orc"],
      size: "med",
      speed: 30,
      name: "Half-Orc",
      skill_proficiencies: ["itm"],
      token: {
        dimSight: 60,
      },
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
          items: [
            "Compendium.dnd5e.races.ZgYBjYYfiUstQD6f",
            "Compendium.dnd5e.races.GWPjKFeIthBBeCFJ",
          ],
          name: "Lightfoot Halfling",
        },
      },
    },
    data: {
      abilities: {
        dex: 2,
      },
      items: [
        "Compendium.dnd5e.races.GH2dNne2bt1NjcJk",
        "Compendium.dnd5e.races.LOMdcNAGWh5xpfm4",
        "Compendium.dnd5e.races.7Yoo9hG0hfPSmBoC",
        "Compendium.dnd5e.races.PqxZgcJzp1VVgP8t",
      ],
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
      items: ["Compendium.dnd5e.races.ydP3QzCmur55mtY2"],
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
      items: [
        "Compendium.dnd5e.races.aHTokZ151W0ASSmo",
        "Compendium.dnd5e.races.q71Pe1F8RRtEJt8Q",
        "Compendium.dnd5e.spells.MUO1uYN7JR1hm4dR",
      ],
      languages: ["common", "infernal"],
      size: "med",
      speed: 30,
      name: "Tiefling",
      token: {
        dimSight: 60,
      },
    },
  },
};

export default RACES;
