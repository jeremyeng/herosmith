<script>
	import Item from './Item.svelte';
	import ClassSpellsLists from './classSpells';

	export let actor;
	export let klass;
	let className;
	let subclassName;
	let priorLevel;;
	let level;
	let classFeatures;
	let classSpells;
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

		classSpells = getClassSpells({className, priorLevel, spellProgression: klass.data.data.spellcasting});
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

	async function getClassSpells({className="", spellProgression="", priorLevel=1}={}) {
		// Determine max spellcasting level
		let spellcastingLevel;
		
		switch (spellProgression) {
			case "full":
				spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[priorLevel - 1].length;
				break;
			case "half":
				spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[Math.ceil(priorLevel / 2.0) - 1].length;
				break;
			case "third":
				spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[Math.ceil(priorLevel / 3.0) - 1].length;
				break;
			case "pact":

				break;
			default:
				break;
		}

    // Get the configuration of spells which may be added
    const clsConfig = ClassSpellsLists[className.toLowerCase()];

    // Acquire spells up to spellcasting level
    let ids = [];
    for ( let [lvl, spellUuids] of Object.entries(clsConfig || {}) ) {
      lvl = parseInt(lvl);
      if (lvl <= spellcastingLevel) ids = [...ids, spellUuids];
    }

    // Load item data for all identified spells
    const spells = [];
    for ( let idsForLevel of ids ) {
			const spellsForLevel = []
			for( let id of idsForLevel) {
				spellsForLevel.push(await fromUuid(id));
			}

			spells.push(spellsForLevel);
    }

    return spells;
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
		<!-- Features -->
		{#if currentTab === "Features"}
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
							<Item item={feature} />
						{/each}
					{/await}
				</ol>
			</div>
		{/if}

		<!-- Spells -->
		{#if currentTab === "Spells"}
			<div>
				{#await classSpells then spells}
					{#each spells as spellsForLevel, i}
						{#if i === 0}
							<h2>{`Cantrips`}</h2>
						{:else}
							<h2>{`Level ${i} Spells`}</h2>
						{/if}
							<ol>
								{#each spellsForLevel as spell}
									<li>
										<Item item={spell} />
									</li>
								{/each}
							</ol>
						{/each}
					{/await}
			</div>
		{/if}
  </div>
</form>

<style>
	nav {
		display: flex;
		justify-content: space-evenly;
		font-family: "Modesto Condensed", "Palatino Linotype", serif;
		font-size: 20px;
    font-weight: 700;
		margin-bottom: 15px;
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