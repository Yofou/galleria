<script lang="ts">
	import { page } from '$app/stores';

	$: path = $page.url.pathname;
</script>

<nav class="flex justify-between items-center w-full py-10 border-b border-grey-600">
	<a href="/">
		<img class="h-8 md:h-12" src="/shared/logo.svg" alt="galleria" />
	</a>
	<a
		class="transition-colors text-grey-900 hover:text-black text-link-1 uppercase"
		href={path === '/' ? '/1' : '/'}>{path === '/' ? 'Start Slideshow' : 'Stop Slideshow'}</a
	>
</nav>
