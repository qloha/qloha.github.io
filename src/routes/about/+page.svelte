<script lang="ts">
	import About from '$lib/components/About.svelte';
	import SkillBadge from '$lib/components/SkillBadge.svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let mounted = false;
	onMount(() => {
		// small delay so underline animation feels staged after enter
		setTimeout(() => (mounted = true), 120);
	});
</script>

<About content="Welcome — I'm a developer who builds web apps, tools, and small projects. I enjoy exploring languages, compilers, and performance-sensitive systems. This site showcases a selection of my work and experiments." />

<section class="container mt-8">
	<div class="prose prose-invert text-[var(--muted)]">
		<!-- Animated, styled heading -->
		<div class={`section-header ${mounted ? 'mounted' : ''}`}>
			<h2 in:fly={{ y: 8, duration: 420 }} class="flex items-center gap-3 text-2xl md:text-3xl font-extrabold leading-tight">
				<!-- small icon -->
				<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="10" fill="url(#g)" />
					<path d="M7 12h10M7 16h10" stroke="rgba(255,255,255,0.9)" stroke-width="1.2" stroke-linecap="round"/>
					<defs>
						<linearGradient id="g" x1="0" x2="1">
							<stop offset="0%" stop-color="#06b6d4" />
							<stop offset="100%" stop-color="#8b5cf6" />
						</linearGradient>
					</defs>
				</svg>
				<span class="section-title">Skills &amp; Tools</span>
			</h2>

			<!-- underline handled by CSS; left for spacing -->
			<span aria-hidden="true" class="block mt-2"></span>
		</div>

		<!-- card wrapper to match site style -->
		<div class="bg-neutral-800/40 border border-white/6 rounded-lg p-6 mt-6">
			<div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
				<div>
					<h4 class="text-sm font-semibold text-[var(--text)] mb-1">Languages</h4>
					<p class="text-xs text-[var(--muted-2)] mb-3">Core languages I write production and experimental code in.</p>
					<div class="flex flex-wrap gap-2">
						<SkillBadge label="TypeScript">
							<span slot="icon">
								<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6"/>
									<path d="M8 6h8v12H8z" fill="white" opacity="0.06"/>
									<path d="M9.5 8.5v7h1.6v-2.9l1.2.8 1.2-.8V15.5h1.6v-7h-1.6v2.5l-1.2.8-1.2-.8V8.5h-1.6z" fill="white"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="JavaScript">
							<span slot="icon">
								<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E"/>
									<path d="M8.4 7.7l1.1.7c.2-.3.4-.5.8-.5.4 0 .7.2.7.6 0 .4-.2.6-.8.9l-.6.3c-.9.5-1.5 1.2-1.5 2.6 0 1.7 1 2.8 2.6 2.8 1.4 0 2.3-.7 2.7-1.5l-1-0.6c-.2.4-.6.9-1.4.9-.7 0-1.2-.4-1.2-1 0-.6.4-.9 1.2-1.3l.6-.3c1-.5 1.6-1.2 1.6-2.5 0-1.4-1-2.4-2.5-2.4-1.4 0-2.4.8-2.8 1.9z" fill="#000" opacity="0.9"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Python">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M12 2c2 0 3.5 1 4.5 2.2 1 1.2 1.5 3 1.5 4.8v1H7V6c0-1.8.4-3.6 1.5-4.8C9.5 1 11 0 13 0h-1z" fill="#3776AB"/>
									<circle cx="16.5" cy="6.5" r="0.8" fill="#FFD43B"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="C++">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<rect x="2" y="2" width="20" height="20" rx="3" fill="#00599C"/>
									<text x="6" y="16" fill="white" font-size="10" font-family="monospace">C++</text>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="C">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<rect x="2" y="2" width="20" height="20" rx="3" fill="#A8B9CC"/>
									<text x="8" y="16" fill="black" font-size="10" font-family="monospace">C</text>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Java / Kotlin">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<circle cx="12" cy="12" r="9" fill="#7F52FF"/>
									<text x="6" y="16" fill="white" font-size="8" font-family="monospace">J/K</text>
								</svg>
							</span>
						</SkillBadge>
					</div>
				</div>

				<div>
					<h4 class="text-sm font-semibold text-[var(--text)] mb-1">Frontend</h4>
					<p class="text-xs text-[var(--muted-2)] mb-3">Frameworks and tools I use to build interfaces and UI-focused apps.</p>
					<div class="flex flex-wrap gap-2">
						<SkillBadge label="Svelte">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<circle cx="12" cy="12" r="9" fill="#FF3E00"/>
									<path d="M7 12c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5z" fill="#fff" opacity="0.06"/>
									<text x="8" y="15" fill="white" font-size="8" font-family="monospace">S</text>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="React">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<g fill="#61DAFB">
										<ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(60 12 12)"/>
										<ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(-60 12 12)"/>
										<circle cx="12" cy="12" r="1.2" fill="#61DAFB"/>
									</g>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Vite">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<circle cx="12" cy="12" r="9" fill="#646cff"/>
									<path d="M9 9l6 6M15 9l-6 6" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Next.js">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M3 3h18v18H3z" fill="#000" opacity="0.87"/>
									<path d="M10 17l7-10H7z" fill="white"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Nuxt.js">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M12 2l9 20H3z" fill="#00DC82"/>
									<path d="M12 2L3 22h18z" fill="white" opacity="0.87"/>
								</svg>
							</span>
						</SkillBadge>
					</div>
				</div>

				<div class="sm:col-span-2">
					<h4 class="text-sm font-semibold text-[var(--text)] mb-1">Tools & Workflow</h4>
					<p class="text-xs text-[var(--muted-2)] mb-3">Daily tools, editors, and CI/testing used to build and ship projects.</p>
					<div class="flex flex-wrap gap-2">
						<SkillBadge label="Git">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M12 2l9 20H3z" fill="#F1502F"/>
									<path d="M12 2L3 22h18z" fill="white" opacity="0.87"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Node.js">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M12 2l9 20H3z" fill="#8CC84B"/>
									<path d="M12 2L3 22h18z" fill="white" opacity="0.87"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="VS Code">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M3 3h18v18H3z" fill="#007ACC"/>
									<path d="M10 17l7-10H7z" fill="white"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="IntelliJ / WebStorm">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M3 3h18v18H3z" fill="#000"/>
									<path d="M10 17l7-10H7z" fill="white" opacity="0.87"/>
								</svg>
							</span>
						</SkillBadge>

						<SkillBadge label="Testing & CI">
							<span slot="icon">
								<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
									<path d="M3 3h18v18H3z" fill="#6C757D"/>
									<path d="M10 17l7-10H7z" fill="white" opacity="0.87"/>
								</svg>
							</span>
						</SkillBadge>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
