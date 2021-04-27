<script>
  import { slide } from "svelte/transition";
  import { sineOut } from "svelte/easing";

  export let item;
  $: itemChatData = item.getChatData();

  let expanded = false;
</script>

<div class="item">
  <slot />
  <div class="row" on:click={() => (expanded = !expanded)}>
    <img class="image" src={item.img} alt={`${item.name} icon`} />
    <h4 class="name">{item.name}</h4>
  </div>
  {#if expanded}
    <div class="summary" transition:slide|local={{ duration: 200, easing: sineOut }}>
      {@html itemChatData.description.value}
      {#each itemChatData.properties as property}
        <span class="tag">{@html property}</span>
      {/each}
    </div>
  {/if}
</div>

<style>
  .item {
    display: grid;
    grid-template-columns: min-content;
    align-items: center;
    margin-bottom: 10px;
  }

  slot {
    grid-column: 1;
  }

  .row {
    display: flex;
    align-items: center;
    grid-column: 2;
    font-size: 16px;
    margin: 0 0.5em;
  }

  .row:hover {
    text-shadow: 0 0 10px red;
    cursor: pointer;
  }

  .image {
    margin-right: 10px;
    max-width: 50px;
  }

  .summary {
    grid-column: 2;
    grid-row: 2;
    flex: 0 0 100%;
    font-size: 14px;
    line-height: 16px;
    margin: 0.25em 0.5em;
    color: #191813;
  }

  .tag {
    display: inline-block;
    margin: 0 2px 0 0;
    padding: 0 3px;
    font-size: 10px;
    line-height: 16px;
    border: 1px solid #999;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.05);
  }
</style>
