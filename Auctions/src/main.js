import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './config.js'
import stores from './store/store'
require('./assets/css/auction.css');

Vue.use(VueRouter);
Vue.use(ElementUI)

const router = new VueRouter({
    routes
});
router.afterEach((to, from, next) => {
    document.title = to.name;
})

Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = 'http://localhost:3000/';

new Vue({
    el: '#app',
    router,
    store: stores,
    render: h => h(App)
})