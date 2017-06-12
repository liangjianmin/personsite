import Vue from 'vue'
import axios from 'axios'

const state = {
    orderdata: {},
}

const mutations = {
    /**
     * 用户订单数据
     * @param state
     * @param payload
     */
    order(state, payload){
        state.orderdata = payload.res;
    }
}

const actions = {
    order({commit}, payload){
        axios.get('order', {
            params: {
                userid:payload.queryStr.userid,
                p: payload.queryStr.p,
                type: payload.queryStr.type
            }
        }).then(res => {
            commit({
                type: 'order',
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
