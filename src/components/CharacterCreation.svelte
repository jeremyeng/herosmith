<script>
  import RacesTab from "components/RacesTab.svelte";
  import ClassTab from "components/ClassTab.svelte";
  import BackgroundTab from "components/BackgroundTab.svelte";
  import ReviewTab from "components/ReviewTab.svelte";
  import { capitalize } from "utils/utils.js";
  import { mergeWith } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";

  export let closeWindow;

  let data = {
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
    background: {
      uuid: "",
      data: {},
      decisionData: {},
      personality: [],
      ideal: [],
      bond: [],
      flaw: [],
    },
  };

  let tabs = ["Races", "Class", "Background", "Review"];
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
    const mergeData = mergeWith(
      {},
      data.race.data,
      data.subrace.data,
      data.class.data,
      ...Object.values(data.race.decisionData).flat(),
      ...Object.values(data.subrace.decisionData).flat(),
      ...Object.values(data.class.decisionData).flat(),
      mergeCustomizer
    );

    if (mergeData.abilities) {
      for (const [ability, increase] of Object.entries(mergeData.abilities)) {
        actorData[`data.abilities.${ability}.value`] =
          actor.data.data.abilities[ability].value + increase;
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
      const itemsToAdd = await Promise.all(itemUuids.map((uuid) => fromUuid(uuid)));
      await actor.addEmbeddedItems(itemsToAdd, (prompt = false));
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

  {#if currentTab === "Background"}
    <BackgroundTab bind:data />
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
