import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),
		paths: {
			base: '', // Keep empty for root deployment
			relative: false // The custom domain serves this site at the root.
		},
		appDir: 'app'
	}
};

export default config;
