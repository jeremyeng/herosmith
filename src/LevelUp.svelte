<script>
	import Item from "./Item.svelte";
	import SpellsTab from "./SpellsTab.svelte";
	import ClassSpellsLists from "./classSpells";
	import ClassSpellProgression from "./classSpellProgression";

	export let actor;
	export let klass;
	export let closeWindow;

	let className;
	let subclassName;
	let priorLevel;
	let level;
	let spellcasterType;
	let chosenSubclassName;
	let classFeatures;
	let classSpells;
	let selectedCantrips = [];
	let selectedSlotSpells = [];
	let cantripsAtLevel;
	let slotSpellsAtLevel;
	let eligibleSubclasses = [];
	let tabs = ["Features", "Spells", "Review"];
	let currentTab = "Features";

	$: {
		className = klass.name;
		subclassName = klass.data.data.subclass;
		priorLevel = klass.data.data.levels;
		level = priorLevel + 1;
		spellcasterType = klass.data.data.spellcasting;
		cantripsAtLevel =
			ClassSpellProgression[className.toLowerCase()]["cantrips"][priorLevel];
		slotSpellsAtLevel =
			ClassSpellProgression[className.toLowerCase()]["slottedSpells"][
				priorLevel
			];
	}
	$: eligibleSubclasses = getEligibleSubclasses(className);
	$: chosenSubclassName = subclassName;
	$: classFeatures = game.dnd5e.entities.Actor5e.getClassFeatures({
		className,
		subclassName: chosenSubclassName,
		level,
		priorLevel,
	});
	$: classSpells = getClassSpells({
		className,
		priorLevel,
		spellcasterType,
	});
	$: console.log(`Herosmith | Current Tab changed to ${currentTab}`);

	function getEligibleSubclasses(className) {
		const subclassData =
			CONFIG.DND5E.classFeatures[className.toLowerCase()]["subclasses"];
		let subclasses = [];
		for (const subclass in subclassData) {
			const subclassFeatures = subclassData[subclass]["features"];

			if (Object.keys(subclassFeatures).length === 0) {
				continue;
			}

			const levelMilestones = Object.keys(subclassFeatures).map((level) =>
				parseInt(level)
			);
			if (levelMilestones.includes(level)) {
				subclasses.push(subclassData[subclass].label);
			}
		}

		return subclasses;
	}

	async function getClassSpells({
		className = "",
		spellcasterType = "",
		priorLevel = 0,
	} = {}) {
		// Determine max spellcasting level
		let spellcastingLevel;

		switch (spellcasterType) {
			case "full":
				spellcastingLevel = CONFIG.DND5E.SPELL_SLOT_TABLE[priorLevel].length;
				break;
			case "half":
				spellcastingLevel =
					CONFIG.DND5E.SPELL_SLOT_TABLE[Math.ceil(priorLevel / 2.0)].length;
				break;
			case "third":
				spellcastingLevel =
					CONFIG.DND5E.SPELL_SLOT_TABLE[Math.ceil(priorLevel / 3.0)].length;
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
		for (let [lvl, spellUuids] of Object.entries(clsConfig || {})) {
			lvl = parseInt(lvl);
			if (lvl <= spellcastingLevel) ids = [...ids, spellUuids];
		}

		// Load item data for all identified spells
		const spells = [];
		for (let idsForLevel of ids) {
			const spellsForLevel = [];
			for (let id of idsForLevel) {
				spellsForLevel.push(await fromUuid(id));
			}

			spells.push(spellsForLevel);
		}

		return spells;
	}

	async function handleApplyUpdates(event) {
		event.preventDefault();

		let actorUpdates = {};
		let classUpdates = {
			"data.subclass": chosenSubclassName,
			"data.levels": level,
		};
		let itemCreations = selectedCantrips
			.concat(selectedSlotSpells)
			.map((spell) => spell.data);

		Promise.all([
			actor.update(actorUpdates),
			klass.update(classUpdates),
			actor.createEmbeddedEntity("OwnedItem", itemCreations),
		]).then(() => closeWindow());
	}
</script>

<form>
	<nav>
		{#each tabs as tab}
			<!-- svelte-ignore a11y-missing-attribute -->
			<a
				class:active={currentTab === tab}
				on:click={(event) => (currentTab = event.target.text)}>{tab}</a
			>
		{/each}
	</nav>

	<div>
		<!-- Features -->
		{#if currentTab === "Features"}
			{#if subclassName === "" && eligibleSubclasses.length > 0}
				<label
					>Choose a Subclass:
					<!-- svelte-ignore a11y-no-onchange -->
					<select bind:value={chosenSubclassName}>
						<option value="" />
						{#each eligibleSubclasses as subclass}
							<option value={subclass}>{subclass}</option>
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
					<SpellsTab
						{spells}
						{cantripsAtLevel}
						{slotSpellsAtLevel}
						ownedSpells={actor.itemTypes["spell"]}
						bind:selectedCantrips
						bind:selectedSlotSpells
					/>
				{/await}
			</div>
		{/if}

		<!-- Review Updates -->
		{#if currentTab === "Review"}
			<footer>
				<button type="submit" name="Apply Updates" on:click={handleApplyUpdates}
					><i class="far fa-save" />Apply Updates</button
				>
			</footer>
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
		border-bottom: 3px solid #44191a;
		text-shadow: 0 0 10px red;
	}
</style>
