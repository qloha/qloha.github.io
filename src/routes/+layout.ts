import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	return {
		title: 'qloha | Portfolio',
		description: 'Developer portfolio for qloha - creative coder, toolmaker, and builder.',
	};
};