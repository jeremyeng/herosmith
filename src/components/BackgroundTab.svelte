<script>
  import BACKGROUNDS from "data/backgrounds.js";

  import ItemCard from "components/ItemCard.svelte";

  export let data;
  export let level = 1;
</script>

<div class="background-tab">
  <h2>Backgrounds</h2>
  <div class="backgrounds">
    {#each Object.keys(BACKGROUNDS) as bgUuid}
      <ItemCard
        uuid={bgUuid}
        disabled={bgUuid !== data.background.uuid && data.background.uuid.length}
        selected={bgUuid === data.background.uuid}
        on:selected={() => {
          if (data.background.uuid === bgUuid) {
            data.background = {
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
            data.background = {
              uuid: bgUuid,
              data: BACKGROUNDS[bgUuid]["data"][level],
              decisionData: {},
            };
          }
        }}
      />
    {/each}
  </div>

  <div class="personality" />
</div>

<style>
  .backgrounds {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
