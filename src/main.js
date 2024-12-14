import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import About from './views/About.vue';
import App from "@/App.vue";
import 'hover.css';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/projects', component: Projects },
        { path: '/about', component: About },
    ],
});

createApp(App).use(router).mount('#app');