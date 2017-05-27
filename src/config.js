const Home = resolve => require(['./views/home/Home.vue'], resolve)  //ljm
const Adduser = resolve => require(['./views/user/User.vue'], resolve)//ljm
const Userlist = resolve => require(['./views/user/UserList.vue'], resolve)//ljm
const EditUser = resolve => require(['./views/user/EditUser.vue'], resolve)//ljm
const Login = resolve => require(['./views/user/Login.vue'], resolve)//ljm
const Publish = resolve => require(['./views/home/Publish.vue'], resolve)//ljm
const ShopSave = resolve => require(['./views/shop/ShopSave.vue'], resolve)//ljm
const Shoplist = resolve => require(['./views/shop/Shoplist.vue'], resolve)//ljm
const EditShop = resolve => require(['./views/shop/EditShop.vue'], resolve)//ljm
const Stock = resolve => require(['./views/stock/Stock.vue'], resolve)//ljm
const Order = resolve => require(['./views/order/Order.vue'], resolve)//ljm
const BannerAdd = resolve => require(['./views/banner/Addpic.vue'], resolve)//gan
const BannerList = resolve => require(['./views/banner/Piclist.vue'], resolve)//gan
export  default[
    {
        path: '/home',
        component: Home,
        name: '首页'
    },
    {
        path: '/adduser',
        component: Adduser,
        name: '增加用户'
    },
    {
        path: '/userlist',
        component: Userlist,
        name: '用户管理'
    },
    {
        path: '/editUser',
        component: EditUser,
        name: '编辑用户'
    },
    {
        path: '/publish',
        component: Publish,
        name: '发布'
    },
    {
        path: '/editshop',
        component: EditShop,
        name: '商品编辑'
    },
    {
        path: '/shopsave',
        component: ShopSave,
        name: '商品添加'
    },
    {
        path: '/shoplist',
        component: Shoplist,
        name: '商品管理'
    },
    {
        path: '/stock',
        component: Stock,
        name: '库存容量'
    },
    {
        path: '/banneradd',
        component: BannerAdd,
        name: '添加轮播图片'
    },
    {
        path: '/bannerlist',
        component: BannerList,
        name: '轮播图片列表'
    },
    {
        path: '/login',
        component: Login,
        name: '登录',
        meta: {auth: false}
    },
    {
        path: '/order',
        component: Order,
        name: '订单状态',
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
