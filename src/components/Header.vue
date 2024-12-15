<template>
  <header class="header">
    <div class="logo"><router-link to="/">qloha</router-link></div>
    <nav>
      <ul class="nav-links">
        <li><router-link to="/" class="hvr-underline-from-right">Home</router-link></li>
        <li><router-link to="/projects" class="hvr-underline-from-center">Projects</router-link></li>
        <li><router-link to="/about" class="hvr-underline-from-left">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #1e1e1e;
  color: #e0e0e0;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  color: #76c7c0;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: #e0e0e0;
  font-size: 1em;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #76c7c0;
}
</style>