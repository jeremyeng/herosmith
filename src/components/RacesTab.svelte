<script>
  import RACES from "data/races.js";
  import ItemCard from "components/ItemCard.svelte";
  import Choice from "components/Choice.svelte";
  import { mergeWith } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";
  import { fade } from "svelte/transition";
  import { sineOut } from "svelte/easing";
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
      <ItemCard
        uuid={raceUuid}
        disabled={raceUuid !== data.race.uuid && data.race.uuid.length}
        selected={raceUuid === data.race.uuid}
        on:selected={() => {
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
            data.race.uuid = raceUuid;
          }
        }}
      />
    {/each}
  </div>

  {#if RACES?.[data.race.uuid]?.choices}
    <div class="choices" transition:fade|local={{ duration: 200, easing: sineOut }}>
      {#each RACES?.[data.race.uuid]?.choices as choice, i}
        <Choice {choice} bind:data={data.race.decisionData[i]} />
      {/each}
    </div>
  {/if}

  {#if data.race.uuid.length && Object.keys(RACES[data.race.uuid].subraces).length}
    <div class="subrace" transition:fade|local={{ duration: 200, easing: sineOut }}>
      <h2 class="subrace-header">Subrace</h2>
      <div class="races">
        {#each Object.keys(RACES[data.race.uuid].subraces) as subraceUuid}
          <ItemCard
            uuid={subraceUuid}
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
        {/each}
      </div>
    </div>
  {/if}

  {#if RACES?.[data.race.uuid]?.subraces?.[data.subrace.uuid]?.choices}
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
    grid-gap: 0.5em;
  }
</style>
