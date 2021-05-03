const RACES = {
  dwarf: {
    name: "Dwarf",
    speed: 25,
    ability_bonuses: [
      {
        ability_score: {
          name: "CON",
          url: "/api/ability-scores/con",
        },
        bonus: 2,
      },
    ],
    alignment:
      "Most dwarves are lawful, believing firmly in the benefits of a well-ordered society. They tend toward good as well, with a strong sense of fair play and a belief that everyone deserves to share in the benefits of a just order.",
    age:
      "Dwarves mature at the same rate as humans, but they're considered young until they reach the age of 50. On average, they live about 350 years.",
    size: "Medium",
    size_description:
      "Dwarves stand between 4 and 5 feet tall and average about 150 pounds. Your size is Medium.",
    starting_proficiencies: [
      {
        name: "Battleaxes",
        url: "/api/proficiencies/battleaxes",
      },
      {
        name: "Handaxes",
        url: "/api/proficiencies/handaxes",
      },
      {
        name: "Light hammers",
        url: "/api/proficiencies/light-hammers",
      },
      {
        name: "Warhammers",
        url: "/api/proficiencies/warhammers",
      },
    ],
    starting_proficiency_options: {
      from: [
        {
          name: "Smith's tools",
          url: "/api/proficiencies/smiths-tools",
        },
        {
          name: "Brewer's supplies",
          url: "/api/proficiencies/brewers-supplies",
        },
        {
          name: "Mason's tools",
          url: "/api/proficiencies/masons-tools",
        },
      ],
      choose: 1,
      type: "proficiencies",
    },
    languages: [
      {
        name: "Common",
        url: "/api/languages/common",
      },
      {
        name: "Dwarvish",
        url: "/api/languages/dwarvish",
      },
    ],
    language_desc:
      "You can speak, read, and write Common and Dwarvish. Dwarvish is full of hard consonants and guttural sounds, and those characteristics spill over into whatever other language a dwarf might speak.",
    traits: [
      {
        name: "Darkvision",
        url: "/api/traits/darkvision",
      },
      {
        name: "Dwarven Resilience",
        url: "/api/traits/dwarven-resilience",
      },
      {
        name: "Stonecunning",
        url: "/api/traits/stonecunning",
      },
      {
        name: "Dwarven Combat Training",
        url: "/api/traits/dwarven-combat-training",
      },
      {
        name: "Tool Proficiency",
        url: "/api/traits/tool-proficiency",
      },
    ],
    subraces: [
      {
        name: "Hill Dwarf",
        url: "/api/subraces/hill-dwarf",
      },
    ],
    url: "/api/races/dwarf",
  },
};

export default RACES;
