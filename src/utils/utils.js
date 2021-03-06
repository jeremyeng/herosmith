import { isArray } from "lodash";

export function mergeCustomizer(objValue, srcValue, key) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }

  if (["str", "dex", "con", "int", "wis", "cha"].includes(key)) {
    return (objValue || 0) + (srcValue || 0);
  }
}

export function capitalize(text) {
  return text
    .toLowerCase()
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
}
function nameIntersection(arr1, arr2, arr3) {
  return arr1
    .filter((a) => arr2.some((b) => a.name === b.name))
    .filter((a) => arr3.some((b) => a.name === b.name));
}

export async function generateClassSpells(spellsList) {
  const result = {};
  const classes = [
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "wizard",
    "warlock",
  ];
  for (const klass of classes) {
    result[klass] = {};

    const klassSpellResponse = await fetch(`https://www.dnd5eapi.co/api/classes/${klass}/spells`);
    const klassSpells = await klassSpellResponse.json();

    for (let level = 0; level < 10; level++) {
      const levelSpellResponse = await fetch(`https://www.dnd5eapi.co/api/spells?level=${level}`);
      const levelSpells = await levelSpellResponse.json();

      const klassLevelSpellIds = nameIntersection(
        spellsList,
        klassSpells.results,
        levelSpells.results
      ).map((x) => x._id);

      result[klass][level] = klassLevelSpellIds.map((id) => `Compendium.dnd5e.spells.${id}`);
    }
  }

  return result;
}
