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

<div class="item-group-card" class:selected>
  <div class="title">
    <input
      class="select-box"
      type="checkbox"
      on:click={select}
      class:disabled
      {disabled}
      checked={selected}
    />
    <h4 class="item-group-name">{name}</h4>
  </div>
  {#each Object.entries(countBy(contents)) as [itemUuid, quantity]}
    {#await fromUuid(itemUuid) then item}
      <div
        class="select-area"
        on:click={() => {
          new game.dnd5e.applications.ItemSheet5e(item).render(true);
        }}
      >
        <img class="image" src={item.img} alt={`${item.name} icon`} />
        <span class="name">{item.name} (x{quantity})</span>
      </div>
    {/await}
  {/each}
</div>

<style>
  input {
    margin-left: 0px;
    margin-right: 10px;
    transition: opacity 0.2s ease-in-out;
  }

  input:hover {
    cursor: pointer;
  }

  h4 {
    margin: 0;
  }

  .item-group-card {
    border: 2px solid rgba(181, 179, 164, 0.4);
    align-items: center;
    max-width: 300px;
    border-radius: 5px;
    padding: 6px;
    transition: opacity 0.2s ease-in-out, border 0.2s ease-in-out, transform 0.1s ease-in-out;
    backface-visibility: hidden;
  }

  .title {
    display: flex;
    align-items: center;
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

  .select-area {
    display: flex;
    align-items: center;
    grid-column: 2;
    font-size: 16px;
    margin-top: 2px;
  }

  .select-area:hover {
    cursor: pointer;
    text-shadow: 0 0 10px red;
  }

  img {
    width: 25px;
  }

  span {
    font-size: 14px;
  }
</style>
