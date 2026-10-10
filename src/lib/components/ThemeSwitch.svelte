<script lang="ts">
	import { onMount } from 'svelte';
	let theme: 'light' | 'dark' = 'light';
	let ready = false;
	let chosen = false;

	function applyTheme(next: 'light' | 'dark') {
		theme = next;
		document.documentElement.dataset.theme = next;
		document.documentElement.style.colorScheme = next;
	}

	function chooseTheme(next: 'light' | 'dark') {
		chosen = true;
		applyTheme(next);
		try {
			localStorage.setItem('qloha-theme', next);
		} catch {
			/* The switch still works when storage is unavailable. */
		}
	}

	onMount(() => {
		const preference = window.matchMedia('(prefers-color-scheme: dark)');
		try {
			const saved = localStorage.getItem('qloha-theme');
			chosen = saved === 'light' || saved === 'dark';
		} catch {
			/* Use the system preference. */
		}
		const initial = document.documentElement.dataset.theme;
		applyTheme(
			initial === 'dark' || initial === 'light' ? initial : preference.matches ? 'dark' : 'light'
		);
		ready = true;
		const followSystem = (event: MediaQueryListEvent) => {
			if (!chosen) applyTheme(event.matches ? 'dark' : 'light');
		};
		preference.addEventListener('change', followSystem);
		return () => preference.removeEventListener('change', followSystem);
	});
</script>

<div class="theme-switch" role="group" aria-label="Color mode">
	<button
		type="button"
		disabled={!ready}
		aria-pressed={theme === 'light'}
		onclick={() => chooseTheme('light')}>Day</button
	>
	<button
		type="button"
		disabled={!ready}
		aria-pressed={theme === 'dark'}
		onclick={() => chooseTheme('dark')}>Night</button
	>
</div>
