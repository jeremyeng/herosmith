<script>
  import { countBy } from "lodash";

  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let uuidList = [];
</script>

<div class="item-list" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
  {#each Object.entries(countBy(uuidList)) as [itemUuid, quantity]}
    {#await fromUuid(itemUuid) then item}
      <div
        class="item"
        on:click={() => {
          new game.dnd5e.applications.ItemSheet5e(item).render(true);
        }}
      >
        <div class="row">
          <div class="select-area">
            <img class="image" src={item.img} alt={`${item.name} icon`} />
            <h4 class="name">{item.name} (x{quantity})</h4>
          </div>
        </div>
      </div>
    {/await}
  {/each}
</div>

<style>
  h4 {
    margin: 0;
  }

  .item {
    margin-bottom: 5px;
  }

  .item:hover {
    cursor: pointer;
    text-shadow: 0 0 10px red;
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

  .image {
    margin-right: 10px;
    max-width: 40px;
  }
</style>
