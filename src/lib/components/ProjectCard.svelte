<script lang="ts">
	export let project: any;
</script>

<article class="group bg-neutral-800/60 border border-white/6 rounded-lg p-5 transition-transform transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent)]" tabindex="0">
	<h3 class="text-lg font-semibold text-white">{project.title}</h3>
	<p class="mt-2 text-sm text-[var(--muted)]">{project.description}</p>
	<div class="mt-4 flex flex-wrap gap-2">
		{#if project.tags}
			{#each project.tags as tag}
				<span class="text-xs text-[var(--muted-2)] bg-white/2 px-2 py-1 rounded">{tag}</span>
			{/each}
		{/if}
	</div>
	<div class="mt-4 flex gap-4">
		{#if project.repository}
			<a href={project.repository} target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] hover:underline">Repository</a>
		{/if}
		{#if project.demo}
			<a href={project.demo} target="_blank" rel="noopener noreferrer" class="text-[var(--accent)] hover:underline">Demo</a>
		{/if}
	</div>
</article>
