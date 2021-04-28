<script>
  import Item from "./Item.svelte";

  export let handleApplyUpdates;
  export let oldAbilityScores = {};
  export let newAbilityScores = {};
  export let newSpells = [];
  export let newFeatures = [];
</script>

<div class="review-tab">
  <h2>Ability Scores</h2>
  <div class="ability-row">
    {#each Object.keys(oldAbilityScores) as ability}
      <div class="ability">
        <div class="ability-label">{ability}</div>
        <div class="ability-score-change">
          <div class="old-ability-score">
            <div>{`${oldAbilityScores[ability]}`}</div>
            <div class="modifier">{`(+ ${Math.floor((oldAbilityScores[ability] - 10) / 2)})`}</div>
          </div>
          <div>
            <i class="fas fa-arrow-right arrow" />
          </div>
          <div
            class="new-ability-score"
            class:changed={oldAbilityScores[ability] != newAbilityScores[ability]}
          >
            <div>{`${newAbilityScores[ability]}`}</div>
            <div class="modifier">{`(+ ${Math.floor((newAbilityScores[ability] - 10) / 2)})`}</div>
          </div>
        </div>
      </div>
    {/each}
  </div>

  {#if newFeatures.length > 0}
    <h2>New Features</h2>
    {#each newFeatures as feature (feature.id)}
      <Item item={feature} />
    {/each}
  {/if}

  {#if newSpells.length > 0}
    <h2>New Spells</h2>
    {#each newSpells as spell}
      <Item item={spell} />
    {/each}
  {/if}

  <footer>
    <button type="submit" name="Apply Updates" on:click={handleApplyUpdates}>
      <i class="far fa-save" />Apply Updates
    </button>
  </footer>
</div>

<style>
  .ability-row {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    text-align: center;
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    font-size: 24px;
  }

  .ability {
    text-align: center;
  }

  .ability-label {
    font-weight: 600;
  }

  .ability-score-change {
    display: inline-flex;
  }

  .changed {
    color: green;
  }

  .arrow {
    vertical-align: middle;
    font-size: 20px;
  }

  .modifier {
    font-size: 20px;
  }

  h2 {
    margin-top: 10px;
  }

  footer {
    margin-top: 10px;
  }
</style>
