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

<div class="item" class:selected>
  <input
    class="select-box"
    type="checkbox"
    on:click={select}
    class:disabled
    {disabled}
    checked={selected}
  />
  <h4 class="name">{text}</h4>
</div>

<style>
  h4 {
    margin: 0;
  }

  .item {
    display: flex;
    width: 100%;
    border: 2px solid #c9c7b8;
    border-radius: 5px;
    padding: 6px;
    transition: opacity 0.2s ease-in-out, border 0.2s ease-in-out;
    backface-visibility: hidden;
  }

  .select-box {
    transition: opacity 0.1s ease-in-out;
    margin-right: 10px;
    cursor: pointer;
  }

  .disabled {
    opacity: 0.4;
  }

  .selected {
    border: 2px solid #782e22;
  }
</style>
