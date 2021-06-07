const itemPacks = {
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
};

export default function itemPackOptions(itemPackNames = Object.keys(itemPacks)) {
  const result = [];
  for (const name of itemPackNames) {
    if (itemPacks[name.toLowerCase()]) result.push(itemPacks[name]);
  }

  return result;
}
