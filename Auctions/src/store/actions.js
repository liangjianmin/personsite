import * as types from './type'
export default {
    /*header*/
    showhead: ({commit}) => {
        commit(types.HEAD_SHOW_SUCCESS);
    },
    hidehead: ({commit}) => {
        commit(types.HEAD_SHOW_FAIL);
    },
    /*loading*/
    hideLoading: ({commit}) => {
        commit(types.HIDE_LOADING)
    },
    showLoading: ({commit}) => {
        commit(types.SHOW_LOADING)
    },
    /*footer*/
    showfooter: ({commit}) => {
        commit(types.FOOTER_SHOW);
    },
    hidefooter: ({commit}) => {
        commit(types.FOOTER_HIDE);
    },
    /*User*/
    [types.USER_SIGNIN]({commit}, user) {
        commit(types.USER_SIGNIN, user)
    },
    [types.USER_SIGNOUT]({commit}) {
        commit(types.USER_SIGNOUT)
    }
}