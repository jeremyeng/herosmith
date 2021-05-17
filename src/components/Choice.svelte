<script>
  import TextCard from "components/TextCard.svelte";
  import { isEqual } from "lodash";

  export let data;
  export let choice;

  function isOptionSelected(selectedData, optData) {
    return selectedData.some((val) => isEqual(val, optData));
  }

  $: data = data || [];
</script>

<div class="choice">
  <label for={choice.name}>
    <h3>{choice.name}</h3>
  </label>
  <div class="choice-grid">
    {#each choice.options as option}
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
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
  }
</style>
