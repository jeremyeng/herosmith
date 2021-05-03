<script>
  import RACES from "data/races.js";
  import Item from "components/Item.svelte";

  export let selected = "";
</script>

<div>
  <h2>Races</h2>
  {#each Object.values(RACES) as raceData}
    {#await fromUuid(raceData.uuid) then race}
      <h3>{race.name}</h3>
      {#if Object.values(raceData.subraces).length}
        {#each Object.values(raceData.subraces) as subraceData}
          {#await fromUuid(subraceData.uuid) then subrace}
            <Item item={subrace} highlightText={true}>
              <input slot="input" type="radio" value={subrace.name} bind:group={selected} />
              <div slot="additional-text">
                {@html race.getChatData().description.value}
              </div>
            </Item>
          {/await}
        {/each}
      {:else}
        <Item item={race}>
          <input slot="input" type="radio" value={race.name} bind:group={selected} />
        </Item>
      {/if}
    {/await}
  {/each}
</div>

<style>
  input[type="radio"] {
    transform: scale(1.5);
    margin-right: 10px;
  }
</style>
