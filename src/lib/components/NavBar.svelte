<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="relative z-20 p-6">
	<div class="max-w-5xl mx-auto flex items-center justify-between">
		<a href="/" class="text-2xl font-bold text-primary hover:text-secondary transition-colors">qloha</a>
		<div class="space-x-6">
			<a
				href="/"
				class="hover:text-secondary transition-colors { $page.url.pathname === '/' ? 'text-secondary' : 'text-zinc-300' }"
			>
				Home
			</a>
			<a
				href="/projects"
				class="hover:text-secondary transition-colors { $page.url.pathname === '/projects' ? 'text-secondary' : 'text-zinc-300' }"
			>
				Projects
			</a>
			<a
				href="/about"
				class="hover:text-secondary transition-colors { $page.url.pathname === '/about' ? 'text-secondary' : 'text-zinc-300' }"
			>
				About
			</a>
		</div>
	</div>
</nav>