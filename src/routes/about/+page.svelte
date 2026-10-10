<script lang="ts">
	import CurrentWork from '$lib/components/CurrentWork.svelte';
	const skills = [
		{
			title: 'Languages',
			items: ['TypeScript', 'JavaScript', 'Python', 'C++', 'C', 'Java / Kotlin']
		},
		{ title: 'Frontend', items: ['Svelte', 'React', 'Vite', 'Next.js', 'Nuxt.js'] },
		{ title: 'Tools', items: ['Git', 'Node.js', 'VS Code', 'IntelliJ / WebStorm', 'Testing & CI'] }
	];
</script>

<section class="container page-section" aria-labelledby="about-page-title">
	<h1 id="about-page-title">About me</h1>
	<div class="about-story">
		<p>I’m qloha. I build web apps, tools, and small projects.</p>
		<p>
			I’m interested in programming languages, compilers, and making software run faster. Most of my
			projects start with something I want to learn or try.
		</p>
	</div>
	<CurrentWork />
	<h2>What I use</h2>
	<div class="skills-grid">
		{#each skills as skill}<section class="skill-group">
				<h3>{skill.title}</h3>
				<div class="tags">
					{#each skill.items as item}<span>{item}</span>{/each}
				</div>
			</section>{/each}
	</div>
</section>
