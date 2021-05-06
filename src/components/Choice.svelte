<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let choice;

  function makeDecision() {
    dispatch("decision", {
      data: optionData,
    });
  }

  let optionData = {};
</script>

<label>
  {choice.name}:
  <!-- svelte-ignore a11y-no-onchange -->
  <select bind:value={optionData} on:change={makeDecision}>
    <option value="" />
    {#each choice.options as option}
      <option value={option.data}>{option.name}</option>
    {/each}
  </select>
</label>
