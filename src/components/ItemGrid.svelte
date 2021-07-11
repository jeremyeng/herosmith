<script>
  import { countBy } from "lodash";

  import ItemCard from "components/ItemCard.svelte";

  export let uuids = [];
  export let selectedUuids = [];
  export let maxSelectable = 1;
  export let selectable = true;
  export let showQuantities = true;
</script>

<div class="item-grid">
  {#each Object.entries(countBy(uuids)) as [uuid, quantity]}
    <ItemCard
      {uuid}
      {selectable}
      {quantity}
      selected={selectedUuids.includes(uuid)}
      disabled={!selectedUuids.includes(uuid) && selectedUuids.length >= maxSelectable}
      showQuantity={showQuantities}
      on:selected
    />
  {/each}
</div>

<style>
  .item-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }
</style>
