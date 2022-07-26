import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/home',
},
{
    path: '/home',
    name: 'home',
    redirect: { name: 'main' },
    component: () =>
        import('@/views/home'),
    children: [{
        path: 'main',
        name: 'main',
        component: () =>
            import('@/views/home/main')
    }, {
        path: 'article',
        name: 'article',
        component: () =>
            import('@/views/home/article'),
    }]
},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from) => {
    console.log(`from:`, from);
    console.log(`to:`, to);

    if (to.path && to.path.length > 2 && to.path.toLowerCase().startsWith('/home') == false) {
        console.warn('not home');

        setTimeout(() => {
            console.warn('redirect to app.web3go.xyz');
            window.location.href = 'https://app.web3go.xyz/#' + to.path;
        }, 200);
    }

    return true
});

export default router