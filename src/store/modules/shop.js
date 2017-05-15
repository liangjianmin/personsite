import Vue from 'vue'
import axios from 'axios'

const state = {
  shoplist:{}
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
}

const actions = {
  shop({commit}, payload){
    axios.get('shoplist?p=' + payload.queryStr).then(res => {
      commit({
        type: 'shop',
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
