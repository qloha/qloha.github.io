<template>
  <section class="projects">
    <h2>Here are some of my projects</h2>
    <div class="project-grid">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :repository="project.repository"
          :demo="project.demo"
      />
    </div>
  </section>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: 'SmoothMath (SM) Documentation',
          description: 'Learn all about SmoothMath, a library for easier Python math calculations.',
          repository: 'https://github.com/qloha/SmoothMath',
          demo: 'https://qloha.github.io/SmoothMath-Docs',
        },
        {
          title: '&udm=14 Search',
          description: 'Tired of all the ads & AI popups in google? Use this website to search free without any of that annoying garbage!',
          repository: 'https://github.com/qloha/udm14',
          demo: 'https://qloha.github.io/udm14',
        },
        {
          title: 'Synze',
          description: 'A simple yet powerful interpreted programming language built in C++.',
          repository: 'https://github.com/SynzeLang/Synze',
          demo: 'https://SynzeLang.github.io/',
        }
      ],
    };
  },
};
</script>

<style scoped>
.projects {
  margin-top: 30px;
}

.projects h2 {
  text-align: center;
  font-size: 2em;
  color: #e0e0e0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
</style>