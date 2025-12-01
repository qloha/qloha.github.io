<script lang="ts">
	export let content: string = "Hey — I'm a developer who builds web apps and tools. I enjoy creating small, well-crafted projects and learning new things.";
</script>

<section class="container mt-12">
	<div class="bg-neutral-800/40 border border-white/6 rounded-lg p-6">
		<div class="flex items-start gap-4">
			<div class="w-10 h-10 rounded-full bg-gradient-to-r from-sky-400 to-violet-400 flex items-center justify-center shrink-0">
				<svg viewBox="0 0 24 24" class="w-5 h-5 text-white" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4 7h16M4 12h10M4 17h16" stroke="rgba(255,255,255,0.95)" stroke-width="1.2" stroke-linecap="round"/>
				</svg>
			</div>
			<div>
				<h3 class="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400">About</h3>
				<p class="mt-2 text-[var(--muted)]">{content}</p>
				<div class="mt-4">
					<a href="/about" class="btn bg-[var(--accent)] text-black hover:opacity-95">Read more</a>
				</div>
			</div>
		</div>
	</div>
</section>
