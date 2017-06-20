import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import filters from './filters'
import routes from './config.js'
import stores from './store/store'
import Mint from 'mint-ui';
import 'element-ui/lib/theme-default/index.css'
import 'mint-ui/lib/style.css'

require('./assets/css/auction.css');


Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.use(Mint);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

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