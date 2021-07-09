<script>
  import AbilityAbbreviations from "data/abilityAbbreviations.js";
  import { capitalize } from "utils/utils.js";
  import { mergeWith, countBy } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";

  import ItemCard from "components/ItemCard.svelte";
  import ItemGrid from "components/ItemGrid.svelte";

  export let data = {};
  export let closeWindow = () => {};

  function dataReducer(acc, cur) {
    return mergeWith(
      {},
      acc,
      data[cur].data,
      ...Object.values(data[cur].decisionData).flat(),
      mergeCustomizer
    );
  }

  let mergeData = {};

  $: mergeData = Object.keys(data).reduce(dataReducer, {});

  async function createCharacter(event) {
    event.preventDefault();

    const actor = await Actor.create({
      name: "New Test Actor",
      type: "character",
      img: "icons/svg/mystery-man.svg",
      sort: 12000,
      data: {},
      token: {},
      items: [],
      flags: {},
    });

    let actorData = {};

    if (mergeData.abilities) {
      for (const [ability, value] of Object.entries(mergeData.abilities)) {
        actorData[`data.abilities.${ability}.value`] = value;
      }
    }

    if (mergeData.save_proficiencies) {
      for (const ability of mergeData.save_proficiencies) {
        actorData[`data.abilities.${ability}.proficient`] = 1;
      }
    }

    if (mergeData.speed) actorData["data.attributes.movement.walk"] = mergeData.speed;

    if (mergeData.size) actorData["data.traits.size"] = mergeData.size;

    if (mergeData.item - grid) actorData["data.details.race"] = mergeData.race;

    if (mergeData.name) actorData["name"] = mergeData.name;

    if (mergeData.profileImage) actorData["img"] = mergeData.profileImage;

    if (mergeData.tokenImage) actorData["token.img"] = mergeData.tokenImage;

    if (mergeData.alignment) actorData["data.details.alignment"] = mergeData.alignment;

    if (mergeData.appearance) actorData["data.details.appearance"] = mergeData.appearance;

    if (mergeData?.token?.dimSight) actorData["token.dimSight"] = mergeData.token.dimSight;

    if (mergeData.languages) actorData["data.traits.languages.value"] = mergeData.languages;

    if (mergeData.currency) actorData["data.currency"] = mergeData.currency;

    if (mergeData.personality) actorData["data.details.trait"] = mergeData.personality.join("\n");

    if (mergeData.ideal) actorData["data.details.ideal"] = mergeData.ideal.join("\n");

    if (mergeData.bond) actorData["data.details.bond"] = mergeData.bond.join("\n");

    if (mergeData.flaw) actorData["data.details.flaw"] = mergeData.flaw.join("\n");

    if (mergeData.weapon_proficiencies) {
      const weaponCategories = ["mar", "sim"];

      let value = [];
      let custom = [];

      for (const weaponProf of mergeData.weapon_proficiencies) {
        if (weaponCategories.indexOf(weaponProf) > -1) {
          value.push(weaponProf);
        } else {
          custom.push(weaponProf);
        }
      }
      actorData["data.traits.weaponProf.value"] = value;
      actorData["data.traits.weaponProf.custom"] = custom
        .map((weaponProf) => capitalize(weaponProf))
        .join(";");
    }

    if (mergeData.armor_proficiencies) {
      const armorCategories = ["lgt", "med", "hvy", "shl"];

      let value = [];
      let custom = [];

      for (const armorProf of mergeData.armor_proficiencies) {
        if (armorCategories.indexOf(armorProf) > -1) {
          value.push(armorProf);
        } else {
          custom.push(armorProf);
        }
      }
      actorData["data.traits.armorProf.value"] = value;
      actorData["data.traits.armorProf.custom"] = custom
        .map((armorProf) => capitalize(armorProf))
        .join(";");
    }

    if (mergeData.tool_proficiencies) {
      const toolCategories = [
        "art",
        "disg",
        "forg",
        "game",
        "herb",
        "music",
        "navg",
        "pois",
        "thief",
        "vehicle",
      ];

      let value = [];
      let custom = [];

      for (const toolProf of mergeData.tool_proficiencies) {
        if (toolCategories.indexOf(toolProf) > -1) {
          value.push(toolProf);
        } else {
          custom.push(toolProf);
        }
      }
      actorData["data.traits.toolProf.value"] = value;
      actorData["data.traits.toolProf.custom"] = custom
        .map((toolProf) => capitalize(toolProf))
        .join(";");
    }

    if (mergeData.skill_proficiencies) {
      for (const skill of mergeData.skill_proficiencies) {
        actorData[`data.skills.${skill}.value`] = 1;
      }
    }

    await actor.update(actorData);
    if (mergeData.items) {
      const itemUuids = mergeData.items.concat(mergeData.features);
      const quantities = countBy(itemUuids);
      const items = await Promise.all(Object.keys(quantities).map((uuid) => fromUuid(uuid)));

      const itemObjects = [];
      items.forEach((item) => {
        const itemObj = item.toObject();
        itemObj.data.quantity = quantities[item.uuid];
        itemObjects.push(itemObj);
      });

      await game.dnd5e.entities.Item5e.createDocuments(itemObjects, { parent: actor });
    }

    closeWindow();
  }
</script>

<div class="review-tab">
  <h2>Ability Scores</h2>
  <div class="ability-score-row">
    {#each Object.entries(mergeData.abilities) as [ability, value]}
      <div class="ability-score">
        <div class="label">{AbilityAbbreviations[ability]}</div>
        <div class="value-bar">
          <div class="value">{value}</div>
        </div>
        {#if value && value >= 10}
          <div class="modifier">{`+ ${Math.abs(Math.floor((value - 10) / 2))}`}</div>
        {/if}
        {#if value && value < 10}
          <div class="modifier">{`- ${Math.abs(Math.floor((value - 10) / 2))}`}</div>
        {/if}
      </div>
    {/each}
  </div>

  <h2>Race</h2>
  <div class="section">
    {#if data.subrace?.uuid}
      <ItemGrid
        uuidList={[data.race.uuid, data.subrace.uuid]}
        selectable={false}
        showQuantities={false}
      />
    {:else if data.race?.uuid}
      <ItemGrid uuidList={[data.race.uuid]} selectable={false} showQuantities={false} />
    {/if}
  </div>

  <h2>Class</h2>
  <div class="section">
    {#if data.class?.uuid}
      <ItemGrid uuidList={[data.class.uuid]} selectable={false} showQuantities={false} />
    {/if}
  </div>

  <h2>Background</h2>
  <div class="section">
    {#if data.background?.uuid}
      <ItemGrid uuidList={[data.background?.uuid]} selectable={false} showQuantities={false} />
    {/if}
  </div>

  <h2>Equipment</h2>
  <div class="section">
    <ItemGrid uuidList={mergeData.items} selectable={false} />
  </div>

  <h2>Features</h2>
  <div class="section">
    <ItemGrid
      uuidList={mergeData.features.filter(
        (uuid) => uuid !== data.race?.uuid && uuid !== data.subrace?.uuid
      )}
      selectable={false}
      showQuantities={false}
    />
  </div>

  <h2>Spells</h2>
  <div class="section">
    <ItemGrid uuidList={mergeData.spells} selectable={false} showQuantities={false} />
  </div>

  <footer>
    <button type="submit" name="Apply Updates" on:click={createCharacter}>
      <i class="far fa-save" />Apply Updates
    </button>
  </footer>
</div>

<style>
  .section {
    margin-bottom: 1em;
  }

  .ability-score {
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    text-align: center;
    border: 2px groove #eeede0;
    border-radius: 2px;
    padding: 0.5rem 0;
    margin: 0;
  }

  .ability-score-row {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(6, 1fr);
  }

  .label {
    font-size: 24px;
    font-weight: 600;
  }

  .value-bar {
    display: flex;
    justify-content: center;
  }

  .value {
    font-size: 28px;
    padding: 0 0.25rem;
  }

  .modifier {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
</style>
