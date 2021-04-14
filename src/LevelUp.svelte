<script>
	export let actor;
	export let klass;
	let classData;
	let className;
	let subclassName;
	let priorLevel;;
	let level;
	let classFeatures;

	$: {
		classData = klass.getChatData();
		className = classData.description.value;
		subclassName = classData.subclass;
		priorLevel = classData.levels;
		level = priorLevel + 1;
		classFeatures = game.dnd5e.entities.Actor5e.getClassFeatures({ 
      className,
      subclassName,
      level,
      priorLevel });
	}

	let tabs = ["Features", "Spells", "Review"];

	let currentTab = "Features";
	$: console.log(`Herosmith | Current Tab changed to ${currentTab}`);
	
	function handleClick(event) {
		currentTab = event.target.text;
	}
</script>

<form>
	<nav data-group="">
		{#each tabs as tab}
    	<!-- svelte-ignore a11y-missing-attribute -->
    	<a class:active={currentTab === tab} on:click={handleClick}>{tab}</a>
		{/each}
  </nav>

	<div>
    <h1>Features</h1>
    <div>
      <ol>
				{#await classFeatures then features}
					{#each features as feature}
						<li class="feature" data-item-id="{feature.id}">
							<div class="feature-row">
								<img class="feature-image" src={feature.img} alt={feature.id}>
								<h4 class="feature-name">{feature.name}</h4>
							</div>
							<div class="feature-summary">{@html feature.getChatData().description.value}</div>
						</li>
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

	.feature-row {
		display: flex;
		align-items: center;
		font-size: 16px;
	}

	.feature-image {
		margin-right: 10px;
		max-width: 50px;
	}

	.feature-summary {
		flex: 0 0 100%;
    font-size: 14px;
    line-height: 16px;
    padding: 0.25em 0.5em;
    color: #191813;
    border-top: 1px solid #c9c7b8;
	}

</style>