import { createRouter, createWebHistory } from 'vue-router';

import About from '../components/About.vue';
import MenuCarta from '../components/MenuCarta.vue';
import MenuDegustacion from '../components/MenuDegustacion.vue';
import MenuDia from '../components/MenuDia.vue';
import CartaBebidas from '../components/CartaBebidas.vue';

const routes = [
    { path: '/', name: 'about', component: About },
    { path: '/carta', name: 'menu-carta', component: MenuCarta },
    { path: '/degustacion', name: 'menu-degustacion', component: MenuDegustacion },
    { path: '/carta-bebidas', name: 'carta-bebidas', component: CartaBebidas },
    { path: '/dia', name: 'menu-dia', component: MenuDia },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;