<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function select(event) {
    if (!disabled && !event.target.className.includes("fa-info-circle")) {
      selected = !selected;
      dispatch("selected", {
        item,
      });
    }
  }
  export let disabled = false;
  export let selected = false;
  export let item;
</script>

<div class="item" class:disabled class:selected on:click={select}>
  <div class="row">
    <div class="select-area">
      <img class="image" src={item.img} alt={`${item.name} icon`} />
      <h4 class="name">{item.name}</h4>
    </div>
    <i
      class:more-info={!disabled}
      on:click={() => {
        if (!disabled) new game.dnd5e.applications.ItemSheet5e(item).render(true);
      }}
      class="fas fa-info-circle"
    />
  </div>
</div>

<style>
  h4 {
    margin: 0;
  }

  .item {
    display: grid;
    grid-template-columns: min-content;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 6px;
    box-shadow: 2px 2px 4px hsl(0deg 0% 0% / 60%);
    transition: box-shadow 0.1s ease-in-out;
  }

  .item:not(.disabled):hover {
    cursor: pointer;
    border: 2px solid #782e22;
    box-shadow: 4px 4px 4px hsl(0deg 0% 0% / 60%);
  }

  .item:not(.disabled):active {
    box-shadow: inset 2px 2px 4px hsl(0deg 0% 0% / 60%);
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
    justify-content: space-between;
    grid-column: 2;
    font-size: 16px;
  }

  .select-area {
    display: flex;
    align-items: center;
  }

  .more-info:hover {
    text-shadow: 0 0 10px #782e22;
  }

  i {
    color: #7a7971;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image {
    margin-right: 10px;
    max-width: 50px;
  }
</style>
