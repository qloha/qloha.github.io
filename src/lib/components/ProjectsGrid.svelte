<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';
	export let projects: Project[] = [];
</script>

<div class="projects-grid">
	{#each projects as project (project.id)}<ProjectCard {project} />{:else}<p>
			No projects in this category.
		</p>{/each}
</div>
