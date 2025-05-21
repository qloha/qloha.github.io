interface Project {
	title: string;
	description: string;
	repository: string;
	demo: string;
	tags?: string[];
}

export const projects: Project[] = [
	{
		title: 'My Website',
		description: 'This is my website',
		repository: 'https://github.com/qloha/qloha.github.io',
		demo: 'https://qloha.github.io',
		tags: ['TypeScript', 'Svelte']
	},
	{
		title: 'Synze',
		description: 'An easy to use programming language',
		repository: 'https://github.com/SynzeLang/Synze',
		demo: 'https://synzelang.github.io/',
		tags: ['C++']
	},
	{
		title: 'Decibel Detector',
		description: 'Detects decibels',
		repository: 'https://github.com/qloha/decibel-detector',
		demo: 'https://github.com/qloha/decibel-detector/releases/download/v1.0.0/deci-detect.exe',
		tags: ['C++']
	},
	{
		title: 'SmoothMath Docs',
		description: 'SmoothMath Python package documentation',
		repository: 'https://github.com/qloha/SmoothMath-Docs',
		demo: 'https://qloha.github.io/SmoothMath-Docs/',
		tags: ['Vite.js', 'TypeScript']
	},
];