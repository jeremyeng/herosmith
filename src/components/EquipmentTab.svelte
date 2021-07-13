<script>
  import Choice from "components/Choice.svelte";
  import GoldCard from "components/GoldCard.svelte";
  import CLASSES from "data/classes.js";
  import BACKGROUNDS from "data/backgrounds.js";
  import ItemList from "components/ItemList.svelte";

  import { fade } from "svelte/transition";
  import { cubicInOut } from "svelte/easing";

  export let data;
  export let editorOptions;
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
      class:selected={editorOptions.equipmentMode === "gold"}
      on:click={() => {
        editorOptions.equipmentMode = "gold";
        data.classEquipment.data = { currency: { gp: 0 } };
        data.classEquipment.decisionData = {};
      }}>Starting Gold</button
    >
    <button
      type="button"
      class:selected={editorOptions.equipmentMode === "equipment"}
      on:click={() => {
        editorOptions.equipmentMode = "equipment";
        data.classEquipment.data = {};
        data.classEquipment.decisionData = {};
      }}>Starting Equipment</button
    >
  </div>
  {#if editorOptions.equipmentMode === "equipment"}
    <h2>Class Equipment</h2>

    {#if !data.class.uuid}
      <p class="error">Select a class to view starting equipment</p>
    {/if}

    <!-- Show Gold from Class (if any) -->
    <GoldCard quantity={CLASSES[data.class.uuid]?.data?.[level]?.currency?.gp} />

    <!-- Standard Class Equipment -->
    {#if CLASSES[data.class.uuid]?.data?.[level]?.["items"]}
      <ItemList uuidList={CLASSES[data.class.uuid]["data"][level]["items"]} />
    {/if}

    <!-- Class Equipment Choices -->
    {#if CLASSES[data.class.uuid]?.equipment?.[level]?.["choices"]}
      <div class="choices" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
        {#each CLASSES[data.class.uuid]["equipment"][level]["choices"] as choice, i}
          <Choice {choice} bind:data={data.classEquipment.decisionData[i]} />
        {/each}
      </div>
    {/if}

    <h2>Background Equipment</h2>
    {#if !data.background.uuid}
      <p class="error">Select a background to view starting equipment</p>
    {/if}

    <!-- Show Gold from Background (if any) -->
    <GoldCard quantity={BACKGROUNDS[data.background.uuid]?.data?.[level]?.currency?.gp} />

    <!-- Standard Background Equipment -->
    {#if BACKGROUNDS[data.background.uuid]?.data?.[level]?.["items"]}
      <ItemList uuidList={BACKGROUNDS[data.background.uuid]["data"][level]["items"]} />
    {/if}

    <!-- Background Equipment Choices -->
    {#if BACKGROUNDS[data.background.uuid]?.equipment?.[level]?.["choices"]}
      <div class="choices" transition:fade|local={{ duration: 200, easing: cubicInOut }}>
        {#each BACKGROUNDS[data.background.uuid]["equipment"][level]["choices"] as choice, i}
          <Choice {choice} bind:data={data.backgroundEquipment.decisionData[i]} />
        {/each}
      </div>
    {/if}
  {:else if editorOptions.equipmentMode == "gold"}
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
              value={data.classEquipment.data.currency.gp}
              on:change={(event) => {
                event.preventDefault();
                data.classEquipment.data.currency.gp = parseInt(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          type="button"
          on:click={() => {
            data.classEquipment.data.currency.gp = rollGold(
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
