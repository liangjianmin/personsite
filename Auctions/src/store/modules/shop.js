import Vue from 'vue'
import axios from 'axios'

const state = {
    shoplist: {},
    stock: {},
    typeshop: {},
    searchdata:{},
    shopdata:{
      imgid:'',
      num:0,
      price:0,
    },
    shoplistdata:[]
  /* 数据格式
  * shoplistdata:[
  *     {
  *       shopid:id,
  *       num:2
  *     }
  *   ]
  * */
};

const mutations = {
    /**
    * 购物车商品数量
    *
    *
    */
    shopNubAdd(state,payload ){
      state.shopdata=payload.res
    },
    /**
     *存购物车数据
     * */
    shoplistdata(state,payload){
      state.shoplistdata=payload.data
    },
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
    /**
     * 搜索数据
     * @param state
     * @param payload
     */
    searchshop(state, payload){
        state.typeshop = payload.res;
    },
    /**
     * 临时保存搜索数据
     * @param state
     * @param payload
     */
    search(state, payload){
        state.searchdata = payload.res;
    }
}

const actions = {
  shopNubAdd({commit}, payload){
    axios.post('getshopdata').then(res=>{
      commit({
        type:'shopNubAdd',
        res:res.data
      })
    })
  },
  shoplistdata({commit},payload){

  },
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
    },
    searchshop({commit}, payload){
        axios.get('search', {
            params: {
                p: payload.queryStr.p,
                like: payload.queryStr.like
            }
        }).then(res => {
            commit({
                type: 'searchshop',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    },
    search({commit}, payload){
        commit({
            type: 'search',
            res: payload.queryStr
        })
    }
}

const getters = {}

export default {
    state,
    mutations,
    getters,
    actions
}
