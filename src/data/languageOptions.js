const languages = {
  aarakocra: {
    name: "Aarakocra",
    data: {
      languages: ["aarakocra"],
    },
  },
  abyssal: {
    name: "Abyssal",
    data: {
      languages: ["abyssal"],
    },
  },
  aquan: {
    name: "Aquan",
    data: {
      languages: ["aquan"],
    },
  },
  auran: {
    name: "Auran",
    data: {
      languages: ["auran"],
    },
  },
  celestial: {
    name: "Celestial",
    data: {
      languages: ["celestial"],
    },
  },
  common: {
    name: "Common",
    data: {
      languages: ["common"],
    },
  },
  deep: {
    name: "Deep",
    data: {
      languages: ["deep"],
    },
  },
  draconic: {
    name: "Draconic",
    data: {
      languages: ["draconic"],
    },
  },
  druidic: {
    name: "Druidic",
    data: {
      languages: ["druidic"],
    },
  },
  dwarvish: {
    name: "Dwarvish",
    data: {
      languages: ["dwarvish"],
    },
  },
  elvish: {
    name: "Elvish",
    data: {
      languages: ["elvish"],
    },
  },
  giant: {
    name: "Giant",
    data: {
      languages: ["giant"],
    },
  },
  gith: {
    name: "Gith",
    data: {
      languages: ["gith"],
    },
  },
  gnoll: {
    name: "Gnoll",
    data: {
      languages: ["gnoll"],
    },
  },
  gnomish: {
    name: "Gnomish",
    data: {
      languages: ["gnomish"],
    },
  },
  goblin: {
    name: "Goblin",
    data: {
      languages: ["goblin"],
    },
  },
  halfling: {
    name: "Halfling",
    data: {
      languages: ["halfling"],
    },
  },
  ignan: {
    name: "Ignan",
    data: {
      languages: ["ignan"],
    },
  },
  infernal: {
    name: "Infernal",
    data: {
      languages: ["infernal"],
    },
  },
  orc: {
    name: "Orc",
    data: {
      languages: ["orc"],
    },
  },
  primordial: {
    name: "Primordial",
    data: {
      languages: ["primordial"],
    },
  },
  sylvan: {
    name: "Sylvan",
    data: {
      languages: ["sylvan"],
    },
  },
  terran: {
    name: "Terran",
    data: {
      languages: ["terran"],
    },
  },
  cant: {
    name: "Cant",
    data: {
      languages: ["cant"],
    },
  },
  undercommon: {
    name: "Undercommon",
    data: {
      languages: ["undercommon"],
    },
  },
};

export default function languageOptions(languageNames = Object.keys(languages)) {
  const result = [];
  for (const name of languageNames) {
    if (languages[name.toLowerCase()]) result.push(languages[name]);
  }

  return result;
}
