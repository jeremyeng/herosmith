<script>
  export let abilities = {};

  let abbrToLabelMap = CONFIG.DND5E.abilities;
</script>

{#each Object.entries(abilities) as [ability, value]}
  <div>
    <div class="label">{abbrToLabelMap[ability]}</div>
    <div class="value">{value}</div>
    <div class="modifier">{Math.floor((value - 10) / 2)}</div>
  </div>
{/each}
