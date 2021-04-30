<script>
  export let priorLevel;
  export let initialConScore;
  export let newConScore;
  export let hitDice;
  export let initialHitPoints;
  export let newHitPoints;
  export let hitDieRollValue;

  let newConModifier;
  let retroactiveConBonus;
  let averageRollValue;

  $: oldConModifier = Math.floor((initialConScore - 10) / 2);
  $: newConModifier = Math.floor((newConScore - 10) / 2);
  $: switch (hitDice) {
    case "d6":
      averageRollValue = 4;
      break;
    case "d8":
      averageRollValue = 5;
      break;
    case "d10":
      averageRollValue = 6;
      break;
    case "d12":
      averageRollValue = 7;
      break;
    default:
      break;
  }
  $: hitDieRollValue = hitDieRollValue || averageRollValue;
  $: retroactiveConBonus = (newConModifier - oldConModifier) * priorLevel;
  $: newHitPoints = initialHitPoints + hitDieRollValue + newConModifier + retroactiveConBonus;

  async function rollHitDie(event) {
    event.preventDefault();

    hitDieRollValue = (await new Roll(`1${hitDice}`).toMessage({ flavor: "HP Roll" })).roll.total;
  }

  async function useAverageRollValue(event) {
    event.preventDefault();

    const r = await new Roll(`1${hitDice}`).evaluate();
    r._total = averageRollValue;
    r.toMessage({ flavor: "HP Average Roll" });
    hitDieRollValue = r.total;
  }
</script>

<h2>Hit Points</h2>
<p>
  Each time you gain a level, you gain 1 additional Hit Die. Roll that Hit Die, add your
  Constitution modifier to the roll, and add the total to your hit point maximum. Alternatively, you
  can use the fixed value shown in your class entry, which is the average result of the die roll
  (rounded up).
</p>
<p>
  When your Constitution modifier increases by 1, your hit point maximum increases by 1 for each
  level you have attained. For example, if your 7th-level fighter increases his Constitution score
  from 17 to 18 when he reaches 8th level, thus increasing his Constitution modifier from +3 to +4.
  His hit point maximum then increases by 8.
</p>
<div class="die-roll-buttons">
  <button on:click={rollHitDie}>Roll Hit Die <b>(1{hitDice})</b></button>
  <button on:click={useAverageRollValue}>Use Average Roll <b>({averageRollValue})</b></button>
</div>
<div class="calculation">
  <p class="label initial-hit-points"><b>(Initial Hit Points)</b></p>
  <p class="number initial-hit-points">{initialHitPoints}</p>

  <p class="label dice-roll"><b>(Hit Die Roll)</b></p>
  <p class="number dice-roll">+ {hitDieRollValue}</p>

  <p class="label con-mod"><b>(Constitution Modifier)</b></p>
  <p class="number con-mod">+ {newConModifier}</p>

  {#if retroactiveConBonus > 0}
    <p class="label retro-con-bonus"><b>(Retroactive Constitution Bonus)</b></p>
    <p class="number retro-con-bonus">+ {retroactiveConBonus}</p>
  {/if}

  <div class="bar" />

  <p class="label new-hit-points"><b>(Hit Points After Level-Up)</b></p>
  <p class="number new-hit-points">{newHitPoints}</p>
</div>

<style>
  b {
    font-size: 16px;
  }

  .die-roll-buttons {
    display: flex;
    margin: 10px 0;
  }

  button {
    font-size: 14px;
  }

  .calculation {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    align-items: center;
    text-align: right;
    margin: auto;
  }

  .bar {
    border-top: 2px solid #000;
    grid-column: 1 / 3;
    grid-row: 5;
  }

  .number {
    grid-column: 1;
    margin: 5px;
    font-size: 20px;
    justify-self: right;
  }

  .label {
    grid-column: 2;
    justify-self: left;
    margin: 0 10px;
    font-size: 16px;
  }

  .initial-hit-points {
    grid-row: 1;
  }

  .dice-roll {
    grid-row: 2;
  }

  .con-mod {
    grid-row: 3;
  }

  .retro-con-bonus {
    grid-row: 4;
  }

  .new-hit-points {
    grid-row: 6;
    color: green;
  }
</style>
