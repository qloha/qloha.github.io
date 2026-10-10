<script lang="ts">
	import { page } from '$app/stores';
	import ThemeSwitch from './ThemeSwitch.svelte';
</script>

<header class="navbar">
	<div class="site-header container">
		<a href="/" class="wordmark" aria-label="qloha home">qloha</a>
		<div class="header-controls">
			<nav aria-label="Main navigation">
				{#each [['/', 'Home'], ['/projects', 'Projects'], ['/about', 'About']] as [href, label]}
					<a
						{href}
						aria-current={$page.url.pathname.replace(/\/$/, '') === href.replace(/\/$/, '')
							? 'page'
							: undefined}>{label}</a
					>
				{/each}
			</nav>
			<ThemeSwitch />
		</div>
	</div>
</header>
