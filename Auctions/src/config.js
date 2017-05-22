const Home = resolve => require(['./views/home/Home.vue'], resolve)
const Details = resolve => require(['./views/shop/Details.vue'], resolve)
export  default[
    {
        path: '/home',
        component: Home,
        name: '首页',
    },
    {
        path: '/details/:id',
        component: Details,
        name: '详情页面',
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        redirect: '/home'
    }
];