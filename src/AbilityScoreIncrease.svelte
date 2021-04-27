<script>
  export let abilities = {};
  export let initialAbilities = {};
  export let numAbilityImprovementsAllowed = 0;

  let abbrToLabelMap = CONFIG.DND5E.abilities;
  let abilityDescriptionMap;
  let currentAbility;
  let description;

  $: abilityDescriptionMap = Object.fromEntries(
    Object.entries(abbrToLabelMap).map(([abbr, label]) => [
      abbr,
      fetch(
        `modules/herosmith/templates/ability-descriptions/${label.toLowerCase()}.html`
      ).then((response) => response.text()),
    ])
  );

  $: description = abilityDescriptionMap[currentAbility];

  function reduceAbilityScore(event, ability) {
    event.preventDefault();

    abilities[ability] -= 1;
    numAbilityImprovementsAllowed += 1;
  }

  function raiseAbilityScore(event, ability) {
    event.preventDefault();

    if (numAbilityImprovementsAllowed > 0) {
      abilities[ability] += 1;
      numAbilityImprovementsAllowed -= 1;
    }
  }
</script>

<div class="ability-scores-tab">
  <div class="ability-score-row">
    {#each Object.entries(abilities) as [ability, value]}
      <div
        class="ability-score"
        class:current={currentAbility === ability}
        on:pointerenter={() => {
          currentAbility = ability;
        }}
      >
        <div class="label">{abbrToLabelMap[ability]}</div>
        <div class="value-bar">
          <button
            disabled={initialAbilities[ability] === value}
            on:click={(event) => reduceAbilityScore(event, ability)}
            ><i class="fas fa-minus" /></button
          >
          <div class="value">{value}</div>
          <button
            disabled={numAbilityImprovementsAllowed === 0}
            on:click={(event) => raiseAbilityScore(event, ability)}
            ><i class="fas fa-plus" /></button
          >
        </div>
        <div class="modifier">{`+ ${Math.floor((value - 10) / 2)}`}</div>
      </div>
    {/each}
  </div>

  <div class="ability-description">
    {#if description}
      {#await description then html}
        {@html html}
      {/await}
    {/if}
  </div>
</div>

<style>
  .ability-scores-tab {
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

  .ability-description {
    margin-top: 0.5rem;
  }

  .current {
    border-color: #782e22;
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

  button:hover {
    cursor: pointer;
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
