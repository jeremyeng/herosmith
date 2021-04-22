<script>
  import Item from "./Item.svelte";

  export let spells = [];
  export let ownedSpells = [];
  export let selectedCantrips = [];
  export let selectedSlotSpells = [];
  export let numCantripsToLearn = 0;
  export let numSlotSpellsToLearn = 0;

  let numSelectableCantrips = numCantripsToLearn;
  let numSelectableSlotSpells = numSlotSpellsToLearn;

  $: numSelectableCantrips = numCantripsToLearn - selectedCantrips.length;
  $: numSelectableSlotSpells = numSlotSpellsToLearn - selectedSlotSpells.length;
</script>

{#each spells as spellsForLevel, i}
  {#if spellsForLevel.length}
    {#if i === 0}
      <h2>{`Cantrips`}</h2>
    {:else}
      <h2>{`Level ${i} Spells`}</h2>
    {/if}
    <div>
      {#each spellsForLevel as spell}
        <Item item={spell}>
          {#if ownedSpells.some((ownedSpell) => ownedSpell.name === spell.name)}
            <input type="checkbox" disabled checked />
          {:else if i === 0}
            <input
              type="checkbox"
              value={spell}
              bind:group={selectedCantrips}
              disabled={selectedCantrips.indexOf(spell) < 0 &&
                numSelectableCantrips === 0}
            />
          {:else}
            <input
              type="checkbox"
              value={spell}
              bind:group={selectedSlotSpells}
              disabled={selectedSlotSpells.indexOf(spell) < 0 &&
                numSelectableSlotSpells === 0}
            />
          {/if}
        </Item>
      {/each}
    </div>
  {/if}
{/each}

<style>
</style>
