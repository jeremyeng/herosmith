<script>
	export let name;

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

	.active {
		border-bottom: 3px solid #44191A;
		text-shadow: 0 0 10px red;
	}

</style>