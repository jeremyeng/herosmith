const skills = {
  acrobatics: {
    name: "Acrobatics",
    data: {
      skill_proficiencies: ["acr"],
    },
  },
  "animal handling": {
    name: "Animal Handling",
    data: {
      skill_proficiencies: ["ani"],
    },
  },
  arcana: {
    name: "Arcana",
    data: {
      skill_proficiencies: ["arc"],
    },
  },
  athletics: {
    name: "Athletics",
    data: {
      skill_proficiencies: ["ath"],
    },
  },
  deception: {
    name: "Deception",
    data: {
      skill_proficiencies: ["dec"],
    },
  },
  history: {
    name: "History",
    data: {
      skill_proficiencies: ["his"],
    },
  },
  insight: {
    name: "Insight",
    data: {
      skill_proficiencies: ["ins"],
    },
  },
  intimidation: {
    name: "Intimidation",
    data: {
      skill_proficiencies: ["itm"],
    },
  },
  investigation: {
    name: "Investigation",
    data: {
      skill_proficiencies: ["inv"],
    },
  },
  medicine: {
    name: "Medicine",
    data: {
      skill_proficiencies: ["med"],
    },
  },
  nature: {
    name: "Nature",
    data: {
      skill_proficiencies: ["nat"],
    },
  },
  perception: {
    name: "Perception",
    data: {
      skill_proficiencies: ["prc"],
    },
  },
  performance: {
    name: "Performance",
    data: {
      skill_proficiencies: ["prf"],
    },
  },
  persuasion: {
    name: "Persuasion",
    data: {
      skill_proficiencies: ["per"],
    },
  },
  religion: {
    name: "Religion",
    data: {
      skill_proficiencies: ["rel"],
    },
  },
  "sleight of hand": {
    name: "Sleight Of Hand",
    data: {
      skill_proficiencies: ["slt"],
    },
  },
  stealth: {
    name: "Stealth",
    data: {
      skill_proficiencies: ["ste"],
    },
  },
  survival: {
    name: "Survival",
    data: {
      skill_proficiencies: ["sur"],
    },
  },
};

export default function skillOptions(skillNames = Object.keys(skills)) {
  const result = [];
  for (const name of skillNames) {
    if (skills[name.toLowerCase()]) result.push(skills[name]);
  }

  return result;
}
