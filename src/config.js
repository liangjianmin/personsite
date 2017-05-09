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
