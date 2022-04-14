<script lang="ts">
	let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	const onKeyUp = (event: KeyboardEvent) => {
		if (isOpen && event.key === 'Escape') toggle();
	};
</script>

<svelte:window on:keyup={onKeyUp} />

<div
	class="relative w-full h-[280px] sm:w-[475px] sm:h-[560px] [background-image:var(--bg-url)] bg-no-repeat bg-cover bg-center grid grid-cols-1 grid-rows-1"
>
	<button
		on:click={toggle}
		class="transition-colors self-start sm:self-end justify-self-start bg-black/75 text-white hover:bg-white/25 text-link-2 !text-[10px] uppercase px-4 py-[14px] m-4 flex gap-[14px] items-center"
	>
		<img src="/shared/icon-view-image.svg" alt="" />
		view image
	</button>

	<slot />
</div>

{#if isOpen}
	<div
		class="fixed z-20 top-0 left-0 w-full h-full bg-black/[.85] grid grid-cols-[minmax(0,max-content)] justify-center grid-flow-row gap-10 px-12"
	>
		<button
			on:click={toggle}
			class="transition-colors self-end text-white hover:text-white/25 text-link-1 !text-[14px] uppercase justify-self-end"
			>close</button
		>
		<img class="content-[var(--bg-url)]" alt="" />
	</div>
{/if}
