<script>
  export let abilities = {};
  export let numIncreasesAllowed = 2;

  let initialAbilities;
  $: initialAbilities = initialAbilities || { ...abilities };

  let abbrToLabelMap = CONFIG.DND5E.abilities;

  function reduceAbilityScore(event, ability) {
    event.preventDefault();

    abilities[ability] -= 1;
    numIncreasesAllowed += 1;
  }

  function raiseAbilityScore(event, ability) {
    event.preventDefault();

    if (numIncreasesAllowed > 0) {
      abilities[ability] += 1;
      numIncreasesAllowed -= 1;
    }
  }
</script>

<div class="ability-scores-tab">
  {#each Object.entries(abilities) as [ability, value]}
    <div class="ability-score">
      <div class="label">{abbrToLabelMap[ability]}</div>
      <div class="value-bar">
        <button
          disabled={initialAbilities[ability] === value}
          on:click={(event) => reduceAbilityScore(event, ability)}
          ><i class="fas fa-minus" /></button
        >
        <div class="value">{value}</div>
        <button
          disabled={numIncreasesAllowed === 0}
          on:click={(event) => raiseAbilityScore(event, ability)}><i class="fas fa-plus" /></button
        >
      </div>
      <div class="modifier">{`+ ${Math.floor((value - 10) / 2)}`}</div>
    </div>
  {/each}
</div>

<style>
  .ability-scores-tab {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 0 0.5rem;
  }
  .ability-score {
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    text-align: center;
    border: 2px groove #eeede0;
    border-radius: 2px;
    padding: 0.5rem 0;
    margin: 0;
  }

  .label {
    font-size: 24px;
    font-weight: 600;
  }

  i {
    margin: 0;
  }

  button {
    max-width: 30px;
    max-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:disabled {
    opacity: 40%;
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
