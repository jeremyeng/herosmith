<script>
  import Item from "./Item.svelte";
  import SpellsTab from "./SpellsTab.svelte";
  import ClassSpellsLists from "./classSpells";
  import ClassSpellProgression from "./classSpellProgression";
  import AbilitiesTab from "./AbilitiesTab.svelte";
  import { onDestroy } from "svelte";
  import ReviewTab from "./ReviewTab.svelte";
  import LevelsTab from "./LevelsTab.svelte";

  export let actor;
  export let klass;
  export let closeWindow;

  let className;
  let subclassName;
  let priorLevel;
  let level;
  let spellcasterType;
  let chosenSubclassName;
  let classFeatures;
  let classSpells;
  let cantripsAtLevel;
  let slotSpellsAtLevel;
  let hitDice;
  let hitDieRollValue;
  let initialHitPoints;
  let newHitPoints;
  let abilities;
  let initialAbilities;
  let numAbilityImprovementsAllowed = 0;
  let abilitiesMessage = "";
  let eligibleSubclasses = [];
  let ownedSpells = [[], [], [], [], [], [], [], [], [], []]; // sorted by spell level
  let selectedSpells = [[], [], [], [], [], [], [], [], [], []]; // sorted by spell level
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
    initialHitPoints = actor.data.data.attributes.hp.value;
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
  $: classFeatures = game.dnd5e.entities.Actor5e.loadClassFeatures({
    className,
    subclassName: chosenSubclassName,
    level,
    priorLevel,
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
    const subclassData = CONFIG.DND5E.classFeatures[className.toLowerCase()]["subclasses"];
    let subclasses = [];
    for (const subclass in subclassData) {
      const subclassFeatures = subclassData[subclass]["features"];

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
        spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[priorLevel].length;
        break;
      case "half":
        spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[Math.ceil(priorLevel / 2.0)].length;
        break;
      case "third":
        spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[Math.ceil(priorLevel / 3.0)].length;
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
    let classUpdates = {
      "data.subclass": chosenSubclassName,
      "data.levels": level,
    };
    let itemCreations = selectedSpells.flat().map((spell) => spell.data);

    Promise.all([
      actor.update(actorUpdates),
      klass.update(classUpdates),
      actor.createEmbeddedDocuments("Item", itemCreations),
    ]).then(() => closeWindow());
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
    {#if currentTab === "Levels"}
      <LevelsTab
        {hitDice}
        initialConScore={initialAbilities["con"]}
        newConScore={abilities["con"]}
        {initialHitPoints}
        {newHitPoints}
        {priorLevel}
        bind:hitDieRollValue
      />
    {/if}

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
      <div>
        {#await classSpells then spells}
          <SpellsTab
            {spells}
            {cantripsAtLevel}
            {slotSpellsAtLevel}
            {ownedSpells}
            bind:selectedSpells
          />
        {/await}
      </div>
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
