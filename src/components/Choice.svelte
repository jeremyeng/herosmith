<script>
  export let data;
  export let choice;
  import { merge } from "lodash";

  let optionData = {};
  $: data = merge({}, data, optionData);
</script>

<label>
  {choice.name}:
  <select bind:value={optionData}>
    <option value="" />
    {#each choice.options as option}
      <option value={option.data}>{option.name}</option>
    {/each}
  </select>
</label>
