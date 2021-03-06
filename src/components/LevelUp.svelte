<script>
  // Components
  import Item from "components/Item.svelte";
  import SpellsTab from "components/SpellsTab.svelte";
  import AbilitiesTab from "components/AbilitiesTab.svelte";
  import ReviewTab from "components/ReviewTab.svelte";
  import LevelsTab from "components/LevelsTab.svelte";

  // Data
  import ClassFeatures from "data/classFeatures.js";
  import ClassSpellsLists from "data/classSpells.js";
  import ClassSpellProgression from "data/classSpellProgression.js";
  import SpellSlotsTable from "data/spellSlotsTable.js";

  import { onDestroy } from "svelte";

  export let actor;
  export let klass;
  export let closeWindow;

  // Initial derived properties
  let className;
  let subclassName;
  let priorLevel;
  let level;
  let spellcasterType;
  let classFeatures;
  let classSpells;
  let cantripsAtLevel;
  let slotSpellsAtLevel;
  let hitDice;
  let initialHitPoints;
  let initialAbilities;
  let ownedSpells = [[], [], [], [], [], [], [], [], [], []]; // sorted by spell level
  let eligibleSubclasses = [];

  // New properties to update from
  let chosenSubclassName;
  let hitDieRollValue;
  let newHitPoints;
  let abilities;
  let selectedSpells = [[], [], [], [], [], [], [], [], [], []]; // sorted by spell level
  let numAbilityImprovementsAllowed = 0;

  let abilitiesMessage = "";

  // Navigation
  let tabs = ["Levels", "Abilities", "Features", "Spells", "Review"];
  let currentTab = "Levels";

  onDestroy(() => console.log("Herosmith | Level Up Window closed"));

  $: {
    className = klass.name;
    subclassName = klass.data.data.subclass;
    priorLevel = klass.data.data.levels;
    level = priorLevel + 1;
    spellcasterType = klass.data.data.spellcasting.progression;
    cantripsAtLevel = ClassSpellProgression[className.toLowerCase()]["cantrips"][priorLevel];
    slotSpellsAtLevel = ClassSpellProgression[className.toLowerCase()]["slottedSpells"][priorLevel];
    hitDice = klass.data.data.hitDice;
    initialHitPoints = actor.data.data.attributes.hp.max;
    initialAbilities = Object.fromEntries(
      Object.entries(actor.data.data.abilities).map(([ability, data]) => [ability, data.value])
    );
  }

  $: abilities = abilities || initialAbilities;
  $: newHitPoints = newHitPoints || initialHitPoints;

  $: if ([4, 8, 12, 16, 19].includes(level)) {
    numAbilityImprovementsAllowed = 2;
    abilitiesMessage = `You can increase one ability score of your choice by 2, or you can increase two ability
          scores of your choice by 1. As normal, you can’t increase an ability score above 20 using
          this feature.`;
  }

  $: eligibleSubclasses = getEligibleSubclasses(className);
  $: chosenSubclassName = subclassName;
  $: classFeatures = actor.getClassFeatures({
    className,
    subclassName: chosenSubclassName,
    level,
  });
  $: classSpells = getClassSpells({
    className,
    priorLevel,
    spellcasterType,
  });
  $: {
    for (const spell of actor.itemTypes["spell"]) {
      const spellLevel = spell.data.data.level;
      ownedSpells[spellLevel] = [...ownedSpells[spellLevel], spell];
    }
  }
  $: console.log(`Herosmith | Current Tab changed to ${currentTab}`);

  function getEligibleSubclasses(className) {
    const subclassData = ClassFeatures[className.toLowerCase()]["subclasses"];
    let subclasses = [];
    for (const subclass in subclassData) {
      const subclassFeatures = subclassData[subclass]["features"];

      if (!subclassFeatures) {
        continue;
      }

      if (Object.keys(subclassFeatures).length === 0) {
        continue;
      }

      const levelMilestones = Object.keys(subclassFeatures).map((level) => parseInt(level));
      if (levelMilestones.includes(level)) {
        subclasses.push(subclassData[subclass].label);
      }
    }

    return subclasses;
  }

  async function getClassSpells({ className = "", spellcasterType = "", priorLevel = 0 } = {}) {
    // Determine max spellcasting level
    let spellcastingLevel;

    switch (spellcasterType) {
      case "full":
        spellcastingLevel = SpellSlotsTable[priorLevel].length;
        break;
      case "half":
        spellcastingLevel = SpellSlotsTable[Math.ceil(priorLevel / 2.0)].length;
        break;
      case "third":
        spellcastingLevel = SpellSlotsTable[Math.ceil(priorLevel / 3.0)].length;
        break;
      case "pact":
        break;
      default:
        break;
    }

    // Get the configuration of spells which may be added
    const clsConfig = ClassSpellsLists[className.toLowerCase()];

    // Acquire spells up to spellcasting level
    let ids = [];
    for (let [lvl, spellUuids] of Object.entries(clsConfig || {})) {
      lvl = parseInt(lvl);
      if (lvl <= spellcastingLevel) ids = [...ids, spellUuids];
    }

    // Load item data for all identified spells
    const spells = [];
    for (let idsForLevel of ids) {
      const spellsForLevel = [];
      for (let id of idsForLevel) {
        spellsForLevel.push(await fromUuid(id));
      }

      spells.push(spellsForLevel);
    }

    return spells;
  }

  async function handleApplyUpdates(event) {
    event.preventDefault();

    let actorUpdates = Object.fromEntries(
      Object.entries(abilities).map(([ability, value]) => [
        `data.abilities.${ability}.value`,
        value,
      ])
    );
    actorUpdates["data.attributes.hp.max"] = newHitPoints;
    let classUpdates = {
      "data.subclass": chosenSubclassName,
      "data.levels": level,
    };
    let itemCreations = selectedSpells.flat().map((spell) => spell.data);

    const features = await classFeatures;

    await actor.addEmbeddedItems(features, (prompt = false));
    await actor.addEmbeddedItems(itemCreations, (prompt = false));
    await klass.update(classUpdates);
    await actor.update(actorUpdates);
    closeWindow();
  }
</script>

<form>
  <nav>
    {#each tabs as tab}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class:active={currentTab === tab} on:click={(event) => (currentTab = event.target.text)}
        >{tab}</a
      >
    {/each}
  </nav>

  <div>
    <!-- Levels / Hit Points -->
    {#if currentTab === "Levels"}
      <LevelsTab
        {hitDice}
        initialConScore={initialAbilities["con"]}
        newConScore={abilities["con"]}
        {initialHitPoints}
        bind:newHitPoints
        {priorLevel}
        bind:hitDieRollValue
      />
    {/if}

    <!-- Abilities -->
    {#if currentTab === "Abilities"}
      <AbilitiesTab {abilities} {initialAbilities} bind:numAbilityImprovementsAllowed>
        <p slot="message" style="color: green; font-weight: 600;">
          {abilitiesMessage}
        </p>
      </AbilitiesTab>
    {/if}

    <!-- Features -->
    {#if currentTab === "Features"}
      {#if subclassName === "" && eligibleSubclasses.length > 0}
        <label
          >Choose a Subclass:
          <!-- svelte-ignore a11y-no-onchange -->
          <select bind:value={chosenSubclassName}>
            <option value="" />
            {#each eligibleSubclasses as subclass}
              <option value={subclass}>{subclass}</option>
            {/each}
          </select>
        </label>
      {/if}

      <div>
        <ol>
          {#await classFeatures then features}
            {#each features as feature (feature.id)}
              <Item item={feature} />
            {/each}
          {/await}
        </ol>
      </div>
    {/if}

    <!-- Spells -->
    {#if currentTab === "Spells"}
      {#await classSpells then spells}
        <SpellsTab
          {spells}
          {cantripsAtLevel}
          {slotSpellsAtLevel}
          {ownedSpells}
          bind:selectedSpells
        />
      {/await}
    {/if}

    <!-- Review Updates -->
    {#if currentTab === "Review"}
      {#await classFeatures then features}
        <ReviewTab
          {handleApplyUpdates}
          newSpells={selectedSpells.flat()}
          newFeatures={features}
          oldAbilityScores={initialAbilities}
          newAbilityScores={abilities}
          {initialHitPoints}
          {newHitPoints}
        />
      {/await}
    {/if}
  </div>
</form>

<style>
  nav {
    display: flex;
    justify-content: space-evenly;
    font-family: "Modesto Condensed", "Palatino Linotype", serif;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  a:hover {
    text-shadow: 0 0 10px red;
  }

  ol {
    list-style: none;
    padding: 0;
  }

  .active {
    border-bottom: 3px solid #44191a;
    text-shadow: 0 0 10px red;
  }
</style>
