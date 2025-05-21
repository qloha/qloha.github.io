import type { LayoutLoad } from './$types';
export const prerender = true;
export const ssr = false;

export const load: LayoutLoad = async () => {
	return {
		title: 'qloha | Portfolio',
		description: 'Developer portfolio for qloha - creative coder, toolmaker, and builder.',
	};
};