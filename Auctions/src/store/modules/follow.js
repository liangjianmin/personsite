import Vue from 'vue'
import axios from 'axios'

const state = {
    queryRes_movie: [],
    queryRes_news: [],
}

const mutations = {
    query (state, payload) {
        switch (payload.tage) {
            case 'news':
                state.queryRes_news = payload.res
                break
            case 'movice':
                state.queryRes_movie = payload.res
                break
            default:
        }
    }
}

const actions = {
    query({commit}, payload){
        switch (payload.queryStr) {
            case 'news':
                axios.get('http://localhost:8086/api/themes').then(res => {
                    commit({
                        type: 'query',
                        tage: 'news',
                        res: res.data.others
                    });
                }, error => {
                    console.log('请启动node server')
                });
                break
            case 'movice':
                axios.get('http://localhost:3000/page').then(res => {
                	
                	console.log(res)
                   /* commit({
                        type: 'query',
                        tage: 'movice',
                        res: res.data.stories
                    });*/
                }, error => {
                    console.log('请启动node server')
                });
                break
            default:
        }
    }
}

export default {
    state,
    mutations,
    actions
}