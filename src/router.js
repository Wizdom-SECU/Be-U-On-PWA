import { createRouter, createWebHistory } from 'vue-router'
import {auth} from './firebase'
const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('./views/Home.vue'),
        redirect: { name: 'Classroom' },
        children: [
            {
                name: 'Classroom',
                path: 'classroom',
                component: () => import('./views/Classroom.vue'),
            },
            {
                name: 'Tracking',
                path: 'tracking',
                component: () => import('./views/Tracking.vue'),
            },
            {
                name: 'Profile',
                path: 'profile',
                component: () => import('./views/Profile.vue'),
            }
        ]
    },
    {
        name: 'SignIn',
        path: '/signin',
        component: () => import('./views/SignIn.vue')
    },
    {
        name: 'OTP',
        path: '/otp',
        component: () => import('./views/OTP.vue')
    }
]
const history = createWebHistory()
const router = createRouter({
    routes,
    history,
    linkActiveClass: '',
    linkExactActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
    let user = auth.currentUser
    if (user) {
        const {displayName, email, emailVerified, getIdTokenResult} = user
        console.debug(user)
        console.log(displayName, email, emailVerified )
        if (to.name === 'SignIn') next({ name: 'Home' })
        else {
            next()
        }
    } else {
        console.debug('invalid user')
    }
    next()
})
export default router