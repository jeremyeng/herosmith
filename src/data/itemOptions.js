import { get } from "lodash";
const items = {
  weapons: {
    melee: {
      martial: {
        battleaxe: {
          name: "Battleaxe",
          data: {
            items: ["Compendium.dnd5e.items.I0WocDSuNpGJayPb"],
          },
        },
        flail: {
          name: "Flail",
          data: {
            items: ["Compendium.dnd5e.items.UrH3sMdnUDckIHJ6"],
          },
        },
        glaive: {
          name: "Glaive",
          data: {
            items: ["Compendium.dnd5e.items.rOG1OM2ihgPjOvFW"],
          },
        },
        greataxe: {
          name: "Greataxe",
          data: {
            items: ["Compendium.dnd5e.items.1Lxk6kmoRhG8qQ0u"],
          },
        },
        greatsword: {
          name: "Greatsword",
          data: {
            items: ["Compendium.dnd5e.items.xMkP8BmFzElcsMaR"],
          },
        },
        halberd: {
          name: "Halberd",
          data: {
            items: ["Compendium.dnd5e.items.DMejWAc8r8YvDPP1"],
          },
        },
        lance: {
          name: "Lance",
          data: {
            items: ["Compendium.dnd5e.items.RnuxdHUAIgxccVwj"],
          },
        },
        longsword: {
          name: "Longsword",
          data: {
            items: ["Compendium.dnd5e.items.10ZP2Bu3vnCuYMIB"],
          },
        },
        maul: {
          name: "Maul",
          data: {
            items: ["Compendium.dnd5e.items.DizirD7eqjh8n95A"],
          },
        },
        morningstar: {
          name: "Morningstar",
          data: {
            items: ["Compendium.dnd5e.items.dX8AxCh9o0A9CkT3"],
          },
        },
        pike: {
          name: "Pike",
          data: {
            items: ["Compendium.dnd5e.items.tC0kcqZT9HHAO0PD"],
          },
        },
        rapier: {
          name: "Rapier",
          data: {
            items: ["Compendium.dnd5e.items.Tobce1hexTnDk4sV"],
          },
        },
        scimitar: {
          name: "Scimitar",
          data: {
            items: ["Compendium.dnd5e.items.fbC0Mg1a73wdFbqO"],
          },
        },
        shortsword: {
          name: "Shortsword",
          data: {
            items: ["Compendium.dnd5e.items.osLzOwQdPtrK3rQH"],
          },
        },
        trident: {
          name: "Trident",
          data: {
            items: ["Compendium.dnd5e.items.F65ANO66ckP8FDMa"],
          },
        },
        warpick: {
          name: "War Pick",
          data: {
            items: ["Compendium.dnd5e.items.2YdfjN1PIIrSHZii"],
          },
        },
        warhammer: {
          name: "Warhammer",
          data: {
            items: ["Compendium.dnd5e.items.F0Df164Xv1gWcYt0"],
          },
        },
        whip: {
          name: "Whip",
          data: {
            items: ["Compendium.dnd5e.items.QKTyxoO0YDnAsbYe"],
          },
        },
      },
      simple: {
        dagger: {
          name: "Dagger",
          data: {
            items: ["Compendium.dnd5e.items.0E565kQUBmndJ1a2"],
          },
        },
        mace: {
          name: "Mace",
          data: {
            items: ["Compendium.dnd5e.items.Ajyq6nGwF7FtLhDQ"],
          },
        },
        javelin: {
          name: "Javelin",
          data: {
            items: ["Compendium.dnd5e.items.DWLMnODrnHn8IbAG"],
          },
        },
        spear: {
          name: "Spear",
          data: {
            items: ["Compendium.dnd5e.items.OG4nBBydvmfWYXIk"],
          },
        },
        greatclub: {
          name: "Greatclub",
          data: {
            items: ["Compendium.dnd5e.items.QRCsxkCwWNwswL9o"],
          },
        },
        lighthammer: {
          name: "Light Hammer",
          data: {
            items: ["Compendium.dnd5e.items.XVK6TOL4sGItssAE"],
          },
        },
        handaxe: {
          name: "Handaxe",
          data: {
            items: ["Compendium.dnd5e.items.eO7Fbv5WBk5zvGOc"],
          },
        },
        quarterstaff: {
          name: "Quarterstaff",
          data: {
            items: ["Compendium.dnd5e.items.g2dWN7PQiMRYWzyk"],
          },
        },
        sickle: {
          name: "Sickle",
          data: {
            items: ["Compendium.dnd5e.items.i4NeNZ30ycwPDHMx"],
          },
        },
        club: {
          name: "Club",
          data: {
            items: ["Compendium.dnd5e.items.nfIRTECQIG81CvM4"],
          },
        },
      },
    },
    ranged: {
      martial: {
        handcrossbow: {
          name: "Hand Crossbow",
          data: {
            items: ["Compendium.dnd5e.items.qaSro7kFhxD6INbZ"],
          },
        },
        heavycrossbow: {
          name: "Heavy Crossbow",
          data: {
            items: ["Compendium.dnd5e.items.RmP0mYRn2J7K26rX"],
          },
        },
        longbow: {
          name: "Longbow",
          data: {
            items: ["Compendium.dnd5e.items.3cymOVja8jXbzrdT"],
          },
        },
        blowgun: {
          name: "Blowgun",
          data: {
            items: ["Compendium.dnd5e.items.wNWK6yJMHG9ANqQV"],
          },
        },
        net: {
          name: "Net",
          data: {
            items: ["Compendium.dnd5e.items.aEiM49V8vWpWw7rU"],
          },
        },
      },
      simple: {
        sling: {
          name: "Sling",
          data: {
            items: ["Compendium.dnd5e.items.3gynWO9sN4OLGMWD"],
          },
        },
        dart: {
          name: "Dart",
          data: {
            items: ["Compendium.dnd5e.items.3rCO8MTIdPGSW6IJ"],
          },
        },
        shortbow: {
          name: "Shortbow",
          data: {
            items: ["Compendium.dnd5e.items.GJv6WkD7D2J6rP6M"],
          },
        },
        lightcrossbow: {
          name: "Light Crossbow",
          data: {
            items: ["Compendium.dnd5e.items.ddWvQRLmnnIS0eLF"],
          },
        },
      },
    },
  },
  armor: {
    light: {
      paddedarmor: {
        name: "Padded Armor",
        data: {
          items: ["Compendium.dnd5e.items.GtKV1b5uqFQqpEni"],
        },
      },
      leatherarmor: {
        name: "Leather Armor",
        data: {
          items: ["Compendium.dnd5e.items.WwdpHLXGX5r8uZu5"],
        },
      },
      studdedleatherarmor: {
        name: "Studded Leather Armor",
        data: {
          items: ["Compendium.dnd5e.items.TIV3B1vbrVHIhQAm"],
        },
      },
    },
    medium: {
      breastplate: {
        name: "Breastplate",
        data: {
          items: ["Compendium.dnd5e.items.SK2HATQ4abKUlV8i"],
        },
      },
      scalemail: {
        name: "Scale Mail",
        data: {
          items: ["Compendium.dnd5e.items.XmnlF5fgIO3tg6TG"],
        },
      },
      hidearmor: {
        name: "Hide Armor",
        data: {
          items: ["Compendium.dnd5e.items.n1V07puo0RQxPGuF"],
        },
      },
      chainshirt: {
        name: "Chain Shirt",
        data: {
          items: ["Compendium.dnd5e.items.p2zChy24ZJdVqMSH"],
        },
      },
      halfplatearmor: {
        name: "Half Plate Armor",
        data: {
          items: ["Compendium.dnd5e.items.vsgmACFYINloIdPm"],
        },
      },
    },
    heavy: {
      platearmor: {
        name: "Plate Armor",
        data: {
          items: ["Compendium.dnd5e.items.OjkIqlW2UpgFcjZa"],
        },
      },
      splintarmor: {
        name: "Splint Armor",
        data: {
          items: ["Compendium.dnd5e.items.cKpJmsJmU8YaiuqG"],
        },
      },
      ringmail: {
        name: "Ring Mail",
        data: {
          items: ["Compendium.dnd5e.items.nsXZejlmgalj4he9"],
        },
      },
      chainmail: {
        name: "Chain Mail",
        data: {
          items: ["Compendium.dnd5e.items.rLMflzmxpe8JGTOA"],
        },
      },
    },
    shield: {
      name: "Shield",
      data: {
        items: ["Compendium.dnd5e.items.sSs3hSzkKBMNBgTs"],
      },
    },
  },
  tools: {
    instruments: {
      drum: {
        name: "Drum",
        data: {
          items: ["Compendium.dnd5e.items.69Dpr25pf4BjkHKb"],
        },
      },
      lyre: {
        name: "Lyre",
        data: {
          items: ["Compendium.dnd5e.items.EwG1EtmbgR3bM68U"],
        },
      },
      shawm: {
        name: "Shawm",
        data: {
          items: ["Compendium.dnd5e.items.G3cqbejJpfB91VhP"],
        },
      },
      panflute: {
        name: "Pan Flute",
        data: {
          items: ["Compendium.dnd5e.items.G5m5gYIx9VAUWC3J"],
        },
      },
      dulcimer: {
        name: "Dulcimer",
        data: {
          items: ["Compendium.dnd5e.items.NtdDkjmpdIMiX7I2"],
        },
      },
      horn: {
        name: "Horn",
        data: {
          items: ["Compendium.dnd5e.items.aa9KuBy4dst7WIW9"],
        },
      },
      viol: {
        name: "Viol",
        data: {
          items: ["Compendium.dnd5e.items.baoe3U5BfMMMxhCU"],
        },
      },
      flute: {
        name: "Flute",
        data: {
          items: ["Compendium.dnd5e.items.eJOrPcAz9EcquyRQ"],
        },
      },
      lute: {
        name: "Lute",
        data: {
          items: ["Compendium.dnd5e.items.qBydtUUIkv520DT7"],
        },
      },
      bagpipes: {
        name: "Bagpipes",
        data: {
          items: ["Compendium.dnd5e.items.yxHi57T5mmVt0oDr"],
        },
      },
    },
  },
};

export default function itemOptions(path) {
  return get(items, path);
}
