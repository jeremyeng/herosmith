<script>
  import BACKGROUNDS from "data/backgrounds.js";
  import { capitalize } from "utils/utils.js";

  import ItemGrid from "components/ItemGrid.svelte";

  export let data;
  export let level = 1;

  let characteristics = ["personality", "ideal", "bond", "flaw"];

  async function rollTrait(table, attribute) {
    const r = await table.roll();
    await table.toMessage(r.results, { roll: r.roll });

    const textResult = r.results[0].data.text;

    if (!data.background.data[attribute].includes(textResult)) {
      data.background.data[attribute] = [...data.background.data[attribute], textResult];
    }
  }

  function select(item, attribute) {
    if (data.background.data[attribute].includes(item)) {
      data.background.data[attribute] = data.background.data[attribute].filter((x) => x != item);
    } else {
      data.background.data[attribute] = [...data.background.data[attribute], item];
    }
  }

  function onSelectBackground(event) {
    const bgUuid = event.detail.uuid;
    if (data.background.uuid === bgUuid) {
      data.background = {
        uuid: "",
        data: {
          personality: [],
          ideal: [],
          bond: [],
          flaw: [],
        },
        decisionData: {},
      };
    } else {
      data.background = {
        uuid: bgUuid,
        data: {
          personality: [],
          ideal: [],
          bond: [],
          flaw: [],
          ...BACKGROUNDS[bgUuid]["data"][level],
        },
        decisionData: {},
      };
    }
  }
</script>

<div class="background-tab">
  <h2>Backgrounds</h2>
  <ItemGrid
    uuids={Object.keys(BACKGROUNDS)}
    selectedUuids={data.background.uuid ? [data.background.uuid] : []}
    maxSelectable={1}
    selectable={true}
    showQuantities={false}
    on:selected={onSelectBackground}
  />

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
                <td class:chosen={data.background.data[characteristic].includes(result.data.text)}
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
  .chosen {
    color: green;
  }

  .section {
    margin: 2em 0;
  }
</style>
