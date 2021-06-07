<script>
  import { createEventDispatcher } from "svelte";
  import { countBy } from "lodash";

  const dispatch = createEventDispatcher();

  export let name;
  export let contents;
  export let disabled = false;
  export let selected = false;

  function select(event) {
    if (!disabled) {
      selected = !selected;
      dispatch("selected", {
        contents,
      });
    }
  }
</script>

<div class="item-group-card" class:disabled class:selected on:click={select}>
  <h4 class="item-group-name">{name}</h4>
  {#each Object.entries(countBy(contents)) as [itemUuid, quantity]}
    {#await fromUuid(itemUuid) then item}
      <div class="row">
        <img class="image" src={item.img} alt={`${item.name} icon`} />
        <span class="name">{item.name} (x{quantity})</span>
      </div>
    {/await}
  {/each}
</div>

<style>
  .item-group-card {
    border: 2px solid rgba(181, 179, 164, 0.4);
    align-items: center;
    width: 100%;
    border-radius: 5px;
    padding: 6px;
    box-shadow: 2px 2px 4px hsl(0deg 0% 0% / 60%);
    transition: opacity 0.2s ease-in-out, border 0.2s ease-in-out, transform 0.1s ease-in-out,
      box-shadow 0.1s ease-in-out;
    backface-visibility: hidden;
  }

  .item-group-card:not(.disabled):hover {
    cursor: pointer;
    transform: scale(1.025);
    box-shadow: 4px 4px 4px hsl(0deg 0% 0% / 60%);
  }

  .item-group-card:not(.disabled):active {
    box-shadow: inset 2px 2px 4px hsl(0deg 0% 0% / 60%);
  }

  .name {
    margin-left: 5px;
  }

  .disabled {
    opacity: 0.4;
  }

  .selected {
    border: 2px solid #782e22;
  }

  .row {
    display: flex;
    align-items: center;
    grid-column: 2;
    font-size: 16px;
    margin-top: 2px;
  }

  img {
    width: 25px;
  }

  span {
    font-size: 14px;
  }
</style>
