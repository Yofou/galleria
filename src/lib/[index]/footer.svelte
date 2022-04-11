<script lang="ts" context="module">
	import { tweened } from "svelte/motion"

	const percent = tweened(0)
</script>

<script lang="ts">
	import items from "$lib/items";

	export let index: number
	export let item: typeof items[number]

	$: $percent = index / items.length
</script>

<footer class="relative w-[calc(100%+80px)] px-10 py-6 -ml-10 grid grid-rows-[max-content,max-content] grid-cols-[max-content,1fr,max-content] gap-x-10 gap-y-2 items-center border-t border-grey-600">
	<h1 class="text-h3 text-black col-start-1 col-end-2">{item.name}</h1>
	<p class="text-h5 text-black/75 col-start-1 col-end-2 row-start-2 row-end-3">{item.artist.name}</p>

	<a class="justify-self-end" href="/{index - 1}">
		<img src="/shared/icon-back-button.svg" alt="back">
	</a>
	<a href="/{index + 1}">
		<img src="/shared/icon-next-button.svg" alt="next">
	</a>

	<hr class="absolute top-[-1px] left-0 w-[var(--width)] text-grey-900" style:--width="{$percent * 100}%">
</footer>

<style>
	a {
		@apply row-span-2;
	}
</style>
