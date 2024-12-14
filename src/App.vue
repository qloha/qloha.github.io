<template>
  <div id="app">
    <div class="content-wrapper">
      <Header />
      <main class="content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #e0e0e0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  flex: 1;
}

main.content {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

a {
  color: #76c7c0;
  text-decoration: none;
  position: relative;
}

a:hover {
  color: #5aa49f;
}

footer {
  background-color: #1e1e1e;
  color: #e0e0e0;
  text-align: center;
  padding: 10px 20px;
  font-size: 0.9em;
  border-top: 1px solid #333333;
}

footer a {
  color: #76c7c0;
  text-decoration: none;
}

footer a:hover {
  color: #5aa49f;
}
</style>