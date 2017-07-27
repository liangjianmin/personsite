import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routes from './config.js'
import stores from './store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import filters from './filters'


require('./assets/css/person.css');
Vue.use(VueRouter);
Vue.use(ElementUI);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.prototype.$http = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = document.location.origin + '/';

const router = new VueRouter({
  routes
});
router.afterEach((to, from, next) => {
  document.title = to.name;
});


new Vue({
  el: '#app',
  router,
  store: stores,
  render: h => h(App)
})
