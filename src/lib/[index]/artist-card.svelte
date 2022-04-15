<script lang="ts">
	import type Items from '$lib/items';
	import { page } from '$app/stores';

	export let item: typeof Items[number];
	export let height: number = undefined;

	let container: HTMLDivElement;
	$: height = container?.clientHeight;

	$: {
		$page;
		height = container?.clientHeight;
	}

	const onResize = () => (height = container?.clientHeight);
</script>

<svelte:window on:resize={onResize} />

<div
	bind:this={container}
	class="bg-white p-5 sm:pl-16 sm:pb-16 w-full max-w-[280px] sm:max-w-[380px] {$$props.class}"
>
	<h1
		class="text-black text-h1 !text-[1.5rem] !leading-[29px] sm:!leading-[4rem] sm:!text-[3.5rem]"
	>
		{item.name}
	</h1>
	<p class="text-grey-900 text-h4 mt-2 sm:mt-6">{item.artist.name}</p>
</div>
