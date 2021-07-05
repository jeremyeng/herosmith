<script>
  import Choice from "components/Choice.svelte";
  import CLASSES from "data/classes.js";

  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let data;
  export let level = 1;
  export let editorOptions;
</script>

<div class="spell-tab">
  <h2>Spells</h2>
  {#if !data.class.uuid}
    <p class="error">Select a class to view spells</p>
  {/if}

  <!-- Class Spell Choices -->
  {#if CLASSES[data.class.uuid]?.spells?.[level]?.["choices"]}
    <div class="choices" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
      {#each CLASSES[data.class.uuid]["spells"][level]["choices"] as choice, i}
        <Choice {choice} bind:data={data.spells.decisionData[i]} />
      {/each}
    </div>
  {/if}
</div>

<style>
  .error {
    color: red;
  }
</style>
