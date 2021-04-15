<script>
	import Feature from './Feature.svelte';

	export let actor;
	export let klass;
	let className;
	let subclassName;
	let priorLevel;;
	let level;
	let classFeatures;

	$: {
		className = klass.name;
		subclassName = klass.data.data.subclass;
		priorLevel = klass.data.data.levels;
		level = priorLevel + 1;
		classFeatures = game.dnd5e.entities.Actor5e.getClassFeatures({ 
      className,
      subclassName,
      level,
      priorLevel 
		});
	}

	let tabs = ["Features", "Spells", "Review"];

	let currentTab = "Features";
	$: console.log(`Herosmith | Current Tab changed to ${currentTab}`);
	
</script>

<form>
	<nav data-group="">
		{#each tabs as tab}
    	<!-- svelte-ignore a11y-missing-attribute -->
    	<a class:active={currentTab === tab} on:click="{(event) => currentTab = event.target.text}">{tab}</a>
		{/each}
  </nav>

	<div>
    <h1>Features</h1>
    <div>
      <ol>
				{#await classFeatures then features}
					{#each features as feature}
						<Feature {feature} />
					{/each}
				{/await}
      </ol>
    </div>
  </div>
</form>

<style>
	nav {
		display: flex;
		justify-content: space-evenly;
		font-family: "Modesto Condensed", "Palatino Linotype", serif;
		font-size: 20px;
    font-weight: 700;
	}

	a:hover {
		text-shadow: 0 0 10px red;
	}
	
	ol {
		list-style: none;
		padding: 0;
	}

	.active {
		border-bottom: 3px solid #44191A;
		text-shadow: 0 0 10px red;
	}

</style>