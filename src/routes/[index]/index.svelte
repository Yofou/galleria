<script lang="ts">
	import type Items from "$lib/items";
	import Footer from "$lib/[index]/footer.svelte";

	export let index: number;
	export let item: typeof Items[number]
</script>

<main>
</main>

<Footer {index} {item} />
