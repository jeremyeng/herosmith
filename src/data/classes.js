import skillOptions from "data/skillOptions.js";
import toolOptions from "data/toolOptions.js";
import itemOptions from "data/itemOptions.js";
import itemPackOptions from "data/itemPackOptions.js";

const CLASSES = {
  // Barbarian
  "Compendium.dnd5e.classes.pvEzGSv71zBhaolc": {
    subclasses: {
      "path-of-the-berserker": {
        name: "Path of the Berserker",
        data: {
          3: { features: ["Compendium.dnd5e.classfeatures.CkbbAckeCtyHXEnL"] },
          6: { features: ["Compendium.dnd5e.classfeatures.0Jgf8fYY2ExwgQpN"] },
          10: { features: ["Compendium.dnd5e.classfeatures.M6VSMzVtKPhh8B0i"] },
          14: { features: ["Compendium.dnd5e.classfeatures.xzD9zlRP6dUxCtCl"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "animal handling",
            "athletics",
            "intimidation",
            "nature",
            "perception",
            "survival",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt", "med", "shl"],
        weapon_proficiencies: ["mar", "sim"],
        save_proficiencies: ["str", "con"],
        features: [
          "Compendium.dnd5e.classes.pvEzGSv71zBhaolc",
          "Compendium.dnd5e.classfeatures.VoR0SUrNX5EJVPIO",
          "Compendium.dnd5e.classfeatures.SZbsNbaxFFGwBpNK",
        ],
      },
      2: {
        features: [
          "Compendium.dnd5e.classfeatures.SCVjqRdlZ9cvHVSR",
          "Compendium.dnd5e.classfeatures.vt31lWAULygEl7yk",
        ],
      },
      3: { features: ["Compendium.dnd5e.classfeatures.TH1QAf6YNGSeBVjT"] },
      5: {
        features: [
          "Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo",
          "Compendium.dnd5e.classfeatures.Kl6zifJ5OmdHlOi2",
        ],
      },
      7: { features: ["Compendium.dnd5e.classfeatures.NlXslw4yAqmKZWtN"] },
      9: { features: ["Compendium.dnd5e.classfeatures.L94gyvNpUhUe0rwh"] },
      11: { features: ["Compendium.dnd5e.classfeatures.FqfmbPgxiyrWzhYk"] },
      15: { features: ["Compendium.dnd5e.classfeatures.l8tUhZ5Pecm9wz7I"] },
      18: { features: ["Compendium.dnd5e.classfeatures.Q1exex5ALteprrPo"] },
      20: { features: ["Compendium.dnd5e.classfeatures.jVU4AgqfrFaqgXns"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Melee Martial Weapon",
            choose: 1,
            options: Object.values(itemOptions("weapons.melee.martial")),
          },
          {
            name: "Simple Weapon",
            choose: 1,
            options: [
              {
                name: "Two Handaxes",
                data: {
                  items: [
                    "Compendium.dnd5e.items.eO7Fbv5WBk5zvGOc",
                    "Compendium.dnd5e.items.eO7Fbv5WBk5zvGOc",
                  ],
                },
              },
              ...Object.values(itemOptions("weapons.melee.simple")),
            ],
          },
        ],
      },
    },
  },

  // Bard
  "Compendium.dnd5e.classes.ILvRZGEx3aXqSVUt": {
    subclasses: {
      "college-of-lore": {
        label: "College of Lore",
        source: "PHB pg. 54",
        data: {
          3: { features: ["Compendium.dnd5e.classfeatures.5zPmHPQUne7RDfaU"] },
          6: { features: ["Compendium.dnd5e.classfeatures.myBu3zi5eYvQIcuy"] },
          14: { features: ["Compendium.dnd5e.classfeatures.pquwueEMweRhiWaq"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 3,
          options: skillOptions(),
        },
        {
          name: "Musical Instrument Proficiency",
          choose: 3,
          options: toolOptions([
            "bagpipes",
            "drum",
            "dulcimer",
            "flute",
            "lute",
            "lyre",
            "horn",
            "panflute",
            "shawm",
            "viol",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt"],
        weapon_proficiencies: ["sim", "handcrossbow", "longsword", "shortsword", "rapier"],
        save_proficiencies: ["dex", "cha"],
        features: [
          "Compendium.dnd5e.classes.ILvRZGEx3aXqSVUt",
          "Compendium.dnd5e.classfeatures.hpLNiGq7y67d2EHA",
          "Compendium.dnd5e.classfeatures.u4NLajXETJhJU31v",
        ],
      },
      2: {
        features: [
          "Compendium.dnd5e.classfeatures.ezWijmCnlnQ9ZRX2",
          "Compendium.dnd5e.classfeatures.he8RpPXwSl2lVSIk",
        ],
      },
      3: {
        features: [
          "Compendium.dnd5e.classfeatures.ILhzFHiRrqgQ9dFJ",
          "Compendium.dnd5e.classfeatures.aQLg7BWdRnm4Hr9S",
        ],
      },
      5: { features: ["Compendium.dnd5e.classfeatures.3VDZGs5Ug3hIE322"] },
      6: { features: ["Compendium.dnd5e.classfeatures.SEJmsjkEhdAZ90ki"] },
      10: { features: ["Compendium.dnd5e.classfeatures.aonJ2YjkqkYB9WYB"] },
      20: { features: ["Compendium.dnd5e.classfeatures.GBYN5rH4nh1ocRlY"] },
    },

    equipment: {
      1: {
        choices: [
          {
            name: "Rapier, Longsword, Or Any Simple Weapon",
            choose: 1,
            options: [
              itemOptions("weapons.melee.martial.rapier"),
              itemOptions("weapons.melee.martial.longsword"),
              ...Object.values(itemOptions("weapons.melee.simple")),
              ...Object.values(itemOptions("weapons.ranged.simple")),
            ],
          },
          {
            name: "Diplomat's Pack or Entertainer's Pack",
            choose: 1,
            options: itemPackOptions(["diplomat", "entertainer"]),
          },
          {
            name: "Musical Instrument",
            choose: 1,
            options: Object.values(itemOptions("tools.instruments")),
          },
        ],
      },
    },
  },

  // Cleric
  "Compendium.dnd5e.classes.tlwBnN8GmqJcTgub": {
    subclasses: {
      "life-domain": {
        label: "Life Domain",
        source: "PHB pg. 60",
        data: {
          1: {
            features: [
              "Compendium.dnd5e.classfeatures.68bYIOvx6rIqnlOW",
              "Compendium.dnd5e.classfeatures.jF8AFfEMICIJnAkR",
              "Compendium.dnd5e.spells.8dzaICjGy6mTUaUr",
              "Compendium.dnd5e.spells.uUWb1wZgtMou0TVP",
            ],
          },
          2: { features: ["Compendium.dnd5e.classfeatures.hEymt45rICi4f9eL"] },
          3: {
            features: [
              "Compendium.dnd5e.spells.F0GsG0SJzsIOacwV",
              "Compendium.dnd5e.spells.JbxsYXxSOTZbf9I0",
            ],
          },
          5: {
            features: [
              "Compendium.dnd5e.spells.ZU9d6woBdUP8pIPt",
              "Compendium.dnd5e.spells.LmRHHMtplpxr9fX6",
            ],
          },
          6: { features: ["Compendium.dnd5e.classfeatures.yv49QN6Bzqs0ecCs"] },
          7: {
            features: [
              "Compendium.dnd5e.spells.VtCXMdyM6mAdIJZb",
              "Compendium.dnd5e.spells.TgHsuhNasPbhu8MO",
            ],
          },
          8: { features: ["Compendium.dnd5e.classfeatures.T6u5z8ZTX6UftXqE"] },
          9: {
            features: [
              "Compendium.dnd5e.spells.Pyzmm8R7rVsNAPsd",
              "Compendium.dnd5e.spells.AGFMPAmuzwWO6Dfz",
            ],
          },
          17: { features: ["Compendium.dnd5e.classfeatures.4UOgxzr83vFuUash"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions(["history", "insight", "medicine", "persuasion", "religion"]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt", "med", "shl"],
        weapon_proficiencies: ["sim"],
        save_proficiencies: ["wis", "cha"],
        features: [
          "Compendium.dnd5e.classes.tlwBnN8GmqJcTgub",
          "Compendium.dnd5e.classfeatures.x637K2Icp2ZFM1TB",
          "Compendium.dnd5e.classfeatures.v4gKwLhAq9vuqza7",
        ],
      },
      2: { features: ["Compendium.dnd5e.classfeatures.YpiLQEKGalROn7iJ"] },
      5: { features: ["Compendium.dnd5e.classfeatures.NMy4piwXIpLjYbRE"] },
      10: { features: ["Compendium.dnd5e.classfeatures.eVXqHn0ojWrEuYGU"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Mace or Warhammer",
            choose: 1,
            options: [
              itemOptions("weapons.melee.simple.mace"),
              itemOptions("weapons.melee.martial.warhammer"),
            ],
          },
          {
            name: "Leather Armor, Scale Mail, or Chain Mail",
            choose: 1,
            options: [
              itemOptions("armor.light.leatherarmor"),
              itemOptions("armor.medium.scalemail"),
              itemOptions("armor.heavy.chainmail"),
            ],
          },
          {
            name: "Any Simple Weapon",
            choose: 1,
            options: [
              {
                name: "Light Crossbow + 20 Bolts",
                data: {
                  items: [
                    "Compendium.dnd5e.items.ddWvQRLmnnIS0eLF",
                    ...Array.from({ length: 20 }, () => "Compendium.dnd5e.items.SItCnYBqhzqBoaWG"),
                  ],
                },
              },
              ...Object.values(itemOptions("weapons.melee.simple")),
              ...Object.values(itemOptions("weapons.ranged.simple")),
            ],
          },
          {
            name: "Priest's Pack or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["priest", "explorer"]),
          },
        ],
      },
    },
  },

  // Druid
  "Compendium.dnd5e.classes.ygVYgPbJkaH0tH1N": {
    subclasses: {
      "circle-of-the-land": {
        label: "Circle of the Land",
        source: "PHB pg. 68",
        data: {
          2: {
            features: [
              "Compendium.dnd5e.classfeatures.lT8GsPOPgRzDC3QJ",
              "Compendium.dnd5e.classfeatures.wKdRtFsvGfMKQHLY",
            ],
          },
          3: { features: ["Compendium.dnd5e.classfeatures.YiK59gWSlcQ6Mbdz"] },
          6: { features: ["Compendium.dnd5e.classfeatures.3FB25qKxmkmxcxuC"] },
          10: { features: ["Compendium.dnd5e.classfeatures.OTvrJSJSUgAwXrWX"] },
          14: { features: ["Compendium.dnd5e.classfeatures.EuX1kJNIw1F68yus"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "arcana",
            "animal handling",
            "insight",
            "medicine",
            "nature",
            "perception",
            "religion",
            "survival",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt", "med", "shl"],
        weapon_proficiencies: [
          "club",
          "dagger",
          "dart",
          "javelin",
          "mace",
          "quarterstaff",
          "scimitar",
          "sickle",
          "sling",
          "spear",
        ],
        save_proficiencies: ["int", "wis"],
        tool_proficiencies: ["herb"],
        features: [
          "Compendium.dnd5e.classes.ygVYgPbJkaH0tH1N",
          "Compendium.dnd5e.classfeatures.LzJ5ayHt0OlSVGxi",
          "Compendium.dnd5e.classfeatures.i6tPm3FNK13Ftc9v",
        ],
      },
      2: {
        features: [
          "Compendium.dnd5e.classfeatures.swK0r5TOIxredxWS",
          "Compendium.dnd5e.classfeatures.u6Du2P9s81SWuGbi",
        ],
      },
      18: {
        features: [
          "Compendium.dnd5e.classfeatures.cVDEQo0ow1WJT7Wl",
          "Compendium.dnd5e.classfeatures.xvgPu1O57DgXCM86",
        ],
      },
      20: { features: ["Compendium.dnd5e.classfeatures.ip4bvmGoz3qkoqes"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Shield or Any Simple Weapon",
            choose: 1,
            options: [
              itemOptions("armor.shield"),
              ...Object.values(itemOptions("weapons.melee.simple")),
              ...Object.values(itemOptions("weapons.ranged.simple")),
            ],
          },
          {
            name: "Scimitar or Any Simple Melee Weapon",
            choose: 1,
            options: [
              itemOptions("weapons.melee.martial.scimitar"),
              ...Object.values(itemOptions("weapons.melee.simple")),
            ],
          },
        ],
      },
    },
  },

  // Fighter
  "Compendium.dnd5e.classes.ABEBgWyRhVlDUIfq": {
    subclasses: {
      champion: {
        label: "Champion",
        source: "PHB pg. 72",
        data: {
          3: { features: ["Compendium.dnd5e.classfeatures.YgLQV1O849wE5TgM"] },
          7: { features: ["Compendium.dnd5e.classfeatures.dHu1yzIjD38BvGGd"] },
          11: { features: ["Compendium.dnd5e.classfeatures.kYJsED0rqqqUcgKz"] },
          15: { features: ["Compendium.dnd5e.classfeatures.aVKH6TLn1AG9hPSA"] },
          18: { features: ["Compendium.dnd5e.classfeatures.ipG5yx1tRNmeJfSH"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "acrobatics",
            "animal handling",
            "athletics",
            "history",
            "insight",
            "intimidation",
            "perception",
            "survival",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt", "med", "hvy", "shl"],
        weapon_proficiencies: ["mar", "sim"],
        save_proficiencies: ["str", "con"],
        features: [
          "Compendium.dnd5e.classes.ABEBgWyRhVlDUIfq",
          "Compendium.dnd5e.classfeatures.fbExzwNwEAl2kW9c",
          "Compendium.dnd5e.classfeatures.nTjmWbyHweXuIqwc",
        ],
      },
      2: { features: ["Compendium.dnd5e.classfeatures.xF1VTcJ3AdkbTsdQ"] },
      3: { features: ["Compendium.dnd5e.classfeatures.ax8M0X0q1GGWM26j"] },
      5: { features: ["Compendium.dnd5e.classfeatures.q9g1MLXuLZyxjQMg"] },
      9: { features: ["Compendium.dnd5e.classfeatures.653ZHbNcmm7ZGXbw"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Chainmail or Leather Armor, Longbow, and 20 Arrows",
            choose: 1,
            options: [
              itemOptions("armor.heavy.chainmail"),
              {
                name: "Leather Armor, Longbow, and 20 Arrows",
                data: {
                  items: [
                    "Compendium.dnd5e.items.WwdpHLXGX5r8uZu5",
                    "Compendium.dnd5e.items.3cymOVja8jXbzrdT",
                    ...Array.from({ length: 20 }, () => "Compendium.dnd5e.items.3c7JXOzsv55gqJS5"),
                  ],
                },
              },
            ],
          },
          {
            name: "Martial Weapons",
            choose: 2,
            options: [
              itemOptions("armor.shield"),
              ...Object.values(itemOptions("weapons.melee.martial")),
              ...Object.values(itemOptions("weapons.ranged.martial")),
            ],
          },
          {
            name: "Light Crossbow and 20 Bolts or 2 Handaxes",
            choose: 1,
            options: [
              {
                name: "Light Crossbow + 20 Bolts",
                data: {
                  items: [
                    "Compendium.dnd5e.items.ddWvQRLmnnIS0eLF",
                    ...Array.from({ length: 20 }, () => "Compendium.dnd5e.items.SItCnYBqhzqBoaWG"),
                  ],
                },
              },
              {
                name: "Two Handaxes",
                data: {
                  items: [
                    "Compendium.dnd5e.items.eO7Fbv5WBk5zvGOc",
                    "Compendium.dnd5e.items.eO7Fbv5WBk5zvGOc",
                  ],
                },
              },
            ],
          },
          {
            name: "Dungeoneer's Pack or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["dungeoneer", "explorer"]),
          },
        ],
      },
    },
  },

  // Monk
  "Compendium.dnd5e.classes.6VoZrWxhOEKGYhnq": {
    subclasses: {
      "way-of-the-open-hand": {
        label: "Way of the Open Hand",
        source: "PHB pg. 79",
        data: {
          3: { features: ["Compendium.dnd5e.classfeatures.iQxLNydNLlCHNKbp"] },
          6: { features: ["Compendium.dnd5e.classfeatures.Q7mOdk4b1lgjcptF"] },
          11: { features: ["Compendium.dnd5e.classfeatures.rBDZLatuoolT2FUW"] },
          17: { features: ["Compendium.dnd5e.classfeatures.h1gM8SH3BNRtFevE"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "acrobatics",
            "athletics",
            "history",
            "insight",
            "religion",
            "stealth",
          ]),
        },
        {
          name: "Tool Proficiency",
          choose: 1,
          options: toolOptions([
            "alchemist",
            "brewer",
            "calligrapher",
            "carpenter",
            "cartographer",
            "cobbler",
            "cook",
            "glassblower",
            "jeweler",
            "leatherworker",
            "mason",
            "painter",
            "potter",
            "smith",
            "tinker",
            "weaver",
            "woodcarver",
            "disguise",
            "forgery",
            "bagpipes",
            "drum",
            "dulcimer",
            "flute",
            "lute",
            "lyre",
            "horn",
            "panflute",
            "shawm",
            "viol",
          ]),
        },
      ],
    },
    data: {
      1: {
        weapon_proficiencies: ["sim", "shortsword"],
        save_proficiencies: ["str", "dex"],
        features: [
          "Compendium.dnd5e.classes.6VoZrWxhOEKGYhnq",
          "Compendium.dnd5e.classfeatures.UAvV7N7T4zJhxdfI",
          "Compendium.dnd5e.classfeatures.l50hjTxO2r0iecKw",
        ],
      },
      2: {
        features: [
          "Compendium.dnd5e.classfeatures.10b6z2W1txNkrGP7",
          "Compendium.dnd5e.classfeatures.7vSrGc0MP5Vzm9Ac",
        ],
      },
      3: {
        features: [
          "Compendium.dnd5e.classfeatures.rtpQdX77dYWbDIOH",
          "Compendium.dnd5e.classfeatures.mzweVbnsJPQiVkAe",
        ],
      },
      4: { features: ["Compendium.dnd5e.classfeatures.KQz9bqxVkXjDl8gK"] },
      5: {
        features: [
          "Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo",
          "Compendium.dnd5e.classfeatures.pvRc6GAu1ok6zihC",
        ],
      },
      6: { features: ["Compendium.dnd5e.classfeatures.7flZKruSSu6dHg6D"] },
      7: {
        features: [
          "Compendium.dnd5e.classfeatures.a4P4DNMmH8CqSNkC",
          "Compendium.dnd5e.classfeatures.ZmC31XKS4YNENnoc",
        ],
      },
      10: { features: ["Compendium.dnd5e.classfeatures.bqWA7t9pDELbNRkp"] },
      13: { features: ["Compendium.dnd5e.classfeatures.XjuGBeB8Y0C3A5D4"] },
      14: { features: ["Compendium.dnd5e.classfeatures.7D2EkLdISwShEDlN"] },
      15: { features: ["Compendium.dnd5e.classfeatures.gDH8PMrKvLHaNmEI"] },
      18: { features: ["Compendium.dnd5e.classfeatures.3jwFt3hSqDswBlOH"] },
      20: { features: ["Compendium.dnd5e.classfeatures.mQNPg89YIs7g5tG4"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Shortsword Or Any Simple Weapon",
            choose: 1,
            options: [
              itemOptions("weapons.melee.martial.shortsword"),
              ...Object.values(itemOptions("weapons.melee.simple")),
              ...Object.values(itemOptions("weapons.ranged.simple")),
            ],
          },
          {
            name: "Dungeoneer's Pack or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["dungeoneer", "explorer"]),
          },
        ],
      },
    },
  },

  // Paladin
  "Compendium.dnd5e.classes.gZiUvbXWLs0pOp0c": {
    subclasses: {
      "oath-of-devotion": {
        label: "Oath of Devotion",
        source: "PHB pg. 85",
        data: {
          3: {
            features: [
              "Compendium.dnd5e.spells.xmDBqZhRVrtLP8h2",
              "Compendium.dnd5e.spells.gvdA9nPuWLck4tBl",
            ],
          },
          5: {
            features: [
              "Compendium.dnd5e.spells.F0GsG0SJzsIOacwV",
              "Compendium.dnd5e.spells.CylBa7jR8DSbo8Z3",
            ],
          },
          9: {
            features: [
              "Compendium.dnd5e.spells.ZU9d6woBdUP8pIPt",
              "Compendium.dnd5e.spells.15Fa6q1nH27XfbR8",
            ],
          },
          13: {
            features: [
              "Compendium.dnd5e.spells.da0a1t2FqaTjRZGT",
              "Compendium.dnd5e.spells.TgHsuhNasPbhu8MO",
            ],
          },
          17: {
            features: [
              "Compendium.dnd5e.spells.d54VDyFulD9xxY7J",
              "Compendium.dnd5e.spells.5e1xTohkzqFqbYH4",
            ],
          },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "athletics",
            "insight",
            "intimidation",
            "medicine",
            "persuasion",
            "religion",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt", "med", "hvy", "shl"],
        weapon_proficiencies: ["sim", "mar"],
        save_proficiencies: ["wis", "cha"],
        features: [
          "Compendium.dnd5e.classes.gZiUvbXWLs0pOp0c",
          "Compendium.dnd5e.classfeatures.E8ozg8avUVOX9N7u",
          "Compendium.dnd5e.classfeatures.OdrvL3afwLOPeuYZ",
        ],
      },
      2: {
        features: [
          "Compendium.dnd5e.classfeatures.ySMPQ6zNSlvkrl2f",
          "Compendium.dnd5e.classfeatures.fbExzwNwEAl2kW9c",
          "Compendium.dnd5e.classfeatures.ihoQHsmVZlyDbPhX",
        ],
      },
      3: {
        features: [
          "Compendium.dnd5e.classfeatures.dY9yrqkyEDuF0CG2",
          "Compendium.dnd5e.classfeatures.olAqNsUTIef9x8xC",
        ],
      },
      5: { features: ["Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo"] },
      6: { features: ["Compendium.dnd5e.classfeatures.carGDhkIdoduTC0I"] },
      10: { features: ["Compendium.dnd5e.classfeatures.nahSkBO6LH4HkpaT"] },
      11: { features: ["Compendium.dnd5e.classfeatures.FAk41RPCTcvCk6KI"] },
      14: { features: ["Compendium.dnd5e.classfeatures.U7BIPVPsptBmwsnV"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Martial Weapon + Shield Or 2 Martial Weapons",
            choose: 2,
            options: [
              itemOptions("armor.shield"),
              ...Object.values(itemOptions("weapons.melee.martial")),
              ...Object.values(itemOptions("weapons.ranged.martial")),
            ],
          },
          {
            name: "5 Javelins or Any Simple Melee Weapon",
            choose: 1,
            options: [
              {
                name: "5 Javelins",
                data: {
                  items: [
                    ...Array.from({ length: 5 }, () => "Compendium.dnd5e.items.DWLMnODrnHn8IbAG"),
                  ],
                },
              },
              ...Object.values(itemOptions("weapons.melee.simple")),
            ],
          },
          {
            name: "Priest's Pack or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["priest", "explorer"]),
          },
        ],
      },
    },
  },

  // Ranger
  "Compendium.dnd5e.classes.VkRQ7glQvTWWiOCS": {
    subclasses: {
      hunter: {
        label: "Hunter",
        source: "PHB pg. 93",
        data: {
          3: { features: ["Compendium.dnd5e.classfeatures.wrxIW5sDfmGr3u5s"] },
          7: { features: ["Compendium.dnd5e.classfeatures.WgQrqjmeyMqDzVt3"] },
          11: { features: ["Compendium.dnd5e.classfeatures.7zlTRRXT1vWSBGjX"] },
          15: { features: ["Compendium.dnd5e.classfeatures.a0Sq88dgnREcIMfl"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 3,
          options: skillOptions([
            "animal handling",
            "athletics",
            "insight",
            "investigation",
            "nature",
            "perception",
            "stealth",
            "survival",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt", "med", "shl"],
        weapon_proficiencies: ["sim", "mar"],
        save_proficiencies: ["str", "dex"],
        features: [
          "Compendium.dnd5e.classes.VkRQ7glQvTWWiOCS",
          "Compendium.dnd5e.classfeatures.4Vpj9vCOB37GtXk6",
          "Compendium.dnd5e.classfeatures.8fbZt2Qh7ZttwIan",
        ],
      },
      2: {
        features: [
          "Compendium.dnd5e.classfeatures.fbExzwNwEAl2kW9c",
          "Compendium.dnd5e.classfeatures.u6xV3Ki3TXRrD7zg",
        ],
      },
      3: {
        features: [
          "Compendium.dnd5e.classfeatures.1dJHU48yNqn3lcfx",
          "Compendium.dnd5e.classfeatures.kaHcUGiwi8AtfZIm",
        ],
      },
      5: { features: ["Compendium.dnd5e.classfeatures.XogoBnFWmCAHXppo"] },
      8: { features: ["Compendium.dnd5e.classfeatures.C5fzaOBc6HxyOWRn"] },
      10: { features: ["Compendium.dnd5e.classfeatures.r0unvWK0lPsDthDx"] },
      14: { features: ["Compendium.dnd5e.classfeatures.DhU2dWCNnX78TstR"] },
      18: { features: ["Compendium.dnd5e.classfeatures.QBVmY56RMQuh6C8h"] },
      20: { features: ["Compendium.dnd5e.classfeatures.3CaP1vFHVR8LgHjx"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Scale Mail, or Leather Armor",
            choose: 1,
            options: [
              itemOptions("armor.medium.scalemail"),
              itemOptions("armor.light.leatherarmor"),
            ],
          },
          {
            name: "2 Shortswords or 2 Simple Melee Weapons",
            choose: 1,
            options: [
              {
                name: "2 Shortswords",
                data: {
                  items: [
                    ...Array.from({ length: 2 }, () => "Compendium.dnd5e.items.osLzOwQdPtrK3rQH"),
                  ],
                },
              },
              {
                name: "2 Simple Melee Weapons",
                choose: 2,
                options: [...Object.values(itemOptions("weapons.melee.simple"))],
              },
            ],
          },
          {
            name: "Dungeoneer's Pack or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["dungeoneer", "explorer"]),
          },
        ],
      },
    },
  },

  // Rogue
  "Compendium.dnd5e.classes.xEb8jmA5HlNs7xTF": {
    subclasses: {
      thief: {
        label: "Thief",
        source: "PHB pg. 97",
        data: {
          3: {
            features: [
              "Compendium.dnd5e.classfeatures.ga3dt2zrCn2MHK8R",
              "Compendium.dnd5e.classfeatures.FGrbXs6Ku5qxFK5G",
            ],
          },
          9: { features: ["Compendium.dnd5e.classfeatures.Ei1Oh4UAA2E30jcD"] },
          13: { features: ["Compendium.dnd5e.classfeatures.NqWyHE7Rpw9lyKWu"] },
          17: { features: ["Compendium.dnd5e.classfeatures.LhRm1EeUMvp2EWhV"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 4,
          options: skillOptions([
            "acrobatics",
            "athletics",
            "deception",
            "insight",
            "intimidation",
            "investigation",
            "perception",
            "performance",
            "persuasion",
            "sleight of hand",
            "stealth",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt"],
        weapon_proficiencies: ["sim", "handcrossbow", "longsword", "shortsword", "rapier"],
        save_proficiencies: ["dex", "int"],
        tool_proficiencies: ["thief"],
        features: [
          "Compendium.dnd5e.classes.xEb8jmA5HlNs7xTF",
          "Compendium.dnd5e.classfeatures.3sYPftQKnbbVnHrh",
          "Compendium.dnd5e.classfeatures.DPN2Gfk8yi1Z5wp7",
          "Compendium.dnd5e.classfeatures.ohwfuwnvuoBWlSQr",
        ],
      },
      2: { features: ["Compendium.dnd5e.classfeatures.01pcLg6PRu5zGrsb"] },
      3: { features: ["Compendium.dnd5e.classfeatures.80USV8ZFPIahpLd0"] },
      5: { features: ["Compendium.dnd5e.classfeatures.Mm64SKAHJWYecgXS"] },
      7: { features: ["Compendium.dnd5e.classfeatures.a4P4DNMmH8CqSNkC"] },
      11: { features: ["Compendium.dnd5e.classfeatures.YN9xm6MCvse4Y60u"] },
      14: { features: ["Compendium.dnd5e.classfeatures.fjsBk7zxoAbLf8ZI"] },
      15: { features: ["Compendium.dnd5e.classfeatures.V4pwFxlwHtNeB4w9"] },
      18: { features: ["Compendium.dnd5e.classfeatures.L7nJSRosos8sHJH9"] },
      20: { features: ["Compendium.dnd5e.classfeatures.rQhWDaMHMn7iU4f2"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Rapier or Shortsword",
            choose: 1,
            options: [
              itemOptions("weapons.melee.martial.shortsword"),
              itemOptions("weapons.melee.martial.rapier"),
            ],
          },
          {
            name: "Shortbow + Quiver of 20 Arrows or Shortsword",
            choose: 1,
            options: [
              {
                name: "Shortbow + Quiver of 20 Arrows",
                data: {
                  items: [
                    "Compendium.dnd5e.items.osLzOwQdPtrK3rQH",
                    "Compendium.dnd5e.items.4MtQKPn9qMWCFjDA",
                    ...Array.from({ length: 20 }, () => "Compendium.dnd5e.items.3c7JXOzsv55gqJS5"),
                  ],
                },
              },
              itemOptions("weapons.melee.martial.shortsword"),
            ],
          },
          {
            name: "Burglar's Pack, Dungeoneer's Pack, or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["burglar", "dungeoneer", "explorer"]),
          },
        ],
      },
    },
  },

  // Sorcerer
  "Compendium.dnd5e.classes.6T08zzKtmmpVwlXU": {
    subclasses: {
      "draconic-bloodline": {
        label: "Draconic Bloodline",
        source: "PHB pg. 102",
        data: {
          1: {
            features: [
              "Compendium.dnd5e.classfeatures.EZsonMThTNLZq35j",
              "Compendium.dnd5e.classfeatures.MW1ExvBLm8Hg82aA",
            ],
          },
          6: { features: ["Compendium.dnd5e.classfeatures.x6eEZ9GUsuOcEa3G"] },
          14: { features: ["Compendium.dnd5e.classfeatures.3647zjKSE9zFwOXc"] },
          18: { features: ["Compendium.dnd5e.classfeatures.Gsha4bl0apxqspFy"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "arcana",
            "deception",
            "insight",
            "intimidation",
            "persuasion",
            "religion",
          ]),
        },
      ],
    },
    data: {
      1: {
        weapon_proficiencies: ["dagger", "dart", "sling", "quarterstaff", "lightcrossbow"],
        save_proficiencies: ["con", "cha"],
        features: [
          "Compendium.dnd5e.classes.6T08zzKtmmpVwlXU",
          "Compendium.dnd5e.classfeatures.cmRCL9T9UgRYOj1c",
          "Compendium.dnd5e.classfeatures.oygRF3ZjTv2T7z0Y",
        ],
      },
      2: { features: ["Compendium.dnd5e.classfeatures.LBKChJY5n02Afhnq"] },
      3: { features: ["Compendium.dnd5e.classfeatures.9Uh7uTDNZ04oTJsL"] },
      20: { features: ["Compendium.dnd5e.classfeatures.F2lEKSmOY0NUruzY"] },
    },
    equipment: {
      1: {
        choices: [
          {
            name: "Any Simple Weapon",
            choose: 1,
            options: [
              {
                name: "Light Crossbow + 20 Bolts",
                data: {
                  items: [
                    "Compendium.dnd5e.items.ddWvQRLmnnIS0eLF",
                    ...Array.from({ length: 20 }, () => "Compendium.dnd5e.items.SItCnYBqhzqBoaWG"),
                  ],
                },
              },
              ...Object.values(itemOptions("weapons.melee.simple")),
              ...Object.values(itemOptions("weapons.ranged.simple")),
            ],
          },
          {
            name: "Component Pouch or Arcane Focus",
            choose: 1,
            options: [
              {
                name: "Component Pouch",
                data: {
                  items: ["Compendium.dnd5e.items.eZGmdOhaTWMicXPW"],
                },
              },
              {
                name: "Crystal",
                data: {
                  items: ["Compendium.dnd5e.items.uXOT4fYbgPY8DGdd"],
                },
              },
              {
                name: "Orb",
                data: {
                  items: ["Compendium.dnd5e.items.tH5Rn0JVRG1zdmPa"],
                },
              },
              {
                name: "Rod",
                data: {
                  items: ["Compendium.dnd5e.items.OojyyGfh91iViuMF"],
                },
              },
              {
                name: "Staff",
                data: {
                  items: ["Compendium.dnd5e.items.BeKIrNIvNHRPQ4t5"],
                },
              },
              {
                name: "Wand",
                data: {
                  items: ["Compendium.dnd5e.items.KA2P6I48iOWlnboO"],
                },
              },
            ],
          },
          {
            name: "Dungeoneer's Pack or Explorer's Pack",
            choose: 1,
            options: itemPackOptions(["dungeoneer", "explorer"]),
          },
        ],
      },
    },
  },

  // Warlock
  "Compendium.dnd5e.classes.7WJp9vhi6F6SlAFa": {
    subclasses: {
      "the-fiend": {
        label: "The Fiend",
        source: "PHB pg. 109",
        data: {
          1: { features: ["Compendium.dnd5e.classfeatures.Jv0zu4BtUi8bFCqJ"] },
          6: { features: ["Compendium.dnd5e.classfeatures.OQSb0bO1yDI4aiMx"] },
          10: { features: ["Compendium.dnd5e.classfeatures.9UZ2WjUF2k58CQug"] },
          14: { features: ["Compendium.dnd5e.classfeatures.aCUmlnHlUPHS0rdu"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "arcana",
            "deception",
            "history",
            "intimidation",
            "investigation",
            "nature",
            "religion",
          ]),
        },
      ],
    },
    data: {
      1: {
        armor_proficiencies: ["lgt"],
        weapon_proficiencies: ["sim"],
        save_proficiencies: ["wis", "cha"],
        features: [
          "Compendium.dnd5e.classes.7WJp9vhi6F6SlAFa",
          "Compendium.dnd5e.classfeatures.jTXHaK0vvT5DV3uO",
          "Compendium.dnd5e.classfeatures.x6IJZwr6f0SGral7",
        ],
      },
      2: { features: ["Compendium.dnd5e.classfeatures.8MlxM2nEfE3Q0EVk"] },
      3: { features: ["Compendium.dnd5e.classfeatures.QwgfIpCN8VWfoUtX"] },
      11: { features: ["Compendium.dnd5e.classfeatures.zB77V8BcCJvWVxck"] },
      13: { features: ["Compendium.dnd5e.classfeatures.HBn6FXLz7Eiudz0V"] },
      15: { features: ["Compendium.dnd5e.classfeatures.knDZR4l4QfLTKinm"] },
      17: { features: ["Compendium.dnd5e.classfeatures.vMxJQEKeK6WwZFaF"] },
      20: { features: ["Compendium.dnd5e.classfeatures.0C04rwyvoknvFYiy"] },
    },
  },

  // Wizard
  "Compendium.dnd5e.classes.wZK2Q0rXB0AQo8h3": {
    subclasses: {
      "school-of-evocation": {
        label: "School of Evocation",
        source: "PHB pg. 117",
        data: {
          2: {
            features: [
              "Compendium.dnd5e.classfeatures.7uzJ2JkmsdRGLra3",
              "Compendium.dnd5e.classfeatures.6VBXkjjBgjSpNElh",
            ],
          },
          6: { features: ["Compendium.dnd5e.classfeatures.evEWCpE5MYgr5RRW"] },
          10: { features: ["Compendium.dnd5e.classfeatures.7O85kj6uDEG5NzUE"] },
          14: { features: ["Compendium.dnd5e.classfeatures.VUtSLeCzFubGXmGx"] },
        },
      },
    },
    choices: {
      1: [
        {
          name: "Skill Proficiencies",
          choose: 2,
          options: skillOptions([
            "arcana",
            "history",
            "insight",
            "investigation",
            "medicine",
            "religion",
          ]),
        },
      ],
    },
    data: {
      1: {
        weapon_proficiencies: ["dagger", "dart", "sling", "quarterstaff", "lightcrossbow"],
        save_proficiencies: ["int", "wis"],
        features: [
          "Compendium.dnd5e.classes.wZK2Q0rXB0AQo8h3",
          "Compendium.dnd5e.classfeatures.gbNo5eVPaqr8IVKL",
          "Compendium.dnd5e.classfeatures.e0uTcFPpgxjIyUW9",
        ],
      },
      2: { features: ["Compendium.dnd5e.classfeatures.AEWr9EMxy5gj4ZFT"] },
      18: { features: ["Compendium.dnd5e.classfeatures.JfFfHTeIszx1hNRx"] },
      20: {
        features: [
          "Compendium.dnd5e.classfeatures.nUrZDi6QN1YjwAr6",
          "Compendium.dnd5e.classfeatures.31bKbWe9ZGVLEns6",
        ],
      },
    },
  },
};

export default CLASSES;
