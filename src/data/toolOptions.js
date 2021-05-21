const tools = {
  alchemist: {
    name: "Alchemist's Supplies",
    data: {
      tool_proficiencies: ["alchemist"],
    },
  },
  bagpipes: {
    name: "Bagpipes",
    data: {
      tool_proficiencies: ["bagpipes"],
    },
  },
  brewer: {
    name: "Brewer's Supplies",
    data: {
      tool_proficiencies: ["brewer"],
    },
  },
  calligrapher: {
    name: "Calligrapher's Supplies",
    data: {
      tool_proficiencies: ["calligrapher"],
    },
  },
  card: {
    name: "Playing Cards",
    data: {
      tool_proficiencies: ["card"],
    },
  },
  carpenter: {
    name: "Carpenter's Tools",
    data: {
      tool_proficiencies: ["carpenter"],
    },
  },
  cartographer: {
    name: "Cartographer's Tools",
    data: {
      tool_proficiencies: ["cartographer"],
    },
  },
  cobbler: {
    name: "Cobbler's Tools",
    data: {
      tool_proficiencies: ["cobbler"],
    },
  },
  cook: {
    name: "Cook's Utensils",
    data: {
      tool_proficiencies: ["cook"],
    },
  },
  dice: {
    name: "Dice Set",
    data: {
      tool_proficiencies: ["dice"],
    },
  },
  disguise: {
    name: "Disguise Kit",
    data: {
      tool_proficiencies: ["disg"],
    },
  },
  drum: {
    name: "Drum",
    data: {
      tool_proficiencies: ["drum"],
    },
  },
  dulcimer: {
    name: "Dulcimer",
    data: {
      tool_proficiencies: ["dulcimer"],
    },
  },
  flute: {
    name: "Flute",
    data: {
      tool_proficiencies: ["flute"],
    },
  },
  forgery: {
    name: "Forgery Kit",
    data: {
      tool_proficiencies: ["forg"],
    },
  },
  glassblower: {
    name: "Glassblower's Tools",
    data: {
      tool_proficiencies: ["glassblower"],
    },
  },
  herb: {
    name: "Herbalism Kit",
    data: {
      tool_proficiencies: ["herb"],
    },
  },
  horn: {
    name: "Horn",
    data: {
      tool_proficiencies: ["horn"],
    },
  },
  jeweler: {
    name: "Jeweler's Tools",
    data: {
      tool_proficiencies: ["jeweler"],
    },
  },
  leatherworker: {
    name: "Leatherworker's Tools",
    data: {
      tool_proficiencies: ["leatherworker"],
    },
  },
  lute: {
    name: "Lute",
    data: {
      tool_proficiencies: ["lute"],
    },
  },
  lyre: {
    name: "Lyre",
    data: {
      tool_proficiencies: ["lyre"],
    },
  },
  mason: {
    name: "Mason's Tools",
    data: {
      tool_proficiencies: ["mason"],
    },
  },
  navigator: {
    name: "Navigator's Tools",
    data: {
      tool_proficiencies: ["navg"],
    },
  },
  painter: {
    name: "Painter's Supplies",
    data: {
      tool_proficiencies: ["painter"],
    },
  },
  panflute: {
    name: "Panflute",
    data: {
      tool_proficiencies: ["panflute"],
    },
  },
  poison: {
    name: "Poisoner's Kit",
    data: {
      tool_proficiencies: ["pois"],
    },
  },
  potter: {
    name: "Potter's Tools",
    data: {
      tool_proficiencies: ["potter"],
    },
  },
  shawm: {
    name: "Shawm",
    data: {
      tool_proficiencies: ["shawm"],
    },
  },
  smith: {
    name: "Smith's Tools",
    data: {
      tool_proficiencies: ["smith"],
    },
  },
  thief: {
    name: "Thieves' Tools",
    data: {
      tool_proficiencies: ["thief"],
    },
  },
  tinker: {
    name: "Tinker's Tools",
    data: {
      tool_proficiencies: ["tinker"],
    },
  },
  viol: {
    name: "Viol",
    data: {
      tool_proficiencies: ["viol"],
    },
  },
  weaver: {
    name: "Weaver's Tools",
    data: {
      tool_proficiencies: ["weaver"],
    },
  },
  woodcarver: {
    name: "Woodcarver's Tools",
    data: {
      tool_proficiencies: ["woodcarver"],
    },
  },
};

export default function toolOptions(toolNames = Object.keys(tools)) {
  const result = [];
  for (const name of toolNames) {
    if (tools[name.toLowerCase()]) result.push(tools[name]);
  }

  return result;
}
