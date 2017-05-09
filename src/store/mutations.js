import * as types from './type'

const state = {
    headShow: true,
    footerShow: true,
    loading: false,
    user: JSON.parse(sessionStorage.getItem('user')) || {},
}

const mutations = {
    /*header*/
    [types.HEAD_SHOW_SUCCESS](state){
        state.headShow = true;
    },
    [types.HEAD_SHOW_FAIL](state){
        state.headShow = false;
    },
    /*loading*/
    [types.HIDE_LOADING](state) {
        state.loading = false;
    },
    [types.SHOW_LOADING](state) {
        state.loading = true;
    },
    /*footer*/
    [types.FOOTER_SHOW](state){
        state.footerShow = true;
    },
    [types.FOOTER_HIDE](state){
        state.footerShow = false;
    },
    /*user*/
    [types.USER_SIGNIN](state, user) {
        sessionStorage.setItem('user', JSON.stringify(user));
        state.user=JSON.parse(sessionStorage.getItem('user'));
    },
    [types.USER_SIGNOUT](state) {
        sessionStorage.removeItem('user');
        state.user='';
    }
}

const getters = {
    headShow(state){
        return state.headShow
    },
    loading(state) {
        return state.loading;
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