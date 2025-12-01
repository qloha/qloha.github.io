<script lang="ts">
	export let title = 'qloha';
	export let subtitle = "I build things for the web — software, tools, and small projects.";
</script>

<section class="container py-12 md:py-20">
	<div class="max-w-2xl">
		<h1 class="text-5xl md:text-6xl font-semibold leading-tight">{title}</h1>
		<p class="mt-4 text-lg text-[var(--muted)]">{subtitle}</p>
		<div class="mt-6 flex items-center gap-4">
			<a href="/projects" class="btn bg-[var(--accent)] text-black hover:opacity-95">See Projects</a>
			<a href="/about" class="text-sm text-[var(--muted)] hover:text-[var(--text)]">About me</a>
		</div>
	</div>
</section>
