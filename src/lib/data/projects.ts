export interface Project {
	id: string;
	title: string;
	description: string;
	repository: string;
	demo?: string;
	linkLabel?: string;
	category: 'Web' | 'Languages' | 'Tools' | 'Minecraft' | 'Games';
	tags: string[];
}
export const projects: Project[] = [
	{
		id: 'synze',
		title: 'Synze',
		description: 'A programming language written in C++.',
		repository: 'https://github.com/SynzeLang/Synze',
		demo: 'https://synzelang.github.io/',
		linkLabel: 'Website',
		category: 'Languages',
		tags: ['C++', 'Language design']
	},
	{
		id: 'portfolio',
		title: 'My Website',
		description: 'This website, built with Svelte and TypeScript.',
		repository: 'https://github.com/qloha/qloha.github.io',
		demo: 'https://qloha.dev',
		linkLabel: 'Visit website',
		category: 'Web',
		tags: ['Svelte', 'TypeScript']
	},
	{
		id: 'decibel',
		title: 'Decibel Detector',
		description: 'A tool for measuring sound levels.',
		repository: 'https://github.com/qloha/decibel-detector',
		demo: 'https://github.com/qloha/decibel-detector/releases/',
		linkLabel: 'View releases',
		category: 'Tools',
		tags: ['C++', 'Audio']
	},
	{
		id: 'smoothmath',
		title: 'SmoothMath Docs',
		description: 'Documentation for the SmoothMath Python package.',
		repository: 'https://github.com/qloha/SmoothMath-Docs',
		demo: 'https://qloha.github.io/SmoothMath-Docs/',
		linkLabel: 'Read the docs',
		category: 'Web',
		tags: ['Vite', 'TypeScript', 'Documentation']
	},
	{
		id: 'skloha',
		title: 'SkLoha',
		description: 'A Skript addon for Minecraft that adds scenes and other features.',
		repository: 'https://github.com/qloha/SkLoha',
		demo: 'https://github.com/qloha/SkLoha/releases/',
		linkLabel: 'View releases',
		category: 'Minecraft',
		tags: ['Java', 'Skript']
	},
	{
		id: 'raven',
		title: 'Raven A+',
		description: 'A Java project with source code and releases on GitHub.',
		repository: 'https://github.com/Raven-APlus/RavenAPlus',
		demo: 'https://github.com/Raven-APlus/RavenAPlus/releases/',
		linkLabel: 'View releases',
		category: 'Minecraft',
		tags: ['Java']
	},
	{
		id: 'seemore',
		title: 'seemore',
		description: 'A Minecraft mod for Seymour stuff.',
		repository: 'https://github.com/qloha/seemore',
		category: 'Minecraft',
		tags: ['Minecraft']
	},
	{
		id: 'pew-pew-pew',
		title: 'pew-pew-pew',
		description: 'A shooter game built with HTML.',
		repository: 'https://github.com/qloha/pew-pew-pew',
		category: 'Games',
		tags: ['HTML']
	},
	{
		id: 'betteremotes',
		title: 'BetterEmotes',
		description: 'A Minecraft mod that adds chat emotes.',
		repository: 'https://github.com/qloha/BetterEmotes',
		demo: 'https://www.curseforge.com/minecraft/mc-mods/better-emotes',
		linkLabel: 'Get the mod',
		category: 'Minecraft',
		tags: ['Java', 'Minecraft']
	},
	{
		id: 'randomstr',
		title: 'RandomStr',
		description: 'A random string generator.',
		repository: 'https://github.com/qloha/RandomStr',
		category: 'Tools',
		tags: []
	}
];
