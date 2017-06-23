const Home = resolve => require(['./views/home/Home.vue'], resolve)
const Details = resolve => require(['./views/shop/Details.vue'], resolve)
const Cart = resolve => require(['./views/shop/Cart.vue'], resolve)
const CartS = resolve => require(['./views/shop/Cars.vue'], resolve)
const Classify = resolve => require(['./views/shop/Classify.vue'], resolve)
const Pay = resolve => require(['./views/pay/Pay.vue'], resolve)
const Login = resolve => require(['./views/user/Login.vue'], resolve)
const Register = resolve => require(['./views/user/Register.vue'], resolve)
const Order = resolve => require(['./views/order/Order.vue'], resolve)
const Setting = resolve => require(['./views/user/Setting.vue'], resolve)
const WapHome = resolve => require(['./wap/Home.vue'], resolve)
export  default[
    {
        path: '/home',
        component: Home,
        name: '首页'
    },
    {
        path: '/cassify',
        component: Classify,
        name: '分类列表'
    },
    {
        path: '/login',
        component: Login,
        name: '登录'
    },
    {
        path: '/register',
        component: Register,
        name: '注册'
    },
    {
        path: '/details/:id',
        component: Details,
        name: '详情页面'
    },
    {
        path: '/cart',
        component: Cart,
        name: '购物车'
    },
    {
        path: '/carts',
        component: CartS,
        name: '购物车'
    },
    {
        path: '/pay',
        component: Pay,
        name: '支付页面'
    },
    {
        path: '/order',
        component: Order,
        name: '订单页面'
    },
    {
        path: '/setting',
        component: Setting,
        name: '个人设置页面'
    },
    {
        path: '/wap',
        components: {
            wap: WapHome
        },
        name: 'wap首页'
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
