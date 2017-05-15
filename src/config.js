const Home = resolve => {
    require.ensure(['./components/Home.vue'], () => {
        resolve(require('./components/Home.vue'))
    })
}
const Adduser = resolve => {
    require.ensure(['./components/User.vue'], () => {
        resolve(require('./components/User.vue'))
    })
}
const Userlist = resolve => {
    require.ensure(['./components/Userlist.vue'], () => {
        resolve(require('./components/Userlist.vue'))
    })
}
const EditUser = resolve => {
    require.ensure(['./components/EditUser.vue'], () => {
        resolve(require('./components/EditUser.vue'))
    })
}
const Login = resolve => {
    require.ensure(['./components/Login.vue'], () => {
        resolve(require('./components/Login.vue'))
    })
}
const Publish = resolve => {
    require.ensure(['./components/Publish.vue'], () => {
        resolve(require('./components/Publish.vue'))
    })
}
const ShopSave = resolve => {
    require.ensure(['./components/ShopSave.vue'], () => {
        resolve(require('./components/ShopSave.vue'))
    })
}
const Shoplist = resolve => {
    require.ensure(['./components/Shoplist.vue'], () => {
        resolve(require('./components/Shoplist.vue'))
    })
}
const EditShop = resolve => {
    require.ensure(['./components/EditShop.vue'], () => {
        resolve(require('./components/EditShop.vue'))
    })
}
const Stock = resolve => {
    require.ensure(['./components/Stock.vue'], () => {
        resolve(require('./components/Stock.vue'))
    })
}
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
        /**
         * ljm
         */
        path: '/editshop',
        component: EditShop,
        name: '商品编辑'
    },
    {
        /**
         * ljm
         */
        path: '/shopsave',
        component: ShopSave,
        name: '商品添加'
    },
    {
        /**
         * ljm
         */
        path: '/shoplist',
        component: Shoplist,
        name: '商品管理'
    },
    {
        /**
         * ljm
         */
        path: '/stock',
        component: Stock,
        name: '库存容量'
    },
    {
        path: '/login',
        component: Login,
        name: '登录',
        meta: {auth: false}
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
