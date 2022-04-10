<script lang="ts">
	import { onMount } from "svelte";
	import items from "@/lib/items"
	import ArtLink from "@/components/art-link.svelte"

	let Main: HTMLElement
	onMount( async () => {
		const { default: Macy } = await import("macy")

		new Macy({
			container: Main,
			margin: 40,
			breakAt: {
				1600: 5,
        		900: 4,
				500: 2,
				0: 1,
			},
			mobileFirst: true,
		})
	} )
</script>

<main class="w-full mt-10" bind:this={Main}>
	{#each items as art, index}
		<ArtLink item={art} href="/{index + 1}" />
	{/each}
</main>
