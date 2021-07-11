<script>
  import RACES from "data/races.js";
  import ItemGrid from "components/ItemGrid.svelte";
  import Choice from "components/Choice.svelte";
  import { fade } from "svelte/transition";
  import { sineOut } from "svelte/easing";

  export let data = {};

  function onSelectRace(event) {
    const raceUuid = event.detail.uuid;
    if (data.race.uuid === raceUuid) {
      data.race = {
        uuid: "",
        data: {},
        decisionData: {},
      };
      data.subrace = {
        uuid: "",
        data: {},
        decisionData: {},
      };
    } else {
      data.race = {
        uuid: raceUuid,
        data: RACES[raceUuid].data,
        decisionData: {},
      };
    }
  }

  function onSelectSubrace(event) {
    const subraceUuid = event.detail.uuid;
    if (data.subrace.uuid === subraceUuid) {
      data.subrace = {
        uuid: "",
        data: {},
        decisionData: {},
      };
    } else {
      data.subrace = {
        uuid: subraceUuid,
        data: RACES[data.race.uuid].subraces[subraceUuid].data,
        decisionData: {},
      };
    }
  }
</script>

<div>
  <h2>Race</h2>
  <ItemGrid
    uuids={Object.keys(RACES)}
    selectedUuids={data.race.uuid ? [data.race.uuid] : []}
    maxSelectable={1}
    selectable={true}
    showQuantities={false}
    on:selected={onSelectRace}
  />

  {#if RACES[data.race.uuid]?.choices}
    <div class="choices" transition:fade|local={{ duration: 200, easing: sineOut }}>
      {#each RACES?.[data.race.uuid]?.choices as choice, i}
        <Choice {choice} bind:data={data.race.decisionData[i]} />
      {/each}
    </div>
  {/if}

  {#if RACES[data.race.uuid]?.subraces}
    <div class="subrace" transition:fade|local={{ duration: 200, easing: sineOut }}>
      <h2 class="subrace-header">Subrace</h2>
      <ItemGrid
        uuids={Object.keys(RACES[data.race.uuid].subraces)}
        selectedUuids={data.subrace.uuid ? [data.subrace.uuid] : []}
        maxSelectable={1}
        selectable={true}
        showQuantities={false}
        on:selected={onSelectSubrace}
      />
    </div>
  {/if}

  {#if RACES[data.race.uuid]?.subraces?.[data.subrace.uuid]?.choices}
    <div class="choices" transition:fade|local={{ duration: 200, easing: sineOut }}>
      {#each RACES?.[data.race.uuid]?.subraces?.[data.subrace.uuid]?.choices as choice, i}
        <Choice {choice} bind:data={data.subrace.decisionData[i]} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .subrace-header {
    margin-top: 15px;
  }

  .races {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
