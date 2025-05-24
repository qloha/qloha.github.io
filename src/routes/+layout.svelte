<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import NET from 'vanta/dist/vanta.net.min';
	import * as THREE from 'three';

	interface VantaElement extends HTMLDivElement {
		vantaEffect?: {
			destroy: () => void;
		};
	}

	let vantaRef: VantaElement;

	onMount(() => {
		vantaRef.vantaEffect = NET({
			el: vantaRef,
			THREE,
			mouseControls: true,
			touchControls: true,
			minHeight: 200.0,
			minWidth: 200.0,
			scale: 1.0,
			scaleMobile: 1.0,
			color: 0xff79c6,
			backgroundColor: 0x1a1b2f
		});

		return () => {
			if (vantaRef?.vantaEffect) {
				vantaRef.vantaEffect.destroy();
			}
		};
	});

	const preventSelection = (e: Event) => {
		e.preventDefault();
	};
</script>

<div
	bind:this={vantaRef}
	class="min-h-screen flex flex-col font-sans text-white relative z-0 select-none"
	on:mousedown={preventSelection}
	on:selectstart={preventSelection}
>
	<div class="absolute inset-0 -z-10" />

	<header class="border-b border-zinc-800 p-6 relative z-10 select-none bg-neutral-900/80 backdrop-blur-sm">
		<div class="max-w-5xl mx-auto flex items-center justify-between">
			<h1 class="text-2xl font-bold text-primary select-none hover:text-secondary transition-colors duration-300">
				qloha
			</h1>
			<nav class="space-x-6 select-none">
				<a href="/" class="text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-300">
					Home
				</a>
				<a href="/projects" class="text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-300">
					Projects
				</a>
				<a href="/about" class="text-zinc-300 hover:text-white hover:underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-all duration-300">
					About
				</a>
			</nav>
		</div>
	</header>

	<main class="max-w-5xl mx-auto p-6 flex-grow relative z-10 select-none">
		<slot />
	</main>

	<footer class="border-t border-zinc-800 p-6 mt-auto relative z-10 select-none bg-neutral-900/80 backdrop-blur-sm">
		<div class="max-w-5xl mx-auto text-center">
			<p class="text-sm text-zinc-300">
				© 2025 qloha. All rights reserved.
			</p>
		</div>
	</footer>
</div>

<style>
    .select-none {
        user-select: none;
        -webkit-user-select: none;
    }
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
</style>