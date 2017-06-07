import * as types from './type'
export default {
    /*header*/
    showhead: ({commit}) => {
        commit(types.HEAD_SHOW_SUCCESS);
    },
    hidehead: ({commit}) => {
        commit(types.HEAD_SHOW_FAIL);
    },
    /*footer*/
    showfooter: ({commit}) => {
        commit(types.FOOTER_SHOW);
    },
    hidefooter: ({commit}) => {
        commit(types.FOOTER_HIDE);
    },
    /*flag*/
    flagesuccess: ({commit}) => {
        commit(types.FLAG_SUCCESS);
    },
    flagfail: ({commit}) => {
        commit(types.FLAG_FAIL);
    },
}