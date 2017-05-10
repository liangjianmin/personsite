const Home = resolve => {
    require.ensure(['./components/Home.vue'], () => {
        resolve(require('./components/Home.vue'))
    })
}
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