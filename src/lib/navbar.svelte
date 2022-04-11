<script lang="ts">
	import { page } from "$app/stores"

	$: path = $page.url.pathname
</script>

<nav class="flex justify-between items-center w-full py-10 border-b border-grey-600">
	<a href="/">
		<img src="/shared/logo.svg" alt="">
	</a>
	<a class="text-grey-900 text-link-1 uppercase" href={ path === "/" ? "/1" : "/" }>{ path === "/" ? "Start Slideshow" : "Stop Slideshow"}</a>
</nav>
