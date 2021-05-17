<script>
  import RACES from "data/races.js";
  import ItemCard from "components/ItemCard.svelte";
  import Choice from "components/Choice.svelte";
  import { mergeWith } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";

  export let data = {};

  $: if (data.race.uuid.length && data.subrace.uuid in RACES[data.race.uuid].subraces) {
    data.race.data = mergeWith(
      {},
      RACES[data.race.uuid].data,
      RACES[data.race.uuid].subraces[data.subrace.uuid].data,
      mergeCustomizer
    );
  } else if (data.race.uuid.length) {
    data.race.data = mergeWith({}, RACES[data.race.uuid].data, mergeCustomizer);
  } else {
    data.subrace.uuid = "";
  }
</script>

<div>
  <h2>Race</h2>
  <div class="races">
    {#each Object.keys(RACES) as raceUuid}
      {#await fromUuid(raceUuid) then raceItem}
        <ItemCard
          item={raceItem}
          disabled={raceUuid !== data.race.uuid && data.race.uuid.length}
          selected={raceUuid === data.race.uuid}
          on:selected={() => {
            if (data.race.uuid === raceUuid) {
              data.race = {
                uuid: "",
                data: {},
                decisionData: {},
              };
            } else {
              data.race.uuid = raceUuid;
            }
          }}
        />
      {/await}
    {/each}
  </div>

  {#if RACES?.[data.race.uuid]?.choices}
    {#each RACES?.[data.race.uuid]?.choices as choice, i}
      <Choice {choice} bind:data={data.race.decisionData[i]} />
    {/each}
  {/if}

  {#if data.race.uuid.length && Object.keys(RACES[data.race.uuid].subraces).length}
    <h2 class="subrace-header">Subrace</h2>
    <div class="races">
      {#each Object.keys(RACES[data.race.uuid].subraces) as subraceUuid}
        {#await fromUuid(subraceUuid) then subraceItem}
          <ItemCard
            item={subraceItem}
            disabled={subraceUuid !== data.subrace.uuid && data.subrace.uuid.length}
            selected={subraceUuid === data.subrace.uuid}
            on:selected={() => {
              if (data.subrace.uuid === subraceUuid) {
                data.subrace = {
                  uuid: "",
                  data: {},
                  decisionData: {},
                };
              } else {
                data.subrace.uuid = subraceUuid;
              }
            }}
          />
        {/await}
      {/each}
    </div>
  {/if}

  {#if RACES?.[data.race.uuid]?.subraces?.[data.subrace.uuid]?.choices}
    <div class="choices">
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
    grid-gap: 0.5em;
  }
</style>
