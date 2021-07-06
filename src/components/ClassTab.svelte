<script>
  import CLASSES from "data/classes.js";
  import Choice from "components/Choice.svelte";
  import ItemCard from "components/ItemCard.svelte";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let data = {};
  export let level = 1;
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
            data.classEquipment = {
              data: {},
              decisionData: {},
            };
            data.spells = {
              data: {},
              decisionData: {},
            };
          } else {
            data.class = {
              uuid: classUuid,
              data: CLASSES[classUuid]["data"][level],
              decisionData: {},
            };
          }
        }}
      />
    {/each}
  </div>

  {#if CLASSES[data.class.uuid]?.["choices"]?.[level]}
    <div class="choices" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
      {#each CLASSES[data.class.uuid]["choices"][level] as choice, i}
        <Choice {choice} bind:data={data.class.decisionData[i]} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .classes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
