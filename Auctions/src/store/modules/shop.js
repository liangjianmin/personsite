import Vue from 'vue'
import axios from 'axios'

const state = {
    shoplist: {},
    stock: {},
    typeshop: {}
}

const mutations = {
    /**
     * 获取商品列表
     * @param state
     * @param payload
     */
    shop(state, payload){
        state.shoplist = payload.res;
    },
    /**
     * 获取库存数量
     * @param state
     * @param payload
     */
    stock(state, payload){
        state.stock = payload.res;
    },
    /**
     * 获取分类列表
     * @param state
     * @param payload
     */
    typeshop(state, payload){
        state.typeshop = payload.res;
    },
}

const actions = {
    shop({commit}, payload){
        axios.get('shoplist?p=1').then(res => {
            commit({
                type: 'shop',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    },
    stock({commit}, payload){
        axios.get('stock').then(res => {
            commit({
                type: 'stock',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    },
    typeshop({commit}, payload){
        axios.get('shoplist', {
            params: {
                p: payload.queryStr.p,
                type:payload.queryStr.type
            }
        }).then(res => {
            commit({
                type: 'typeshop',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    },
}

const getters = {}

export default {
    state,
    mutations,
    getters,
    actions
}
