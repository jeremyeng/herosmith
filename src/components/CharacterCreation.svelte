<script>
  import RacesTab from "components/RacesTab.svelte";

  export let closeWindow;

  let tabs = ["Races"];
  let currentTab = "Races";
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

  {#if currentTab === "Races"}
    <RacesTab />
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
