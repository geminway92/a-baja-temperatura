import { createApp } from 'vue'
import Toast from "vue-toastification";
import App from './App.vue'
import router from './router/router';
import i18n from './i18n'


createApp(App).use(router).use(i18n).use(Toast).mount('#app')
