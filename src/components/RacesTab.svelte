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
  <h2>Race</h2>
  <section>
    <label for="race"><h3>Select Race</h3></label>
    <select id="race" bind:value={selectedRaceUuid}>
      <option value="" />
      {#each Object.keys(RACES) as raceUuid}
        {#await fromUuid(raceUuid) then raceItem}
          <option value={raceUuid}>{raceItem.name}</option>
        {/await}
      {/each}
    </select>

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
  </section>

  {#if selectedRaceUuid.length && Object.keys(RACES[selectedRaceUuid].subraces).length}
    <h2 class="subrace-header">Subrace</h2>
    <section>
      <label for="subrace"><h3>Select Subrace</h3></label>
      <select id="subrace" bind:value={selectedSubraceUuid}>
        <option value="" />
        {#each Object.keys(RACES[selectedRaceUuid].subraces) as subraceUuid}
          {#await fromUuid(subraceUuid) then subraceItem}
            <option value={subraceUuid}>{subraceItem.name}</option>
          {/await}
        {/each}
      </select>

      {#if selectedSubraceUuid in RACES[selectedRaceUuid].subraces}
        {#await fromUuid(selectedSubraceUuid) then subraceItem}
          <div class="item">
            <Item item={subraceItem} />
          </div>
        {/await}
      {/if}

      {#if subraceChoices}
        <div class="choices">
          {#each subraceChoices as choice, i}
            <Choice
              {choice}
              on:decision={(event) => {
                subraceDecisions[i] = event.detail.data;
              }}
            />
            {#if "items" in subraceDecisions[i]}
              {#each subraceDecisions[i].items as itemId}
                {#await fromUuid(itemId) then item}
                  <Item {item} />
                {/await}
              {/each}
            {/if}
          {/each}
        </div>
      {/if}
    </section>
  {/if}
</div>

<style>
  section {
    margin: 0 10px;
  }
  .item {
    margin-top: 10px;
  }
  .choices {
    display: grid;
    grid-template-columns: max-content;
    grid-gap: 10px;
  }

  .subrace-header {
    margin-top: 15px;
  }
</style>
