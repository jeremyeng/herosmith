<script>
  import RACES from "data/races.js";
  import ItemCard from "components/ItemCard.svelte";
  import { mergeWith } from "lodash";
  import { mergeCustomizer } from "utils/utils.js";

  export let selectedRaceData = {};

  let selectedRaceUuid = "";
  let selectedSubraceUuid = "";
  $: if (selectedRaceUuid === "") selectedSubraceUuid = "";
  $: if (selectedRaceUuid.length)
    selectedRaceData = mergeWith({}, RACES[selectedRaceUuid].data, mergeCustomizer);
  $: if (selectedRaceUuid.length && selectedSubraceUuid in RACES[selectedRaceUuid].subraces)
    selectedRaceData = mergeWith(
      {},
      RACES[selectedRaceUuid].data,
      RACES[selectedRaceUuid].subraces[selectedSubraceUuid].data,
      mergeCustomizer
    );
  $: console.log(selectedRaceUuid);
</script>

<div>
  <h2>Race</h2>
  <div class="races">
    {#each Object.keys(RACES) as raceUuid}
      {#await fromUuid(raceUuid) then raceItem}
        <ItemCard
          item={raceItem}
          disabled={selectedRaceUuid.length && raceUuid !== selectedRaceUuid}
          on:selected={() => {
            if (selectedRaceUuid === raceUuid) {
              selectedRaceUuid = "";
            } else {
              selectedRaceUuid = raceUuid;
            }
          }}
        />
      {/await}
    {/each}
  </div>

  {#if selectedRaceUuid.length && Object.keys(RACES[selectedRaceUuid].subraces).length}
    <h2 class="subrace-header">Subrace</h2>
    <div class="races">
      {#each Object.keys(RACES[selectedRaceUuid].subraces) as subraceUuid}
        {#await fromUuid(subraceUuid) then subraceItem}
          <ItemCard
            item={subraceItem}
            disabled={selectedSubraceUuid.length && subraceUuid !== selectedSubraceUuid}
            on:selected={() => {
              if (selectedSubraceUuid === subraceUuid) {
                selectedSubraceUuid = "";
              } else {
                selectedSubraceUuid = subraceUuid;
              }
            }}
          />
        {/await}
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
