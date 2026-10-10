<script lang="ts">
	import { site } from '$lib/site';
</script>

<footer class="site-footer container">
	<p>© {new Date().getFullYear()} qloha</p>
	<div>
		<a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a><a
			href={`mailto:${site.email}`}>Email me</a
		>
	</div>
</footer>
