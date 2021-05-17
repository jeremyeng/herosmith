<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function select(event) {
    if (!disabled) {
      selected = !selected;
      dispatch("selected", {
        data,
      });
    }
  }
  export let disabled = false;
  export let selected = false;
  export let text = "";
  export let data = {};
</script>

<div class="item" class:disabled class:selected on:click={select}>
  <h4 class="name">{text}</h4>
</div>

<style>
  h4 {
    margin: 0;
  }

  .item {
    text-align: center;
    margin-bottom: 10px;
    max-width: 12em;
    border: 2px solid #c9c7b8;
    border-radius: 5px;
    padding: 6px;
    box-shadow: 2px 2px 4px hsl(0deg 0% 0% / 60%);
    transition: transform 0.1s ease-in-out;
    transition: box-shadow 0.1s ease-in-out;
  }

  .item:not(.disabled):hover {
    cursor: pointer;
    transform: scale(1.025);
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
</style>
