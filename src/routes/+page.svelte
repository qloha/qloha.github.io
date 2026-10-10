<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import ProjectsGrid from '$lib/components/ProjectsGrid.svelte';
	import About from '$lib/components/About.svelte';
	import CurrentWork from '$lib/components/CurrentWork.svelte';
	import { projects } from '$lib/data/projects';
</script>

<Hero />
<div class="container"><CurrentWork /></div>
<section class="work-section container" aria-labelledby="work-title">
	<div class="section-heading">
		<h2 id="work-title">Some of my projects</h2>
		<a class="text-link" href="/projects">See all projects</a>
	</div>
	<ProjectsGrid projects={projects.slice(0, 3)} />
</section>
<About />
