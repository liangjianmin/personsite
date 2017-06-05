import Vue from 'vue'
import axios from 'axios'

const state = {
    sessiondata:''
}

const mutations = {
    getsession(state, payload){
        state.sessiondata = payload.res;
    },
    exit(state, payload){
        state.sessiondata = payload.res;
    },
}

const actions = {
    getsession({commit}, payload){
        axios.post('sessions',{
            flag:'client'
        }).then(res => {
            commit({
                type: 'getsession',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    },
    exit({commit}, payload){
        axios.post('exit').then(res => {
            commit({
                type: 'exit',
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
