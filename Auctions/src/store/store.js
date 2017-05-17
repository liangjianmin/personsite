import Vue from 'vue'
import Vuex from 'vuex'
import mutations from  './mutations'
import actions from './actions'
import shop from './modules/shop'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        mutations,
        shop
    },
    actions
})