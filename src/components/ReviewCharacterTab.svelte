<script>
  import AbilityAbbreviations from "data/abilityAbbreviations.js";

  export let data;
</script>

<div class="review-tab">
  <h2>Ability Scores</h2>
  <div class="ability-score-row">
    {#each Object.entries(data.abilities) as [ability, value]}
      <div class="ability-score">
        <div class="label">{AbilityAbbreviations[ability]}</div>
        <div class="value-bar">
          <div class="value">{value}</div>
        </div>
        {#if value && value >= 10}
          <div class="modifier">{`+ ${Math.abs(Math.floor((value - 10) / 2))}`}</div>
        {/if}
        {#if value && value < 10}
          <div class="modifier">{`- ${Math.abs(Math.floor((value - 10) / 2))}`}</div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>
  .ability-score {
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    text-align: center;
    border: 2px groove #eeede0;
    border-radius: 2px;
    padding: 0.5rem 0;
    margin: 0;
  }

  .ability-score-row {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(6, 1fr);
  }

  .label {
    font-size: 24px;
    font-weight: 600;
  }

  .value-bar {
    display: flex;
    justify-content: center;
  }

  .value {
    font-size: 28px;
    padding: 0 0.25rem;
  }

  .modifier {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
</style>
