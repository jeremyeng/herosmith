<script>
  import { createEventDispatcher } from "svelte";
  import { merge } from "lodash";

  const dispatch = createEventDispatcher();

  export let choice;

  function makeDecision() {
    const decisionData = merge({}, optionData, ...selectedOptions);
    dispatch("decision", {
      data: decisionData,
    });
  }

  // For single selections
  let optionData = {};

  // For multiple selections
  let selectedOptions = [];
</script>

{#if choice.choose === 1}
  <label>
    <b>{choice.name}:</b>
    <!-- svelte-ignore a11y-no-onchange -->
    <select bind:value={optionData} on:change={makeDecision}>
      <option value="" />
      {#each choice.options as option}
        <option value={option.data}>{option.name}</option>
      {/each}
    </select>
  </label>
{:else if choice.choose > 1}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <!-- svelte-ignore a11y-no-onchange -->
  <div class="checkboxes">
    <span><b>{choice.name}:</b></span>
    {#each choice.options as option}
      <label class="option">
        <input
          type="checkbox"
          value={option.data}
          disabled={selectedOptions.length >= choice.choose &&
            selectedOptions.indexOf(option.data) < 0}
          bind:group={selectedOptions}
          on:change={makeDecision}
        />
        {option.name}
      </label>
    {/each}
  </div>
{/if}

<style>
  .checkboxes {
    display: flex;
    flex-direction: column;
  }

  .option {
    display: flex;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
  }
</style>
