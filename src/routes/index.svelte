<script lang="ts">
	import items from "$lib/items"
	import ArtLink from "$lib/index/art-link.svelte"
</script>

<main class="w-full mt-10">
	{#each items as art, index}
		<ArtLink item={art} href="/{index + 1}" />
	{/each}
</main>

<style>
	main {
		column-width: 310px;
		column-gap: 40px;
		column-fill: balance;
	}

	main > :global(*) {
		@apply mb-10;
		break-inside: avoid;
	}
</style>
