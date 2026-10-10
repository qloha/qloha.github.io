<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { site } from '$lib/site';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	$: path = $page.url.pathname.replace(/\/$/, '') || '/';
	$: title =
		path === '/projects' ? 'Projects | qloha' : path === '/about' ? 'About | qloha' : 'qloha';
	$: description =
		path === '/projects'
			? 'Projects by qloha, including websites, programming languages, and tools.'
			: path === '/about'
				? 'About qloha and the languages and tools I use.'
				: site.description;
</script>

<svelte:head>
	<title>{title}</title><meta name="description" content={description} />
	<link rel="canonical" href={`https://qloha.dev${path === '/' ? '/' : `${path}/`}`} />
	<meta property="og:title" content={title} /><meta
		property="og:description"
		content={description}
	/><meta property="og:type" content="website" /><meta
		property="og:url"
		content={`https://qloha.dev${path === '/' ? '/' : `${path}/`}`}
	/><meta name="twitter:card" content="summary" />
</svelte:head>
<a class="skip-link" href="#main-content">Skip to content</a>
<div class="site-shell">
	<Header />
	<main id="main-content"><slot /></main>
	<Footer />
</div>
