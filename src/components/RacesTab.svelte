<script>
  import RACES from "data/races.js";
  import Item from "components/Item.svelte";
  import Choice from "components/Choice.svelte";
  import { mergeWith } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";

  export let selectedRaceData = {};

  let selectedRaceUuid = "";
  let selectedSubraceUuid = "";
  $: if (selectedRaceUuid === "") selectedSubraceUuid = "";
  $: if (selectedRaceUuid.length)
    selectedRaceData = mergeWith(
      {},
      RACES[selectedRaceUuid].data,
      ...raceDecisions,
      mergeCustomizer
    );
  $: if (selectedRaceUuid.length && selectedSubraceUuid in RACES[selectedRaceUuid].subraces)
    selectedRaceData = mergeWith(
      {},
      RACES[selectedRaceUuid].data,
      RACES[selectedRaceUuid].subraces[selectedSubraceUuid].data,
      ...raceDecisions,
      ...subraceDecisions,
      mergeCustomizer
    );

  let raceChoices = [];
  let subraceChoices = [];
  $: raceChoices = RACES?.[selectedRaceUuid]?.choices;
  $: subraceChoices = RACES?.[selectedRaceUuid]?.subraces?.[selectedSubraceUuid]?.choices;

  let raceDecisions = [];
  let subraceDecisions = [];
  $: if (raceChoices)
    raceDecisions = raceChoices.map(() => {
      return {};
    });
  $: if (subraceChoices)
    subraceDecisions = subraceChoices.map(() => {
      return {};
    });
</script>

<div>
  <h2>Races</h2>
  <label>
    <b>Select Race:</b>
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

  {#if raceChoices}
    {#each raceChoices as choice, i}
      <Choice
        {choice}
        on:decision={(event) => {
          raceDecisions[i] = event.detail.data;
        }}
      />
    {/each}
  {/if}

  {#if selectedRaceUuid.length && Object.keys(RACES[selectedRaceUuid].subraces).length}
    <h2>Subrace</h2>
    <label>
      <b>Select Subrace:</b>
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

{#if subraceChoices}
  {#each subraceChoices as choice, i}
    <Choice
      {choice}
      on:decision={(event) => {
        subraceDecisions[i] = event.detail.data;
      }}
    />
  {/each}
{/if}

<style>
  .item {
    margin-top: 10px;
  }
</style>
