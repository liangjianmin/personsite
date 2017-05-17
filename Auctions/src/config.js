const Home = resolve => require(['./views/home/Home.vue'], resolve)
export  default[
    {
        path: '/home',
        component: Home,
        name: '首页',
    },
    {
        path: '/',
        redirect: '/home'
    }, {
        path: '*',
        redirect: '/home'
    }
];