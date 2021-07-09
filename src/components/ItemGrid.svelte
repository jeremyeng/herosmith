<script>
  import { countBy } from "lodash";

  import ItemCard from "components/ItemCard.svelte";

  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let uuidList = [];
  export let selectable = true;
  export let showQuantities = true;
</script>

<div class="item-grid" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
  {#each Object.entries(countBy(uuidList)) as [uuid, quantity]}
    {#if showQuantities}
      <ItemCard {uuid} {selectable} {quantity} />
    {:else}
      <ItemCard {uuid} {selectable} />
    {/if}
  {/each}
</div>

<style>
  .item-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
