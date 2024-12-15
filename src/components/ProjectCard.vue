<template>
  <div class="project-card">
    <div class="project-card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a :href="repository" target="_blank" class="project-link">Repository</a>
      <a :href="demo" target="_blank" class="project-link">Demo</a>
    </div>
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
  position: relative;
  background: #1e1e1e;
  color: #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  transform: skewX(-20deg);
  transition: left 1.5s ease;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.5);
}

.project-card-content {
  position: relative;
  z-index: 1;
}

.project-link {
  display: inline-block;
  margin: 10px 10px 0 0;
  padding: 10px 15px;
  background-color: #76c7c0;
  color: #121212;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.9em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #5aa49f;
}
</style>