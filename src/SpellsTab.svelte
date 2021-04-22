<script>
  import Item from "./Item.svelte";

  export let spells = [];
  export let ownedSpells = [];
  export let selectedCantrips = [];
  export let selectedSlotSpells = [];
  export let cantripsAtLevel = "";
  export let slotSpellsAtLevel = "";

  let numCantripsAtLevel = 0;
  let numSlotSpellsAtLevel = 0;
  let numSelectableCantrips = 0;
  let numSelectableSlotSpells = 0;
  let numOwnedCantrips = 0;
  let numOwnedSlotSpells = 0;

  $: numOwnedCantrips = ownedSpells.filter((spell) => spell.data.data.level === 0).length;

  $: numOwnedSlotSpells = ownedSpells.filter((spell) => spell.data.data.level > 0).length;

  $: {
    switch (true) {
      // Hard cap on number of cantrips known
      case /^(\d+)$/.test(cantripsAtLevel):
        numCantripsAtLevel = parseInt(cantripsAtLevel);
        break;
      // Gain a number of cantrips at each level
      case /^\+(\d+)$/.test(cantripsAtLevel):
        numCantripsAtLevel = parseInt(cantripsAtLevel) + numOwnedCantrips;
        break;
      default:
        break;
    }
  }
  $: numSelectableCantrips = numCantripsAtLevel - numOwnedCantrips - selectedCantrips.length;

  $: {
    switch (true) {
      // Hard cap on number of slot spells known
      case /^(\d+)$/.test(slotSpellsAtLevel):
        numSlotSpellsAtLevel = parseInt(slotSpellsAtLevel);
        break;
      // Hard cap on number of slot spells known
      case /^\+(\d+)$/.test(slotSpellsAtLevel):
        numSlotSpellsAtLevel = parseInt(slotSpellsAtLevel) + numOwnedSlotSpells;
        break;
      default:
        break;
    }
  }
  $: numSelectableSlotSpells =
    numSlotSpellsAtLevel - numOwnedSlotSpells - selectedSlotSpells.length;
</script>

{#each spells as spellsForLevel, i}
  {#if spellsForLevel.length}
    {#if i === 0}
      <h2>{`Cantrips`}</h2>

      {#if cantripsAtLevel === "all"}
        <!-- Just show all spells for classes that know all their cantrips (None in SRD) -->
        <p>You know all your cantrips</p>
        {#each spellsForLevel as spell}
          <Item item={spell} />
        {/each}
      {:else}
        <!-- Allow selection for classes that know a set number of cantrips at each level -->
        {#each spellsForLevel as spell}
          <Item item={spell}>
            {#if ownedSpells.some((ownedSpell) => ownedSpell.name === spell.name)}
              <input type="checkbox" disabled checked />
            {:else}
              <input
                type="checkbox"
                value={spell}
                bind:group={selectedCantrips}
                disabled={selectedCantrips.indexOf(spell) < 0 && numSelectableCantrips <= 0}
              />
            {/if}
          </Item>
        {/each}
      {/if}
    {:else}
      <h2>{`Level ${i} Spells`}</h2>
      {#if slotSpellsAtLevel === "all"}
        <!-- Just show all spells for classes that know all their slot spells -->
        <p>
          {`You know all your Level ${i} Spells. You must prepare a spell in order to cast it.`}
        </p>
        {#each spellsForLevel as spell}
          <Item item={spell} />
        {/each}
      {:else}
        <!-- Allow selection for classes that know a set number of slot spells at each level -->
        {#each spellsForLevel as spell}
          <Item item={spell}>
            {#if ownedSpells.some((ownedSpell) => ownedSpell.name === spell.name)}
              <input type="checkbox" disabled checked />
            {:else}
              <input
                type="checkbox"
                value={spell}
                bind:group={selectedSlotSpells}
                disabled={selectedSlotSpells.indexOf(spell) < 0 && numSelectableSlotSpells <= 0}
              />
            {/if}
          </Item>
        {/each}
      {/if}
    {/if}
  {/if}
{/each}

<style>
</style>
