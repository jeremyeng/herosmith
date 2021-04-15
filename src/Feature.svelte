<script>
  import { slide } from 'svelte/transition';
  import { sineOut } from 'svelte/easing';

  export let feature;
  $: featureChatData = feature.getChatData();

  let expanded = false;
</script>

{#if feature}
  <li class="feature" on:click="{() => expanded = !expanded}">
    <div class="row">
      <img class="image" src={feature.img} alt={feature.id}>
      <h4 class="name">{feature.name}</h4>
    </div>
    {#if expanded}
      <div class="summary" transition:slide="{{duration: 200, easing: sineOut}}">
        {@html featureChatData.description.value}
        {#each featureChatData.properties as property}
          <span class="tag">{@html property}</span>
        {/each}
      </div>  
    {/if}
  </li>
{/if}

<style>
  .feature {
    margin-bottom: 10px;
  }

  .row {
		display: flex;
		align-items: center;
		font-size: 16px;
	}

  .row:hover {
    text-shadow: 0 0 10px red;
    cursor: pointer;
  }

	.image {
		margin-right: 10px;
		max-width: 50px;
	}

	.summary {
		flex: 0 0 100%;
    font-size: 14px;
    line-height: 16px;
    padding: 0.25em 0.5em;
    color: #191813;
	}

  .tag {
    display: inline-block;
    margin: 0 2px 0 0;
    padding: 0 3px;
    font-size: 10px;
    line-height: 16px;
    border: 1px solid #999;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.05);
  }
</style>