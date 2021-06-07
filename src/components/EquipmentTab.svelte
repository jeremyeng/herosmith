<script>
  import Choice from "components/Choice.svelte";
  import CLASSES from "data/classes.js";
  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let data;
  export let level = 1;
</script>

<div class="equipment-tab">
  <h2>Class Equipment</h2>
  {#if CLASSES[data.class.uuid]?.equipment?.[level]?.["choices"]}
    <div class="choices" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
      {#each CLASSES[data.class.uuid]["equipment"][level]["choices"] as choice, i}
        <Choice {choice} bind:data={data.equipment.decisionData[i]} />
      {/each}
    </div>
  {/if}
  <h2>Background Equipment</h2>
</div>

<style>
  .error {
    color: red;
  }
</style>
