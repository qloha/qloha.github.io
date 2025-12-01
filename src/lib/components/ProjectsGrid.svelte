<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
	import type { Project } from '$lib/data/projects';
	export let projects: Project[] = [];
</script>

<div class="mt-6">
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		{#if projects.length === 0}
			<p class="text-[var(--muted)]">No projects yet.</p>
		{:else}
			{#each projects as p (p.repository)}
				<ProjectCard project={p} />
			{/each}
		{/if}
	</div>
</div>
