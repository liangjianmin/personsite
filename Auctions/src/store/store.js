import Vue from 'vue'
import Vuex from 'vuex'
import mutations from  './mutations'
import actions from './actions'
import shop from './modules/shop'
import order from './modules/order'
import comment from './modules/comment'
import user from './modules/user'
import wapshop from './modules/wap/wap-shop'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        mutations,
        order,
        shop,
        comment,
        user,
        wapshop
    },
    actions
})
