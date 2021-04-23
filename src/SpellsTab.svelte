<script>
  import SpellSection from "./SpellSection.svelte";

  export let spells = [];
  export let ownedSpells = [];
  export let selectedSpells = [[], [], [], [], [], [], [], [], [], []];
  export let cantripsAtLevel = "";
  export let slotSpellsAtLevel = "";

  let numSelectedCantrips = 0;
  let numSelectedSlotSpells = 0;
  let numCantripsAtLevel = 0;
  let numSlotSpellsAtLevel = 0;
  let numSelectableCantrips = 0;
  let numSelectableSlotSpells = 0;
  let numOwnedCantrips = 0;
  let numOwnedSlotSpells = 0;

  $: numOwnedCantrips = ownedSpells[0].length;
  $: numOwnedSlotSpells = ownedSpells.slice(1, ownedSpells.length).flat().length;

  $: numSelectedCantrips = selectedSpells[0].length;
  $: numSelectedSlotSpells = selectedSpells.slice(1, ownedSpells.length).flat().length;

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
        numCantripsAtLevel = -1; // -1 means class knows every cantrip spell at this level
        break;
    }
  }

  $: numSelectableCantrips = numCantripsAtLevel - numOwnedCantrips - numSelectedCantrips;

  $: {
    switch (true) {
      // Hard cap on number of slot spells known
      case /^(\d+)$/.test(slotSpellsAtLevel):
        numSlotSpellsAtLevel = parseInt(slotSpellsAtLevel);
        break;
      // Gain a number of slot spells at each level
      case /^\+(\d+)$/.test(slotSpellsAtLevel):
        numSlotSpellsAtLevel = parseInt(slotSpellsAtLevel) + numOwnedSlotSpells;
        break;
      default:
        numSlotSpellsAtLevel = -1; // -1 means class knows every slot spell at this level
        break;
    }
  }
  $: numSelectableSlotSpells = numSlotSpellsAtLevel - numOwnedSlotSpells - numSelectedSlotSpells;
</script>

{#each spells as spellsForLevel, i}
  {#if spellsForLevel.length}
    <SpellSection
      spells={spellsForLevel}
      spellLevel={i}
      ownedSpells={ownedSpells[i]}
      numSelectable={i === 0 ? numSelectableCantrips : numSelectableSlotSpells}
      bind:selected={selectedSpells[i]}
    />
  {/if}
{/each}
