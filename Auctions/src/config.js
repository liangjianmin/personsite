const Home = resolve => require(['./views/home/Home.vue'], resolve)
const Details = resolve => require(['./views/shop/Details.vue'], resolve)
const Cart = resolve => require(['./views/shop/Cart.vue'], resolve)
const Classify = resolve => require(['./views/shop/Classify.vue'], resolve)
const Pay = resolve => require(['./views/pay/Pay.vue'], resolve)
export  default[
    {
        path: '/home',
        component: Home,
        name: '首页',
    },
    {
        path: '/cassify',
        component: Classify,
        name: '分类列表',
    },
    {
        path: '/details/:id',
        component: Details,
        name: '详情页面',
    },
    {
        path: '/cart',
        component: Cart,
        name: '购物车',
    },
    {
        path: '/pay',
        component: Pay,
        name: '支付页面',
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