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
  <div class="choice">
    <label for={choice.name}>
      <h3>{choice.name}</h3>
    </label>
    <!-- svelte-ignore a11y-no-onchange -->
    <select id={choice.name} bind:value={optionData} on:change={makeDecision}>
      <option value="" />
      {#each choice.options as option}
        <option value={option.data}>{option.name}</option>
      {/each}
    </select>
  </div>
{:else if choice.choose > 1}
  <div class="choice">
    <h3>{choice.name}</h3>
    {#each choice.options as option}
      <div class="checkbox-option">
        <input
          id={option.name}
          type="checkbox"
          value={option.data}
          disabled={selectedOptions.length >= choice.choose &&
            selectedOptions.indexOf(option.data) < 0}
          bind:group={selectedOptions}
          on:change={makeDecision}
        />
        <label for={option.name}>{option.name}</label>
      </div>
    {/each}
  </div>
{/if}

<style>
  .choice {
    margin: 10px 0;
  }
  .checkbox-option {
    display: flex;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
  }
</style>
