import { createRouter, createWebHistory } from 'vue-router'
import NotFound from './components/NotFound.vue'
import Welcome from './components/Welcome.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import store from './store/index.js'

const routes = [
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
    {
        path: '/',
        name: 'Welcome',
        component: Welcome,
        meta:{
            auth:false
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta:{
            auth:false
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
            auth:false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta:{
            auth:true
        }
    },

];
const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to,from) =>{
    if(to.meta.auth && store.getters.getToken == 0){
        return { name : 'Login'}
    }
    if(to.meta.auth == false && store.getters.getToken != 0){
        return { name : 'Dashboard'}
    }
})

export default router;
