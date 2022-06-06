import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router