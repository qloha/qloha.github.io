import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#4f46e5',
				accent: '#06b6d4', // cyan accent similar to baylor.dev
				bg: '#0b1020'
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui'],
			},
		},
	},
	plugins: [typography],
};
