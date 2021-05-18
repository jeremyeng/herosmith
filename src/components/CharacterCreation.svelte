<script>
  import RacesTab from "components/RacesTab.svelte";
  import ReviewTab from "components/ReviewTab.svelte";
  import { capitalize } from "utils/utils.js";
  import { merge } from "lodash";

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
  };

  let tabs = ["Races", "Review"];
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
    const selectedRaceData = merge(
      {},
      data.race.data,
      data.subrace.data,
      ...Object.values(data.race.decisionData).flat(),
      ...Object.values(data.subrace.decisionData).flat()
    );
    debugger;

    if (selectedRaceData.abilities) {
      for (const [ability, increase] of Object.entries(selectedRaceData.abilities)) {
        actorData[`data.abilities.${ability}.value`] =
          actor.data.data.abilities[ability].value + increase;
      }
    }

    if (selectedRaceData.speed) actorData["data.attributes.movement.walk"] = selectedRaceData.speed;

    if (selectedRaceData.size) actorData["data.traits.size"] = selectedRaceData.size;

    if (selectedRaceData.name) actorData["data.details.race"] = selectedRaceData.name;

    if (selectedRaceData.languages)
      actorData["data.traits.languages.value"] = selectedRaceData.languages;

    if (selectedRaceData.weapon_proficiences) {
      actorData["data.traits.weaponProf.custom"] = selectedRaceData.weapon_proficiences
        .map((weaponProf) => capitalize(weaponProf))
        .join(";");
    }

    if (selectedRaceData.tool_proficiencies) {
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

      for (const toolProf of selectedRaceData.tool_proficiencies) {
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

    await actor.update(actorData);

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
