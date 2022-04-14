<script lang="ts" context="module">
	import { tweened } from 'svelte/motion';

	const percent = tweened(0);
</script>

<script lang="ts">
	import items from '$lib/items';
	import FooterButton from '$lib/[index]/footer-button.svelte';
	import slideOut from '$lib/slide-out';
	import { goto } from '$app/navigation';

	export let index: number;
	export let item: typeof items[number];

	$: $percent = index / items.length;

	const opts = { noscroll: true };
	const onKeyUp = (event: KeyboardEvent) => {
		if (event.key === 'ArrowLeft' && index !== 1) goto(`/${index - 1}`, opts);
		if (event.key === 'ArrowRight' && index !== items.length) goto(`/${index + 1}`, opts);
	};
</script>

<svelte:window on:keyup={onKeyUp} />

<footer
	out:slideOut
	class="relative w-[calc(100%+80px)] bg-white px-10 py-6 -ml-10 grid grid-rows-[max-content,max-content] grid-cols-[minmax(0,max-content),1fr,max-content] gap-x-10 gap-y-2 items-center border-t border-grey-600"
>
	<h1 class="text-h3 text-black col-start-1 col-end-2">{item.name}</h1>
	<p class="text-h5 text-black/75 col-start-1 col-end-2 row-start-2 row-end-3">
		{item.artist.name}
	</p>

	<a sveltekit:noscroll class:disabled={index === 1} class="justify-self-end" href="/{index - 1}">
		<FooterButton --rotate="180deg" />
	</a>
	<a sveltekit:noscroll class:disabled={index === items.length} href="/{index + 1}">
		<FooterButton />
	</a>

	<hr
		class="absolute top-[-1px] left-0 w-[var(--width)] text-grey-900"
		style:--width="{$percent * 100}%"
	/>
</footer>

<style>
	a {
		@apply row-span-2 text-black;
	}

	a.disabled {
		@apply text-[#D8D8D8] pointer-events-none;
	}
</style>
