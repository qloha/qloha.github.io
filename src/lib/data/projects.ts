interface Project {
	title: string;
	description: string;
	repository: string;
	demo: string;
	tags?: string[];
}

export const projects: Project[] = [
	{
		title: 'Project Name',
		description: 'Short summary of the project and its purpose.',
		repository: 'https://github.com/qloha/project-name',
		demo: 'https://project-demo.com',
		tags: ['TypeScript', 'Svelte']
	},
	{
		title: 'Another Project',
		description: 'Another interesting thing I built.',
		repository: '#',
		demo: '#',
		tags: ['JavaScript', 'React']
	}
];