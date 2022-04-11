<script lang="ts">
	import NavBar from "$lib/navbar.svelte"
</script>

<NavBar />
<slot />

<style global>
	html, body {
		@apply w-full h-full;
	}

	body {
		@apply px-10;
	}

	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
