<script>
  import BioTab from "components/BioTab.svelte";
  import RacesTab from "components/RacesTab.svelte";
  import ClassTab from "components/ClassTab.svelte";
  import BackgroundTab from "components/BackgroundTab.svelte";
  import ReviewCharacterTab from "components/ReviewCharacterTab.svelte";
  import AbilityScoreTab from "components/AbilityScoreTab.svelte";
  import EquipmentTab from "components/EquipmentTab.svelte";
  import SpellTab from "components/SpellTab.svelte";

  export let closeWindow;
  export let getPosTop;
  export let getPosLeft;

  let editorOptions = {
    equipmentMode: "",
  };

  let data = {
    bio: {
      data: {
        profileImage: "icons/svg/mystery-man.svg",
        tokenImage: "icons/svg/mystery-man.svg",
        name: "",
        alignment: "",
        appearance: "",
      },
      decisionData: {},
    },
    abilities: {
      data: {
        abilities: {
          str: 8,
          con: 8,
          dex: 8,
          int: 8,
          wis: 8,
          cha: 8,
        },
      },
      mode: "pointbuy",
      pointBuyBudget: 27,
      rolledScores: [],
      availableScores: [],
      decisionData: {},
    },
    race: {
      uuid: "",
      data: {},
      decisionData: {},
    },
    subrace: {
      uuid: "",
      data: {},
      decisionData: {},
    },
    class: {
      uuid: "",
      data: {},
      decisionData: {},
    },
    classEquipment: {
      data: {},
      decisionData: {},
    },
    backgroundEquipment: {
      data: {},
      decisionData: {},
    },
    background: {
      uuid: "",
      data: {
        personality: [],
        ideal: [],
        bond: [],
        flaw: [],
      },
      decisionData: {},
    },
    spells: {
      data: {},
      decisionData: {},
    },
  };

  let tabs = ["Bio", "Races", "Class", "Abilities", "Background", "Equipment", "Spells", "Review"];
  let currentTab = "Bio";
</script>

<div>
  <nav>
    {#each tabs as tab}
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class:active={currentTab === tab} on:click={(event) => (currentTab = event.target.text)}
        >{tab}</a
      >
    {/each}
  </nav>

  {#if currentTab === "Bio"}
    <BioTab bind:data {getPosTop} {getPosLeft} />
  {/if}

  {#if currentTab === "Races"}
    <RacesTab bind:data />
  {/if}

  {#if currentTab === "Class"}
    <ClassTab bind:data />
  {/if}

  {#if currentTab === "Abilities"}
    <AbilityScoreTab bind:data />
  {/if}

  {#if currentTab === "Background"}
    <BackgroundTab bind:data />
  {/if}

  {#if currentTab === "Equipment"}
    <EquipmentTab bind:data bind:editorOptions />
  {/if}

  {#if currentTab === "Spells"}
    <SpellTab bind:data bind:editorOptions />
  {/if}

  {#if currentTab === "Review"}
    <ReviewCharacterTab {data} {closeWindow} />
  {/if}
</div>

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

  .active {
    border-bottom: 3px solid #44191a;
    text-shadow: 0 0 10px red;
  }
</style>
