<script>
  export let quantity = 0;
</script>

{#if quantity}
  <div class="gold-item">
    <div class="row">
      <div class="select-area">
        <img
          class="image"
          src="icons/commodities/currency/coins-plain-stack-gold-yellow.webp"
          alt={`gold icon`}
        />
        <h4 class="name">Gold (x{quantity})</h4>
      </div>
    </div>
  </div>
{/if}

<style>
  .gold-item {
    margin-bottom: 5px;
  }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-column: 2;
    font-size: 16px;
  }

  .select-area {
    display: flex;
    align-items: center;
  }

  .image {
    margin-right: 10px;
    max-width: 40px;
  }
</style>
