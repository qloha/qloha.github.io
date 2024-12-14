<template>
  <section class="projects">
    <h2>Here are some of my web projects:</h2>
    <div class="project-grid">
      <ProjectCard
          v-for="(project, index) in projects"
          :key="index"
          :title="project.title"
          :description="project.description"
          :link="project.link"
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
          link: 'https://qloha.github.io/smoothmath',
        },
        {
          title: 'RandomStr',
          description: 'Generate random strings for your Python projects easily.',
          link: 'https://qloha.github.io/randomstr',
        },
        {
          title: 'Synze',
          description: 'A simple yet powerful interpreted programming language built in C++.',
          link: 'https://SynzeLang.github.io/',
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