<template>
  <div class="project-card hvr-grow">
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="repository" target="_blank" class="hvr-fade">Repository</a>
    <a :href="demo" target="_blank" class="hvr-fade">Demo</a>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    repository: String,
    demo: String,
  },
};
</script>

<style scoped>
.project-card {
  border: 1px solid #333;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  background-color: #1e1e1e;
  color: #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card a {
  display: inline-block;
  margin: 0 10px 0 0;
  padding: 10px 15px;
  background-color: #76c7c0;
  color: #121212;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.9em;
  font-weight: bold;
}

.project-card a:hover {
  background-color: #5aa49f;
}
</style>