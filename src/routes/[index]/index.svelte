<script lang="ts">
	import type Items from '$lib/items';
	import ArtPiece from '$lib/[index]/art-piece.svelte';
	import Footer from '$lib/[index]/footer.svelte';
	import ArtistCard from '$lib/[index]/artist-card.svelte';

	export let index: number;
	export let item: typeof Items[number];

	let height: number | undefined;
</script>

<main
	class="grid grid-flow-row max-w-[1440px] md:grid-cols-[minmax(0,max-content),minmax(0,1fr)] justify-self-center gap-16 md:gap-7 col-start-1 col-end-2 row-start-2 row-end-3 w-full pt-[100px]"
>
	<section class="flex w-full relative justify-self-start gap-10 md:pr-[316px] md:pb-[139px]">
		<h1 class="hidden">Art display</h1>
		<ArtPiece --bg-url="url('{item.images.gallery}')">
			<ArtistCard
				class="absolute left-0 top-[225px] sm:left-[unset] sm:top-0 sm:right-[-150px] md:translate-x-full md:right-[65px]"
				bind:height
				{item}
			/>
			<img
				class="w-16 h-16 sm:w-32 sm:h-32 absolute top-[calc(100%+var(--top,0)-55px)] sm:top-[var(--top)] md:bottom-0 md:top-[unset] sm:right-[-30px] sm:translate-x-full md:translate-y-1/2"
				class:hidden={!height}
				style:--top={height && `${height}px`}
				src={item.artist.image}
				alt={item.artist.name}
			/>
		</ArtPiece>
	</section>

	<section
		class="grid grid-cols-[minmax(0,max-content)] grid-rows-[max-content,max-content,1fr] overflow-x-hidden"
	>
		<h1
			class="text-display justify-self-end sm:justify-self-start !text-[100px] sm:!text-[200px] text-grey-300"
		>
			{item.year}
		</h1>
		<p
			class="text-grey-900 transform translate-y-[-50px] sm:translate-y-[-35px] ml-0 sm:ml-[150px] md:ml-0 text-body w-full max-w-[457px] md:max-w-[350px]"
		>
			{item.description}
		</p>
		<a
			class="text-grey-900 text-link-1 uppercase justify-self-start self-end ml-0 sm:ml-[150px] md:ml-0 mb-12 md:mb-32"
			href={item.source}>go to source</a
		>
	</section>
</main>

<Footer {index} {item} />
