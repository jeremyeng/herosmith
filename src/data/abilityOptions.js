const abilities = {
  strength: {
    name: "Strength",
    data: {
      abilities: {
        str: 1,
      },
    },
  },
  dexterity: {
    name: "Dexterity",
    data: {
      abilities: {
        dex: 1,
      },
    },
  },
  constitution: {
    name: "Constitution",
    data: {
      abilities: {
        con: 1,
      },
    },
  },
  intelligence: {
    name: "Intelligence",
    data: {
      abilities: {
        int: 1,
      },
    },
  },
  wisdom: {
    name: "Wisdom",
    data: {
      abilities: {
        wis: 1,
      },
    },
  },
  charisma: {
    name: "Charisma",
    data: {
      abilities: {
        cha: 1,
      },
    },
  },
};

export default function abilityOptions(abilityNames = Object.keys(abilities)) {
  const result = [];
  for (const name of abilityNames) {
    if (abilities[name.toLowerCase()]) result.push(abilities[name]);
  }

  return result;
}
