<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function select(event) {
    if (!disabled && !event.target.className.includes("fa-info-circle")) {
      selected = !selected;
      dispatch("selected", {
        uuid,
      });
    }
  }
  export let disabled = false;
  export let selected = false;
  export let uuid;
</script>

<div class="item" class:selected>
  {#await fromUuid(uuid) then item}
    <div class="row">
      <input
        class="select-box"
        type="checkbox"
        on:click={select}
        class:disabled
        {disabled}
        checked={selected}
      />
      <div
        class="select-area"
        on:click={() => {
          new game.dnd5e.applications.ItemSheet5e(item).render(true);
        }}
      >
        <img class="image" src={item.img} alt={`${item.name} icon`} />
        <h4 class="name">{item.name}</h4>
      </div>
    </div>
  {/await}
</div>

<style>
  h4 {
    margin: 0;
  }

  .item {
    display: flex;
    border: 2px solid #c9c7b8;
    align-items: center;
    max-width: 300px;
    border-radius: 5px;
    padding: 6px;
    /* box-shadow: 2px 2px 4px hsl(0deg 0% 0% / 60%); */
    transition: opacity 0.2s ease-in-out, border 0.2s ease-in-out;
    backface-visibility: hidden;
  }

  .select-box {
    transition: opacity 0.2s ease-in-out;
    margin-right: 10px;
    cursor: pointer;
  }

  /* .item:not(.disabled):hover {
    cursor: pointer;
    transform: scale(1.025);
    box-shadow: 4px 4px 4px hsl(0deg 0% 0% / 60%);
  } */

  /* .item:not(.disabled):active {
    box-shadow: inset 2px 2px 4px hsl(0deg 0% 0% / 60%);
  } */

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

  .select-area:hover {
    cursor: pointer;
    text-shadow: 0 0 10px red;
  }

  /* .more-info:hover {
    text-shadow: 0 0 10px #782e22;
  } */

  /* i {
    color: #7a7971;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  } */

  .image {
    margin-right: 10px;
    max-width: 40px;
  }
</style>
