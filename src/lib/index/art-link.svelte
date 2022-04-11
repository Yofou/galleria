<script lang="ts">
	import type Item from "$lib/items"
	
	export let item: typeof Item[number]
	export let href: string
</script>

<a class="w-[310px] grid grid-cols-1 grid-rows-[1fr,max-content] text-white group" {href}>
	<img class="transition-opacity w-full object-cover col-start-1 col-end-2 row-start-1 row-end-[-1] group-hover:opacity-40" src={item.images.thumbnail} alt={item.artist.image}>
	<h1 class="col-start-1 col-end-2 row-start-1 row-end-2 self-end mb-2 mx-8 text-h2">{item.name}</h1>
	<p class="col-start-1 col-end-2 row-start-2 row-end-3 mb-8 ml-8 text-h4">{item.artist.name}</p>
</a>

<style>
	a::after {
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.841672) 100%);
		@apply col-start-1 col-end-2 row-start-1 row-end-[-1] w-full h-[170px] content-[""] self-end z-10;
	}

	h1, p { @apply z-20; }
</style>
