<script lang="ts">
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';
	let mounted = false;
	onMount(() => setTimeout(() => (mounted = true), 120));
</script>

<section class="container py-8">
	<div class={`section-header ${mounted ? 'mounted' : ''}`}>
		<h2 class="flex items-center gap-3 text-2xl md:text-3xl font-extrabold leading-tight">
			<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<circle cx="12" cy="12" r="10" fill="url(#g)" />
				<defs>
					<linearGradient id="g" x1="0" x2="1">
						<stop offset="0%" stop-color="#06b6d4" />
						<stop offset="100%" stop-color="#8b5cf6" />
					</linearGradient>
				</defs>
			</svg>
			<span class="section-title">Projects</span>
		</h2>
		<span class="block mt-2"></span>
	</div>

	<div class="bg-neutral-800/40 border border-white/6 rounded-lg p-6 mt-6">
		<ProjectsGrid {projects} />
	</div>
</section>
