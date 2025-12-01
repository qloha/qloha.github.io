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
		demo: 'https://qloha.dev',
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
		demo: 'https://github.com/qloha/decibel-detector/releases/',
		tags: ['C++']
	},
	{
		title: 'SmoothMath Docs',
		description: 'SmoothMath Python package documentation',
		repository: 'https://github.com/qloha/SmoothMath-Docs',
		demo: 'https://qloha.github.io/SmoothMath-Docs/',
		tags: ['Vite.js', 'TypeScript']
	},
	{
		title: 'SkLoha',
		description: 'A Skript addon that adds scenes & more!',
		repository: 'https://github.com/qloha/SkLoha',
		demo: 'https://github.com/qloha/SkLoha/releases/',
		tags: ['Java']
	},
	{
		title: 'Raven A+',
		description: 'Raven A+ :o',
		repository: 'https://github.com/Raven-APlus/RavenAPlus',
		demo: 'https://github.com/Raven-APlus/RavenAPlus/releases/',
		tags: ['Java']
	},
];