import Vue from 'vue'
import axios from 'axios'

const state = {
    typeshop: {}
};

const mutations = {
    /**
     * 获取分类列表
     * @param state
     * @param payload
     */
    typeshop(state, payload){
        state.typeshop = payload.res;
    }
}

const actions = {
    typeshop({commit}, payload){
        axios.get('shoplist', {
            params: {
                p: payload.queryStr.p,
                type: payload.queryStr.type
            }
        }).then(res => {
            commit({
                type: 'typeshop',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    }
}

const getters = {}

export default {
    state,
    mutations,
    getters,
    actions
}
