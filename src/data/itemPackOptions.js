const itemPacks = {
  burglar: {
    name: "Burglar's Pack",
    data: {
      items: [
        // Backpack
        "Compendium.dnd5e.items.H8YCd689ezlD26aT",

        // 1000 Ball Bearings
        ...Array.from({ length: 1000 }, () => "Compendium.dnd5e.items.3YSUIp4eFo26YxJr"),

        // 10 feet of string (NOT in Foundry SRD List)

        // Bell
        "Compendium.dnd5e.items.F6GwSqjErX1u35Re",

        // 5 Candles
        ...Array.from({ length: 5 }, () => "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY"),

        // Crowbar
        "Compendium.dnd5e.items.V5UAjT3ed6sDNtgm",

        // Hammer
        "Compendium.dnd5e.items.14pNRT4sZy9rgvhb",

        // 10 Pitons
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.TqyvIglHDj5kfohR"),

        // Hooded Lantern
        "Compendium.dnd5e.items.trmWAdUoR6Y2B7rA",

        // 2 Flasks of Oil
        "Compendium.dnd5e.items.psoZaItkOScMVaHL",
        "Compendium.dnd5e.items.psoZaItkOScMVaHL",

        // 5 Rations
        ...Array.from({ length: 5 }, () => "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4"),

        // Tinderbox
        "Compendium.dnd5e.items.DNOSEAvF4Oh1DlWy",

        // Waterskin
        "Compendium.dnd5e.items.Uv0ilmzbWvqmlCVH",

        // 50 ft of Hempen Rope
        "Compendium.dnd5e.items.QXmaarJ4X8P0C1HV",
      ],
    },
  },
  diplomat: {
    name: "Diplomat's Pack",
    data: {
      items: [
        // Chest
        "Compendium.dnd5e.items.2YbuclKfhDL0bU4u",

        // 2 Map/Scroll Cases
        "Compendium.dnd5e.items.5mIeX824uMklU3xq",
        "Compendium.dnd5e.items.5mIeX824uMklU3xq",

        // Fine Clothes
        "Compendium.dnd5e.items.3OXueEpvDDCVfGFA",

        // Ink Bottle
        "Compendium.dnd5e.items.dP7jMKyHTTgVb3ii",

        // Ink Pen
        "Compendium.dnd5e.items.uVm7MiB71QblfnoY",

        // Lamp
        "Compendium.dnd5e.items.qMzHmlmha8qMDnEF",

        // 2 Flasks of Oil
        "Compendium.dnd5e.items.psoZaItkOScMVaHL",
        "Compendium.dnd5e.items.psoZaItkOScMVaHL",

        // 5 sheets of paper
        "Compendium.dnd5e.items.fNMkFCOvMiW2Rh3t",
        "Compendium.dnd5e.items.fNMkFCOvMiW2Rh3t",
        "Compendium.dnd5e.items.fNMkFCOvMiW2Rh3t",
        "Compendium.dnd5e.items.fNMkFCOvMiW2Rh3t",
        "Compendium.dnd5e.items.fNMkFCOvMiW2Rh3t",

        // Vial of perfume
        "Compendium.dnd5e.items.uuh4UH3Jx5CsFjdA",

        // Sealing Wax
        "Compendium.dnd5e.items.3uEyuCfnAzGkwAn5",

        // Soap
        "Compendium.dnd5e.items.REBWkTKe6lJaIkpn",
      ],
    },
  },
  dungeoneer: {
    name: "Dungeoneer's Pack",
    data: {
      items: [
        // Backpack
        "Compendium.dnd5e.items.H8YCd689ezlD26aT",

        // Crowbar
        "Compendium.dnd5e.items.V5UAjT3ed6sDNtgm",

        // Hammer
        "Compendium.dnd5e.items.14pNRT4sZy9rgvhb",

        // 10 Pitons
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.TqyvIglHDj5kfohR"),

        // 10 Torches
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.BnOCLuNWhVvzHLjl"),

        // Tinderbox
        "Compendium.dnd5e.items.DNOSEAvF4Oh1DlWy",

        // 10 Rations
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4"),

        // Waterskin
        "Compendium.dnd5e.items.Uv0ilmzbWvqmlCVH",

        // 50 ft of Hempen Rope
        "Compendium.dnd5e.items.QXmaarJ4X8P0C1HV",
      ],
    },
  },
  entertainer: {
    name: "Entertainer's Pack",
    data: {
      items: [
        // Backpack
        "Compendium.dnd5e.items.H8YCd689ezlD26aT",

        // Bedroll
        "Compendium.dnd5e.items.DVXmyetZuvxbzAwW",

        // 2 Costumes
        "Compendium.dnd5e.items.E2h6sEe6FU2tnU96",
        "Compendium.dnd5e.items.E2h6sEe6FU2tnU96",

        // 5 Candles
        "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY",
        "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY",
        "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY",
        "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY",
        "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY",

        // 5 days of rations
        "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4",
        "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4",
        "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4",
        "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4",
        "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4",

        // Waterskin
        "Compendium.dnd5e.items.Uv0ilmzbWvqmlCVH",

        // Disguise Kit
        "Compendium.dnd5e.items.IBhDAr7WkhWPYLVn",
      ],
    },
  },
  explorer: {
    name: "Explorer's Pack",
    data: {
      items: [
        // Backpack
        "Compendium.dnd5e.items.H8YCd689ezlD26aT",

        // Bedroll
        "Compendium.dnd5e.items.DVXmyetZuvxbzAwW",

        // Mess Kit
        "Compendium.dnd5e.items.V13fjV5oSmvbRdgP",

        // Tinderbox
        "Compendium.dnd5e.items.DNOSEAvF4Oh1DlWy",

        // 10 Torches
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.BnOCLuNWhVvzHLjl"),

        // 10 Rations
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4"),

        // Waterskin
        "Compendium.dnd5e.items.Uv0ilmzbWvqmlCVH",

        // 50 ft of Hempen Rope
        "Compendium.dnd5e.items.QXmaarJ4X8P0C1HV",
      ],
    },
  },
  priest: {
    name: "Priest's Pack",
    data: {
      items: [
        // Backpack
        "Compendium.dnd5e.items.H8YCd689ezlD26aT",

        // Blanket
        "Compendium.dnd5e.items.419eNv7xp2p7Xlo5",

        // 10 Candles
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.0NoBBP3MMkvJlwZY"),

        // Tinderbox
        "Compendium.dnd5e.items.DNOSEAvF4Oh1DlWy",

        // Alms Box
        "Compendium.dnd5e.items.g8fQZ1WyTz2bTtvA",

        // 2 Blocks of Incense
        ...Array.from({ length: 2 }, () => "Compendium.dnd5e.items.eJY20LOs3pOkRDPl"),

        // Censer
        "Compendium.dnd5e.items.7ztvHyYJCcOOAWmR",

        // Vestments
        "Compendium.dnd5e.items.irtqrzaUCeshmTZp",

        // 2 Rations
        ...Array.from({ length: 2 }, () => "Compendium.dnd5e.items.f4w4GxBi0nYXmhX4"),

        // Waterskin
        "Compendium.dnd5e.items.Uv0ilmzbWvqmlCVH",
      ],
    },
  },
  scholar: {
    name: "Scholar's Pack",
    data: {
      items: [
        // Backpack
        "Compendium.dnd5e.items.H8YCd689ezlD26aT",

        // Book of Lore
        "Compendium.dnd5e.items.l794iywHk8Wc6Uvi",

        // Ink Bottle
        "Compendium.dnd5e.items.dP7jMKyHTTgVb3ii",

        // Ink Pen
        "Compendium.dnd5e.items.uVm7MiB71QblfnoY",

        // 10 Sheets of Parchment
        ...Array.from({ length: 10 }, () => "Compendium.dnd5e.items.WFQS2vT8ddrFjTJg"),

        // Little Bag of Sand
        "Compendium.dnd5e.items.iOMRrzfzFCfPGuD6",

        // Small Knife
        "Compendium.dnd5e.items.3nVvaHVfHsgwGlkL",
      ],
    },
  },
};

export default function itemPackOptions(itemPackNames = Object.keys(itemPacks)) {
  const result = [];
  for (const name of itemPackNames) {
    if (itemPacks[name.toLowerCase()]) result.push(itemPacks[name]);
  }

  return result;
}
