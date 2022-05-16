import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';
import MenuCarta from '../views/MenuCarta.vue';
import MenuDia from '../views/MenuDia.vue';
import CartaBebidas from '../views/CartaBebidas.vue';

const routes = [
    { path: '/', name: 'about', component: About },
    { path: '/main', name: 'main', component: MenuCarta },
    { path: '/main-drinks', name: 'main-drinks', component: CartaBebidas },
    { path: '/main-day', name: 'main-day', component: MenuDia },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;