import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue'),
        redirect: 'Classroom',
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
    }
]
const history = createWebHistory()
const router = createRouter({
    routes,
    history,
    linkActiveClass: '',
    linkExactActiveClass: 'active'
})

export default router