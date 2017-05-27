import * as types from './type'

const state = {
    headShow: true,
    footerShow: true
}

const mutations = {
    /*header*/
    [types.HEAD_SHOW_SUCCESS](state){
        state.headShow = true;
    },
    [types.HEAD_SHOW_FAIL](state){
        state.headShow = false;
    },
    /*footer*/
    [types.FOOTER_SHOW](state){
        state.footerShow = true;
    },
    [types.FOOTER_HIDE](state){
        state.footerShow = false;
    }
}

const getters = {
    headShow(state){
        return state.headShow
    },
    footerShow(state){
        return state.footerShow;
    }
}

export default {
    state,
    mutations,
    getters
}