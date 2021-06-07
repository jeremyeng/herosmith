<script>
  import RacesTab from "components/RacesTab.svelte";
  import ClassTab from "components/ClassTab.svelte";
  import BackgroundTab from "components/BackgroundTab.svelte";
  import ReviewTab from "components/ReviewTab.svelte";
  import AbilityScoreTab from "components/AbilityScoreTab.svelte";
  import EquipmentTab from "components/EquipmentTab.svelte";
  import { capitalize } from "utils/utils.js";
  import { mergeWith, countBy } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";

  export let closeWindow;

  let data = {
    abilities: {
      data: {
        abilities: {
          str: 8,
          con: 8,
          dex: 8,
          int: 8,
          wis: 8,
          cha: 8,
        },
      },
      mode: "pointbuy",
      pointBuyBudget: 27,
      rolledScores: [],
      availableScores: [],
      decisionData: {},
    },
    race: {
      uuid: "",
      data: {},
      decisionData: {},
    },
    subrace: {
      uuid: "",
      data: {},
      decisionData: {},
    },
    class: {
      uuid: "",
      data: {},
      decisionData: {},
    },
    equipment: {
      data: {},
      decisionData: {},
    },
    background: {
      uuid: "",
      data: {
        personality: [],
        ideal: [],
        bond: [],
        flaw: [],
      },
      decisionData: {},
    },
  };

  let tabs = ["Races", "Class", "Abilities", "Background", "Equipment", "Review"];
  let currentTab = "Races";

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

    function dataReducer(acc, cur) {
      console.log(cur);
      return mergeWith(
        {},
        acc,
        data[cur].data,
        ...Object.values(data[cur].decisionData).flat(),
        mergeCustomizer
      );
    }
    const mergeData = Object.keys(data).reduce(dataReducer, {});

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

    if (mergeData.name) actorData["data.details.race"] = mergeData.name;

    if (mergeData?.token?.dimSight) actorData["token.dimSight"] = mergeData.token.dimSight;

    if (mergeData.languages) actorData["data.traits.languages.value"] = mergeData.languages;

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

<div>
  <nav>
    {#each tabs as tab}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class:active={currentTab === tab} on:click={(event) => (currentTab = event.target.text)}
        >{tab}</a
      >
    {/each}
  </nav>

  {#if currentTab === "Races"}
    <RacesTab bind:data />
  {/if}

  {#if currentTab === "Class"}
    <ClassTab bind:data />
  {/if}

  {#if currentTab === "Abilities"}
    <AbilityScoreTab bind:data />
  {/if}

  {#if currentTab === "Background"}
    <BackgroundTab bind:data />
  {/if}

  {#if currentTab === "Equipment"}
    <EquipmentTab bind:data />
  {/if}

  {#if currentTab === "Review"}
    <ReviewTab handleApplyUpdates={createCharacter} />
  {/if}
</div>

<style>
  nav {
    display: flex;
    justify-content: space-evenly;
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  a:hover {
    text-shadow: 0 0 10px red;
  }

  .active {
    border-bottom: 3px solid #44191a;
    text-shadow: 0 0 10px red;
  }
</style>
