const skills = {
  acrobatics: {
    name: "Acrobatics",
    data: {
      skill_proficiencies: ["Acrobatics"],
    },
  },
  "animal handling": {
    name: "Animal Handling",
    data: {
      skill_proficiencies: ["Animal Handling"],
    },
  },
  arcana: {
    name: "Arcana",
    data: {
      skill_proficiencies: ["Arcana"],
    },
  },
  athletics: {
    name: "Athletics",
    data: {
      skill_proficiencies: ["Athletics"],
    },
  },
  deception: {
    name: "Deception",
    data: {
      skill_proficiencies: ["Deception"],
    },
  },
  history: {
    name: "History",
    data: {
      skill_proficiencies: ["History"],
    },
  },
  insight: {
    name: "Insight",
    data: {
      skill_proficiencies: ["Insight"],
    },
  },
  intimidation: {
    name: "Intimidation",
    data: {
      skill_proficiencies: ["Intimidation"],
    },
  },
  investigation: {
    name: "Investigation",
    data: {
      skill_proficiencies: ["Investigation"],
    },
  },
  medicine: {
    name: "Medicine",
    data: {
      skill_proficiencies: ["Medicine"],
    },
  },
  nature: {
    name: "Nature",
    data: {
      skill_proficiencies: ["Nature"],
    },
  },
  perception: {
    name: "Perception",
    data: {
      skill_proficiencies: ["Perception"],
    },
  },
  performance: {
    name: "Performance",
    data: {
      skill_proficiencies: ["Performance"],
    },
  },
  persuasion: {
    name: "Persuasion",
    data: {
      skill_proficiencies: ["Persuasion"],
    },
  },
  religion: {
    name: "Religion",
    data: {
      skill_proficiencies: ["Religion"],
    },
  },
  "sleight of hand": {
    name: "Sleight of Hand",
    data: {
      skill_proficiencies: ["Sleight of Hand"],
    },
  },
  stealth: {
    name: "Stealth",
    data: {
      skill_proficiencies: ["Stealth"],
    },
  },
  survival: {
    name: "Survival",
    data: {
      skill_proficiencies: ["Survival"],
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
