<template>
  <section class="about">
    <h2>About Me</h2>
    <p>
      Hi, I'm qloha! Welcome to my portfolio. This website is a space where I share
      some of my favorite web projects, programming experiments, and ideas. If you're
      here, you're probably curious about what I do—and that's awesome!
    </p>
    <p>
      I enjoy building tools, experimenting with new technologies, and crafting
      user-friendly applications. Whether it's a compiler, a random string generator, or
      documentation for developers, I aim to create things that are as functional as they
      are fun to use.
    </p>
    <p>
      Feel free to check out my projects or connect with me. Thanks for stopping by!
    </p>

    <h2>My Skills</h2>
    <ul class="skills">
      <li><strong>Languages:</strong> HTML, CSS, JavaScript, Java, Python, C++, Kotlin</li>
      <li><strong>Frontend Frameworks:</strong> Vue.js, React</li>
      <li><strong>Backend:</strong> Node.js, Express.js, Flask</li>
      <li><strong>Tools & Technologies:</strong> Git, WebStorm, Pear AI, IntelliJ Idea</li>
      <li><strong>Other:</strong> API integration, Compiler development, Random utilities</li>
    </ul>
  </section>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  color: #e0e0e0;
  font-size: 1.2em;
  line-height: 1.8;
  animation: fadeIn 0.5s ease-in-out;
}

.about h2 {
  text-align: center;
  color: #76c7c0;
  font-size: 2em;
  margin-bottom: 20px;
}

.about p {
  margin-bottom: 15px;
  text-align: justify;
}

.skills {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.skills li {
  margin-bottom: 10px;
  background: #292929;
  padding: 10px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.skills li strong {
  color: #76c7c0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>