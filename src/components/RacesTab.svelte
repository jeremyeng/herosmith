<script>
  import RACES from "data/races.js";
  import Item from "components/Item.svelte";
  import { mergeWith, isArray } from "lodash";

  export let selectedRaceData = {};

  let selectedRaceUuid = "";
  let selectedSubraceUuid = "";

  $: if (selectedRaceUuid === "") selectedSubraceUuid = "";
  $: if (selectedRaceUuid.length)
    selectedRaceData = mergeWith({}, RACES[selectedRaceUuid].data, customizer);
  $: if (selectedRaceUuid.length && selectedSubraceUuid in RACES[selectedRaceUuid].subraces)
    selectedRaceData = mergeWith(
      {},
      RACES[selectedRaceUuid].data,
      RACES[selectedRaceUuid].subraces[selectedSubraceUuid].data,
      customizer
    );

  function customizer(objValue, srcValue) {
    if (isArray(objValue)) {
      return objValue.concat(srcValue);
    }
  }
</script>

<div>
  <h2>Races</h2>
  <label
    >Select Race:
    <select bind:value={selectedRaceUuid}>
      <option value="" />
      {#each Object.keys(RACES) as raceUuid}
        {#await fromUuid(raceUuid) then raceItem}
          <option value={raceUuid}>{raceItem.name}</option>
        {/await}
      {/each}
    </select>
  </label>

  {#if selectedRaceUuid in RACES}
    {#await fromUuid(selectedRaceUuid) then raceItem}
      <div class="item">
        <Item item={raceItem} />
      </div>
    {/await}
  {/if}

  {#if selectedRaceUuid.length && Object.keys(RACES[selectedRaceUuid].subraces).length}
    <h2>Subrace</h2>
    <label>
      Select Subrace:
      <select bind:value={selectedSubraceUuid}>
        <option value="" />
        {#each Object.keys(RACES[selectedRaceUuid].subraces) as subraceUuid}
          {#await fromUuid(subraceUuid) then subraceItem}
            <option value={subraceUuid}>{subraceItem.name}</option>
          {/await}
        {/each}
      </select>
    </label>
    {#if selectedSubraceUuid in RACES[selectedRaceUuid].subraces}
      {#await fromUuid(selectedSubraceUuid) then subraceItem}
        <div class="item">
          <Item item={subraceItem} />
        </div>
      {/await}
    {/if}
  {/if}
</div>

<style>
  .item {
    margin-top: 10px;
  }
</style>
