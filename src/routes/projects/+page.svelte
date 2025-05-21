<script lang="ts">
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';
	import { projects } from '$lib/data/projects';

	let cardEls: HTMLElement[] = [];

	onMount(() => {
		cardEls.forEach((card) => {
			if (card) {
				VanillaTilt.init(card, {
					max: 8,
					speed: 300,
					glare: true,
					'max-glare': 0.15,
					scale: 1.03,
					perspective: 1000,
					easing: 'cubic-bezier(.03,.98,.52,.99)'
				});
			}
		});

		return () => {
			cardEls.forEach(card => {
				if (card && card.vanillaTilt) {
					card.vanillaTilt.destroy();
				}
			});
		};
	});
</script>

<div class="relative z-10 max-w-5xl mx-auto p-6">
	<h1 class="text-4xl font-bold text-primary mb-8">Projects</h1>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each projects as project, i}
			<div
				bind:this={cardEls[i]}
				class="bg-zinc-800/50 rounded-xl p-6 shadow-lg border border-zinc-700 hover:border-secondary transition-all transform-style-preserve-3d"
			>
				<div class="transform-preserve-3d">
					<h2 class="text-xl font-semibold text-primary">{project.title}</h2>
					<p class="text-zinc-300 mt-3 text-sm">{project.description}</p>
					<div class="mt-4 flex gap-4">
						<a
							href={project.repository}
							class="text-secondary hover:underline hover:text-primary transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Repository
						</a>
						<a
							href={project.demo}
							class="text-secondary hover:underline hover:text-primary transition-colors"
							target="_blank"
							rel="noopener noreferrer"
						>
							Demo
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
    .transform-style-preserve-3d {
        transform-style: preserve-3d;
    }
    .transform-preserve-3d {
        transform: translateZ(20px);
    }
</style>