import Vue from 'vue'
import Vuex from 'vuex'
import mutations from  './mutations'
import actions from './actions'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        mutations,
        user
    },
    actions
})