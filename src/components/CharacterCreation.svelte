<script>
  import RacesTab from "components/RacesTab.svelte";

  let tabs = ["Races"];
  let currentTab = "Races";
</script>

{#if currentTab === "Races"}
  <RacesTab />
{/if}
