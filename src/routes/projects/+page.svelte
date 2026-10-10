<script lang="ts">
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import { projects } from '$lib/data/projects';
	const categories = ['All', 'Web', 'Languages', 'Tools', 'Minecraft', 'Games'] as const;
	let selected: (typeof categories)[number] = 'All';
	$: filtered =
		selected === 'All' ? projects : projects.filter((project) => project.category === selected);
</script>

<section class="container page-section" aria-labelledby="projects-title">
	<h1 id="projects-title">Projects</h1>
	<p class="page-intro">Here’s what I’ve been working on.</p>
	<div class="filter-bar">
		<div class="filters" role="group" aria-label="Filter projects by category">
			{#each categories as category}<button
					type="button"
					class:active={selected === category}
					aria-pressed={selected === category}
					onclick={() => (selected = category)}>{category}</button
				>{/each}
		</div>
		<p aria-live="polite">{filtered.length} {filtered.length === 1 ? 'project' : 'projects'}</p>
	</div>
	<ProjectsGrid projects={filtered} />
</section>
