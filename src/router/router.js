import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';
import Main from '../views/Main.vue';
import MainDay from '../views/MainDay.vue';
import MainDrinks from '../views/MainDrinks.vue';

const routes = [
    { path: '/', name: 'about', component: About },
    { path: '/main', name: 'main', component: Main },
    { path: '/main-drinks', name: 'main-drinks', component: MainDrinks },
    { path: '/main-day', name: 'main-day', component: MainDay },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;