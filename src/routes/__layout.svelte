<script lang="ts">
	import NavBar from '$lib/navbar.svelte';
	import { page } from '$app/stores';
</script>

<NavBar />
{#key $page.url.pathname === '/'}
	<slot />
{/key}

<style global>
	html,
	body {
		@apply w-full h-full;
	}

	body {
		@apply px-10;
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
