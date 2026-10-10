<script lang="ts">
	import type { Project } from '$lib/data/projects';
	export let project: Project;
</script>

<article class="project-card">
	<h3>{project.title}</h3>
	<p>{project.description}</p>
	{#if project.tags.length}<div class="tags" aria-label="Built with">
			{#each project.tags as tag}<span>{tag}</span>{/each}
		</div>{/if}
	<div class="project-links">
		{#if project.demo && project.linkLabel}<a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={`${project.linkLabel}: ${project.title} (opens in a new tab)`}
				>{project.linkLabel}</a
			>{/if}
		<a
			href={project.repository}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${project.title} source code (opens in a new tab)`}>Source code</a
		>
	</div>
</article>
