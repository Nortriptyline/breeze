import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ForgotPassword from '../views/password/Forgot'
import ResetPassword from '../views/password/Reset'
import store from '../store';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Landing',
        component: Landing,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/password/forgot',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: {
            requiresGuest: true,
        }
    },
    {
        path: '/password/reset/:token',
        name: 'ResetPassword',
        component: ResetPassword,
        props: true,
        meta: {
            requiresGuest: true
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'active',
    routes
});

router.beforeEach((to, from, next) => {
    // Check user authentication status on every page
    store.dispatch('auth/synchronize')
    store.dispatch('general/removeErrors')

    // User must be a guest (Example: login page)
    if (to.matched.some(record => record.meta.requiresGuest)) {
        if (localStorage.getItem('user') != null) {
            next({ name: 'Landing' })
        } else {
            next()
        }
    // User must be authenticated
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('user') == null) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;