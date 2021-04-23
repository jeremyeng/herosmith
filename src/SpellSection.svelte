<script>
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import Item from "./Item.svelte";

  export let selected = [];
  export let spells = [];
  export let ownedSpells = [];
  export let spellLevel;
  export let numSelectable;

  let expanded = false;
  let headerText;

  $: headerText = spellLevel === 0 ? "Cantrips" : `Level ${spellLevel} Spells`;
  $: subheaderText = numSelectable < 0 ? "Your class has access to all spells of this level" : "";
</script>

<h2
  class="section-header"
  on:click={() => {
    expanded = !expanded;
  }}
>
  {headerText}
</h2>

{#if expanded}
  <div transition:slide={{ duration: 200, easing: sineInOut }}>
    {#if numSelectable >= 0}
      {#each spells as spell}
        <Item item={spell}>
          {#if ownedSpells.some((ownedSpell) => ownedSpell.name === spell.name)}
            <input type="checkbox" disabled checked />
          {:else}
            <input
              type="checkbox"
              value={spell}
              bind:group={selected}
              disabled={selected.indexOf(spell) < 0 && numSelectable === 0}
            />
          {/if}
        </Item>
      {/each}
    {:else}
      <p>{subheaderText}</p>
      {#each spells as spell}
        <Item item={spell} />
      {/each}
    {/if}
  </div>
{/if}

<style>
  .section-header {
    cursor: pointer;
  }
</style>
