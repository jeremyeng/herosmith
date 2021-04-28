<script>
  import { slide } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import Item from "./Item.svelte";

  export let selected = [];
  export let spells = [];
  export let ownedSpells = [];
  export let spellLevel;
  export let knowsAllSpells = false;
  export let numSelectable;

  let expanded = false;
  let headerText;

  $: headerText = spellLevel === 0 ? "Cantrips" : `Level ${spellLevel} Spells`;
  $: subheaderText = knowsAllSpells ? "Your class has access to all spells of this level" : "";
</script>

<h2
  class="section-header"
  on:click={() => {
    expanded = !expanded;
  }}
>
  <p class="header-text">{headerText}</p>
  <i class="fas fa-chevron-down rotate" class:up={expanded} />
</h2>

{#if expanded}
  <div transition:slide|local={{ duration: 200, easing: sineInOut }}>
    {#if knowsAllSpells}
      <p class="subheader">{subheaderText}</p>
      {#each spells as spell}
        <Item item={spell} />
      {/each}
    {:else}
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
    {/if}
  </div>
{/if}

<style>
  .section-header {
    cursor: pointer;
  }

  .section-header:hover .header-text {
    text-shadow: 0 0 10px red;
  }

  .subheader {
    margin-top: 0;
  }

  i {
    display: inline-block;
    font-size: 26px;
    margin-left: 0.25em;
  }

  p {
    display: inline;
  }
  .rotate {
    transition: all 0.2s ease-in-out;
  }

  .up {
    transform: rotate(-180deg);
  }
</style>
