<script>
  import AbilityAbbreviations from "data/abilityAbbreviations.js";
  import rollStats from "utils/rollStats.js";

  export let data;

  let standardScores = [8, 10, 12, 13, 14, 15];
  let pointBuyCosts = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9,
  };
  let abilityDescriptionMap;
  let currentAbility;
  let description;

  $: abilityDescriptionMap = Object.fromEntries(
    Object.entries(AbilityAbbreviations).map(([abbr, label]) => [
      abbr,
      fetch(`modules/herosmith/templates/ability-descriptions/${label.toLowerCase()}.html`).then(
        (response) => response.text()
      ),
    ])
  );

  $: description = abilityDescriptionMap[currentAbility];

  function reduceAbilityScore(ability) {
    data.abilities.pointBuyBudget += costOfDecrease(ability);
    data.abilities.data[ability] -= 1;
  }

  function raiseAbilityScore(ability) {
    data.abilities.pointBuyBudget -= costOfIncrease(ability);
    data.abilities.data[ability] += 1;
  }

  function costOfIncrease(ability) {
    return (
      pointBuyCosts[data.abilities.data[ability] + 1] - pointBuyCosts[data.abilities.data[ability]]
    );
  }

  function costOfDecrease(ability) {
    return (
      pointBuyCosts[data.abilities.data[ability]] - pointBuyCosts[data.abilities.data[ability] - 1]
    );
  }
</script>

<div class="ability-scores-tab">
  <div class="mode-select">
    <button
      type="button"
      on:click={() => {
        if (data.abilities.mode !== "standard") {
          data.abilities.mode = "standard";
          data.abilities.rolledScores = standardScores;
          data.abilities.availableScores = [...data.abilities.rolledScores];
          data.abilities.data = {
            str: undefined,
            con: undefined,
            dex: undefined,
            int: undefined,
            wis: undefined,
            cha: undefined,
          };
        }
      }}>Standard</button
    >
    <button
      type="button"
      on:click={() => {
        if (data.abilities.mode !== "pointbuy") {
          data.abilities.mode = "pointbuy";
          data.abilities.pointBuyBudget = 27;
          data.abilities.data = {
            str: 8,
            con: 8,
            dex: 8,
            int: 8,
            wis: 8,
            cha: 8,
          };
        }
      }}>Point Buy</button
    >
    <button
      type="button"
      on:click={() => {
        if (data.abilities.mode !== "roll") {
          data.abilities.mode = "roll";
          data.abilities.data = {
            str: undefined,
            con: undefined,
            dex: undefined,
            int: undefined,
            wis: undefined,
            cha: undefined,
          };
          data.abilities.rolledScores = rollStats();
          data.abilities.availableScores = [...data.abilities.rolledScores];
        }
      }}>Roll</button
    >
  </div>

  {#if data.abilities.mode === "pointbuy"}
    <div class="point-buy-budget"><b>Points Remaining:</b> {data.abilities.pointBuyBudget}/27</div>
  {/if}
  <div class="ability-score-row">
    {#each Object.entries(data.abilities.data) as [ability, value]}
      <div
        class="ability-score"
        class:current={currentAbility === ability}
        on:pointerenter={() => {
          currentAbility = ability;
        }}
      >
        <div class="label">{AbilityAbbreviations[ability]}</div>
        <div class="value-bar">
          {#if data.abilities.mode === "standard" || data.abilities.mode === "roll"}
            <!-- svelte-ignore a11y-no-onchange -->
            <select
              on:change={(event) => {
                if (data.abilities.data[ability]) {
                  data.abilities.availableScores = [
                    ...data.abilities.availableScores,
                    data.abilities.data[ability],
                  ].sort((a, b) => b - a);
                }

                if (parseInt(event.target.value)) {
                  const value = parseInt(event.target.value);
                  data.abilities.data[ability] = value;

                  data.abilities.availableScores.splice(
                    data.abilities.availableScores.findIndex((a) => a === value),
                    1
                  );

                  // Must reassign for svelte to update
                  data.abilities.availableScores = data.abilities.availableScores;
                } else {
                  data.abilities.data[ability] = undefined;
                }
              }}
            >
              {#if data.abilities.data[ability]}
                <option selected>{data.abilities.data[ability]}</option>
              {/if}
              <option>--</option>
              {#each data.abilities.availableScores as score}
                <option
                  disabled={!data.abilities.availableScores.includes(score)}
                  selected={!data.abilities.data[ability] && data.abilities.data[ability] === score}
                  >{score}</option
                >
              {/each}
            </select>
          {:else if data.abilities.mode === "pointbuy"}
            <button
              type="button"
              class="adjust-button"
              disabled={value === 8}
              on:click={() => reduceAbilityScore(ability)}><i class="fas fa-minus" /></button
            >
            <div class="value">{value}</div>

            <button
              type="button"
              class="adjust-button"
              disabled={data.abilities.pointBuyBudget - costOfIncrease(ability) < 0 || value === 15}
              on:click={() => raiseAbilityScore(ability)}><i class="fas fa-plus" /></button
            >
          {/if}
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

  .mode-select {
    display: flex;
    margin-bottom: 1em;
  }

  .point-buy-budget {
    text-align: center;
    font-size: 20px;
  }

  .adjust-button {
    max-width: 30px;
    max-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  select {
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    font-size: 16px;
    text-align-last: center;
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
