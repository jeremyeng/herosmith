<script>
	import Feature from './Feature.svelte';

	export let actor;
	export let klass;
	let className;
	let subclassName;
	let priorLevel;;
	let level;
	let classFeatures;
	let eligibleSubclasses = [];

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

		eligibleSubclasses = [];
    const subclassData = CONFIG.DND5E.classFeatures[className.toLowerCase()]['subclasses'];
    for (const subclass in subclassData) {
      const subclassFeatures = subclassData[subclass]["features"];

      if (Object.keys(subclassFeatures).length === 0) {
        continue;
      }

      const levelMilestones = Object.keys(subclassFeatures).map(level => parseInt(level));
      if (levelMilestones.includes(level)) {
        eligibleSubclasses = [...eligibleSubclasses, {name: subclass, label: subclassData[subclass].label}]
      }
    }
		console.log('');
	}

	let tabs = ["Features", "Spells", "Review"];

	let currentTab = "Features";
	$: console.log(`Herosmith | Current Tab changed to ${currentTab}`);

	function chooseSubclass(event) {
		classFeatures = game.dnd5e.entities.Actor5e.getClassFeatures({ 
      className,
      subclassName: event.target.value,
      level,
      priorLevel 
		});
	}
	
</script>

<form>
	<nav>
		{#each tabs as tab}
    	<!-- svelte-ignore a11y-missing-attribute -->
    	<a class:active={currentTab === tab} on:click="{(event) => currentTab = event.target.text}">{tab}</a>
		{/each}
  </nav>

	<div>
    <h1>Features</h1>

		{#if subclassName === "" && eligibleSubclasses.length > 0}
			<label>Choose a Subclass: 
				<!-- svelte-ignore a11y-no-onchange -->
				<select on:change={chooseSubclass}>
						<option value=""></option>
						{#each eligibleSubclasses as subclass}
						<option value={subclass.name}>{subclass.label}</option>
						{/each}
				</select>
			</label>
		{/if}

    <div>
      <ol>
				{#await classFeatures then features}
					{#each features as feature (feature.id)}
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