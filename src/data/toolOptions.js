const tools = {
  alchemist: {
    name: "Alchemist",
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
    name: "Brewer",
    data: {
      tool_proficiencies: ["brewer"],
    },
  },
  calligrapher: {
    name: "Calligrapher",
    data: {
      tool_proficiencies: ["calligrapher"],
    },
  },
  card: {
    name: "Card",
    data: {
      tool_proficiencies: ["card"],
    },
  },
  carpenter: {
    name: "Carpenter",
    data: {
      tool_proficiencies: ["carpenter"],
    },
  },
  cartographer: {
    name: "Cartographer",
    data: {
      tool_proficiencies: ["cartographer"],
    },
  },
  cobbler: {
    name: "Cobbler",
    data: {
      tool_proficiencies: ["cobbler"],
    },
  },
  cook: {
    name: "Cook",
    data: {
      tool_proficiencies: ["cook"],
    },
  },
  dice: {
    name: "Dice",
    data: {
      tool_proficiencies: ["dice"],
    },
  },
  disg: {
    name: "Disg",
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
  forg: {
    name: "Forg",
    data: {
      tool_proficiencies: ["forg"],
    },
  },
  glassblower: {
    name: "Glassblower",
    data: {
      tool_proficiencies: ["glassblower"],
    },
  },
  herb: {
    name: "Herb",
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
    name: "Jeweler",
    data: {
      tool_proficiencies: ["jeweler"],
    },
  },
  leatherworker: {
    name: "Leatherworker",
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
    name: "Mason",
    data: {
      tool_proficiencies: ["mason"],
    },
  },
  navg: {
    name: "Navg",
    data: {
      tool_proficiencies: ["navg"],
    },
  },
  painter: {
    name: "Painter",
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
  pois: {
    name: "Pois",
    data: {
      tool_proficiencies: ["pois"],
    },
  },
  potter: {
    name: "Potter",
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
    name: "Smith",
    data: {
      tool_proficiencies: ["smith"],
    },
  },
  thief: {
    name: "Thief",
    data: {
      tool_proficiencies: ["thief"],
    },
  },
  tinker: {
    name: "Tinker",
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
    name: "Weaver",
    data: {
      tool_proficiencies: ["weaver"],
    },
  },
  woodcarver: {
    name: "Woodcarver",
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
