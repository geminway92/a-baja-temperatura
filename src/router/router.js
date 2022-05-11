import { createRouter, createWebHistory } from 'vue-router';

import About from '../views/About.vue';
import MenuCarta from '../views/MenuCarta.vue';
import MenuDegustacion from '../views/MenuDegustacion.vue';
import MenuDia from '../views/MenuDia.vue';
import CartaBebidas from '../views/CartaBebidas.vue';

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