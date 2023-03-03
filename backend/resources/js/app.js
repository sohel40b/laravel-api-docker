import './bootstrap';
import { createApp } from 'vue'
import router from './route.js'
import App from './layouts/App.vue'

createApp(App)
    .use(router)
    .mount('#app')
