<script>
  import TextCard from "components/TextCard.svelte";
  import ItemCard from "components/ItemCard.svelte";
  import ItemGroupCard from "components/ItemGroupCard.svelte";
  import { isEqual } from "lodash";

  export let data;
  export let choice;

  function isOptionSelected(selectedData, optData) {
    return selectedData.some((val) => isEqual(val, optData));
  }

  function onMakeDecision(optionData) {
    if (isOptionSelected(data, optionData)) {
      data = data.filter((val) => !isEqual(val, optionData));
    } else {
      data = [...data, optionData];
    }
  }

  $: data = data || [];
</script>

<div class="choice">
  <label for={choice.name}>
    <h3>{choice.name} (Pick {choice.choose})</h3>
  </label>
  <div class="choice-grid">
    {#each choice.options as option}
      <!-- Display group of items -->
      {#if option?.data?.items?.length > 1}
        <ItemGroupCard
          name={option.name}
          contents={option?.data?.items}
          selected={isOptionSelected(data, option.data)}
          disabled={data.length >= choice.choose && !isOptionSelected(data, option.data)}
          on:selected={() => {
            onMakeDecision(option.data);
          }}
        />
        <!-- Display Single Item -->
      {:else if option?.data?.items?.length === 1}
        <ItemCard
          uuid={option?.data?.items[0]}
          selected={isOptionSelected(data, option.data)}
          disabled={data.length >= choice.choose && !isOptionSelected(data, option.data)}
          on:selected={() => {
            onMakeDecision(option.data);
          }}
        />
      {:else}
        <TextCard
          text={option.name}
          data={option.data}
          selected={isOptionSelected(data, option.data)}
          disabled={data.length >= choice.choose && !isOptionSelected(data, option.data)}
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
    margin: 3em 0;
  }

  h3 {
    font-weight: 600;
  }

  .choice-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
