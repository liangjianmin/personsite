import Vue from 'vue'
import axios from 'axios'

const state = {
    newslist: [],
}

const mutations = {
    getnewdetai (state, payload) {
        state.newslist = payload.res
    }
}

const actions = {
    getnewdetai({commit}, payload){
        axios.get('http://localhost:8086/api/news?id=' + payload.queryStr).then(res => {
            commit({
                type: 'getnewdetai',
                res: res.data
            });
        },error=>{
            console.log('请启动node server')
        });
    }
}

export default {
    state,
    mutations,
    actions
}