<script>
  import CLASSES from "data/classes.js";
  import ItemCard from "components/ItemCard.svelte";

  export let data = {};
</script>

<div class="class-tab">
  <h2>Classes</h2>
  <div class="classes">
    {#each Object.keys(CLASSES) as classUuid}
      <ItemCard
        uuid={classUuid}
        disabled={classUuid !== data.class.uuid && data.class.uuid.length}
        selected={classUuid === data.class.uuid}
        on:selected={() => {
          if (data.class.uuid === classUuid) {
            data.class = {
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
            data.class = {
              uuid: classUuid,
              data: CLASSES[classUuid].data,
              decisionData: {},
            };
          }
        }}
      />
    {/each}
  </div>
</div>

<style>
  .classes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
