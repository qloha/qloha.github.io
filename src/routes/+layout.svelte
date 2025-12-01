<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Header />

	<main class="flex-grow">
		<slot />
	</main>

	<Footer />
</div>

<style>
	/* keep layout-level styles minimal; global styles are in src/app.css */
</style>