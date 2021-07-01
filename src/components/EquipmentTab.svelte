<script>
  import Choice from "components/Choice.svelte";
  import CLASSES from "data/classes.js";
  import ItemList from "components/ItemList.svelte";

  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let data;
  export let level = 1;

  function rollGold(formula, multiplier) {
    const roll = new Roll(`${formula} * ${multiplier}`).evaluate({ async: false });
    roll.toMessage();
    return parseInt(roll.result) * multiplier;
  }
</script>

<div class="equipment-tab">
  <div class="choice-buttons">
    <button
      type="button"
      class:selected={data.equipment.mode === "gold"}
      on:click={() => {
        data.equipment.mode = "gold";
        data.equipment.data = { currency: { gp: 0 } };
        data.equipment.decisionData = {};
      }}>Starting Gold</button
    >
    <button
      type="button"
      class:selected={data.equipment.mode === "equipment"}
      on:click={() => {
        data.equipment.mode = "equipment";
        data.equipment.data = {};
        data.equipment.decisionData = {};
      }}>Starting Equipment</button
    >
  </div>
  {#if data.equipment.mode === "equipment"}
    <h2>Class Equipment</h2>

    {#if !data.class.uuid}
      <p class="error">Select a class to view starting equipment</p>
    {/if}

    <!-- Standard Class Equipment -->
    {#if CLASSES[data.class.uuid]?.data?.[level]?.["items"]}
      <ItemList uuidList={CLASSES[data.class.uuid]["data"][level]["items"]} />
    {/if}

    <!-- Class Equipment Choices -->
    {#if CLASSES[data.class.uuid]?.equipment?.[level]?.["choices"]}
      <div class="choices" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
        {#each CLASSES[data.class.uuid]["equipment"][level]["choices"] as choice, i}
          <Choice {choice} bind:data={data.equipment.decisionData[i]} />
        {/each}
      </div>
    {/if}

    <h2>Background Equipment</h2>
    {#if !data.background.uuid}
      <p class="error">Select a background to view starting equipment</p>
    {/if}
  {:else if data.equipment.mode == "gold"}
    <h2>Starting Gold</h2>

    {#if !data.class.uuid}
      <p class="error">Select a class to view starting gold</p>
    {/if}

    {#if CLASSES[data.class.uuid]?.gold_dice}
      <div class="gold-section">
        <div class="gold-calculation">
          <div class="formula">
            {CLASSES[data.class.uuid].gold_dice} x {CLASSES[data.class.uuid].gold_multiplier} =
          </div>
          <div class="result">
            <input
              type="number"
              value={data.equipment.data.currency.gp}
              on:change={(event) => {
                event.preventDefault();
                data.equipment.data.currency.gp = parseInt(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          type="button"
          on:click={() => {
            data.equipment.data.currency.gp = rollGold(
              CLASSES[data.class.uuid].gold_dice,
              CLASSES[data.class.uuid].gold_multiplier
            );
          }}>Randomize</button
        >
      </div>
    {/if}
  {/if}
</div>

<style>
  button:hover {
    cursor: pointer;
  }

  .gold-section {
    width: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .gold-calculation {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .result {
    margin-left: 5px;
    width: 50px;
  }

  .choice-buttons {
    display: flex;
    margin-bottom: 10px;
  }

  .error {
    color: red;
  }

  .selected {
    border-color: #782e22;
  }
</style>
