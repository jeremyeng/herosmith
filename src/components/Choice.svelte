<script>
  export let data;
  export let choice;

  function defaultData() {
    if (choice.choose > 1) {
      return [];
    } else {
      return {};
    }
  }

  $: data = data || defaultData();
</script>

{#if choice.choose === 1}
  <div class="choice">
    <label for={choice.name}>
      <h3>{choice.name}</h3>
    </label>
    <div class="radio">
      {#each choice.options as option}
        <div class="radio-option">
          <label for="">
            <input type="radio" bind:group={data} value={option.data} />
            {option.name}
          </label>
        </div>
      {/each}
    </div>
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
          disabled={data.length >= choice.choose && data.indexOf(option.data) < 0}
          bind:group={data}
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

  .radio {
    display: flex;
    flex-direction: column;
  }

  .radio-option {
    margin-top: 8px;
  }
  .checkbox-option {
    display: flex;
    align-items: center;
    margin-top: 5px;
    cursor: pointer;
  }
</style>
