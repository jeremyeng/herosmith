<script>
  import BACKGROUNDS from "data/backgrounds.js";
  import { capitalize } from "utils/utils.js";

  import ItemCard from "components/ItemCard.svelte";

  export let data;
  export let level = 1;

  let characteristics = ["personality", "ideal", "bond", "flaw"];

  async function rollTrait(table, attribute) {
    const r = await table.roll();
    await table.toMessage(r.results, { roll: r.roll });

    const textResult = r.results[0].data.text;

    if (!data.background[attribute].includes(textResult)) {
      data.background[attribute] = [...data.background[attribute], textResult];
    }
  }

  function select(item, attribute) {
    if (data.background[attribute].includes(item)) {
      data.background[attribute] = data.background[attribute].filter((x) => x != item);
    } else {
      data.background[attribute] = [...data.background[attribute], item];
    }
  }
</script>

<div class="background-tab">
  <h2>Backgrounds</h2>
  <div class="backgrounds">
    {#each Object.keys(BACKGROUNDS) as bgUuid}
      <ItemCard
        uuid={bgUuid}
        disabled={bgUuid !== data.background.uuid && data.background.uuid.length}
        selected={bgUuid === data.background.uuid}
        on:selected={() => {
          if (data.background.uuid === bgUuid) {
            data.background = {
              uuid: "",
              data: {},
              decisionData: {},
              personality: [],
              ideal: [],
              bond: [],
              flaw: [],
            };
            data.subrace = {
              uuid: "",
              data: {},
              decisionData: {},
              personality: [],
              ideal: [],
              bond: [],
              flaw: [],
            };
          } else {
            data.background = {
              uuid: bgUuid,
              data: BACKGROUNDS[bgUuid]["data"][level],
              decisionData: {},
              personality: [],
              ideal: [],
              bond: [],
              flaw: [],
            };
          }
        }}
      />
    {/each}
  </div>

  {#each characteristics as characteristic}
    {#if BACKGROUNDS?.[data.background.uuid]?.[characteristic]}
      <div class="section">
        <h3>{capitalize(characteristic)}</h3>
        <table>
          {#await fromUuid(BACKGROUNDS[data.background.uuid][characteristic]) then table}
            <tr>
              <th>{table.data.formula}</th>
              <th>{capitalize(characteristic)}</th>
              <th
                ><button
                  type="button"
                  on:click={async () => {
                    rollTrait(table, characteristic);
                  }}>Roll</button
                ></th
              >
            </tr>
            {#each Array.from(table.results) as result, i}
              <tr>
                <td>{i + 1}</td>
                <td class:chosen={data.background[characteristic].includes(result.data.text)}
                  >{result.data.text}</td
                >
                <td
                  ><button
                    type="button"
                    on:click={() => {
                      select(result.data.text, characteristic);
                    }}>Choose</button
                  ></td
                >
              </tr>
            {/each}
          {/await}
        </table>
      </div>
    {/if}
  {/each}
</div>

<style>
  .backgrounds {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1em;
  }

  .chosen {
    color: green;
  }

  .section {
    margin: 3em 0;
  }
</style>
