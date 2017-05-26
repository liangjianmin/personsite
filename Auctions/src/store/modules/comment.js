import Vue from 'vue'
import axios from 'axios'

const state = {
    commentlist: {}
}

const mutations = {
    /**
     * 获取评论列表
     * @param state
     * @param payload
     */
    comment(state, payload){
        state.commentlist = payload.res.comment;
    }
}

const actions = {
    comment({commit}, payload){
        axios.get('getshop?id=' + payload.queryStr).then(res => {
            commit({
                type: 'comment',
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
