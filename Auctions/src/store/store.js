import Vue from 'vue'
import Vuex from 'vuex'
import mutations from  './mutations'
import actions from './actions'
import follow from './modules/follow'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        mutations,
        follow,
        home
    },
    actions
})