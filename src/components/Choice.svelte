<script>
  import TextCard from "components/TextCard.svelte";
  import ItemCard from "components/ItemCard.svelte";
  import ItemGroupCard from "components/ItemGroupCard.svelte";
  import { isEqual } from "lodash";

  export let data;
  export let choice;
  export let disabled = false;

  function isOptionSelected(selectedData, optData) {
    return selectedData.some((val) => isEqual(val, optData));
  }

  function isChoiceSelected(selectedData, choiceData) {
    for (const option of choiceData.options) {
      if (selectedData.some((val) => isEqual(val, option.data))) {
        return true;
      }
    }
    return false;
  }

  function onMakeDecision(optionData) {
    if (isOptionSelected(data, optionData)) {
      data = data.filter((val) => !isEqual(val, optionData));
    } else {
      data = [...data, optionData];
    }
  }

  // Spells, Features and Items are all equivalent functionally (they get added the same way)
  // However, the distinction is useful when reviewing changes.
  function getItemType(optionData) {
    if (optionData?.items) {
      return "items";
    }
    if (optionData?.features) {
      return "features";
    }
    if (optionData?.spells) {
      return "spells";
    }
  }

  $: data = data || [];
</script>

<div class="choice">
  <label for={choice.name}>
    <h3>{choice.name} (Pick {choice.choose})</h3>
  </label>
  <div
    class:choice-grid={!choice.options.some((option) => option.choose)}
    class:choice-list={choice.options.some((option) => option.choose)}
  >
    {#each choice.options as option}
      {#if option?.choose}
        <!-- Display Another Choice -->
        <svelte:self
          bind:data
          choice={option}
          disabled={data.length >= choice.choose && !isChoiceSelected(data, option)}
        />
      {:else if option.data?.[getItemType(option.data)]?.length > 1}
        <!-- Display group of items -->
        <ItemGroupCard
          name={option.name}
          contents={option.data?.[getItemType(option.data)]}
          selected={isOptionSelected(data, option.data)}
          disabled={disabled ||
            (data.length >= choice.choose && !isOptionSelected(data, option.data))}
          on:selected={() => {
            onMakeDecision(option.data);
          }}
        />
        <!-- Display Single Item -->
      {:else if option.data?.[getItemType(option.data)]?.length === 1}
        <ItemCard
          uuid={option.data?.[getItemType(option.data)][0]}
          selected={isOptionSelected(data, option.data)}
          disabled={disabled ||
            (data.length >= choice.choose && !isOptionSelected(data, option.data))}
          showQuantity={false}
          on:selected={() => {
            onMakeDecision(option.data);
          }}
        />
      {:else}
        <TextCard
          text={option.name}
          data={option.data}
          selected={isOptionSelected(data, option.data)}
          disabled={disabled ||
            (data.length >= choice.choose && !isOptionSelected(data, option.data))}
          on:selected={() => {
            if (isOptionSelected(data, option.data)) {
              data = data.filter((val) => !isEqual(val, option.data));
            } else {
              data = [...data, option.data];
            }
          }}
        />
      {/if}
    {/each}
  </div>
</div>

<style>
  .choice {
    margin: 2em 0;
  }

  h3 {
    font-weight: 600;
  }

  .choice-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
    align-items: start;
  }

  .choice-list {
    padding-left: 1em;
  }
</style>
