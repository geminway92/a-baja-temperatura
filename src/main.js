import { createApp } from 'vue'
import Toast from "vue-toastification";
import App from './App.vue'
import router from './router/router';


createApp(App).use(router).use(Toast).mount('#app')
