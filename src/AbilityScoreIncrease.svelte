<script>
  export let abilities = {};

  let abbrToLabelMap = CONFIG.DND5E.abilities;
</script>

<div class="ability-scores-tab">
  {#each Object.entries(abilities) as [ability, value]}
    <div class="ability-scores">
      <div class="label">{abbrToLabelMap[ability]}</div>
      <div class="value">{value}</div>
      <div class="modifier">{`+ ${Math.floor((value - 10) / 2)}`}</div>
    </div>
  {/each}
</div>

<style>
  .ability-scores-tab {
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem;
  }
  .ability-scores {
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
  }

  .label {
    font-size: 28px;
    font-weight: 600;
  }

  .value {
    display: flex;
    justify-content: center;
    font-size: 28px;
  }

  .modifier {
    display: flex;
    justify-content: center;
    font-size: 20px;
  }
</style>
