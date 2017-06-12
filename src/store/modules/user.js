import Vue from 'vue'
import axios from 'axios'

const state = {
    userlist: {},
    userid: [],
    sessiondata:''
}

const mutations = {
    user (state, payload) {
        for (var i = 0; i < payload.res.list.data.length; i++) {
            if (payload.res.list.data[i].sex == '1') {
                payload.res.list.data[i].sex = '女'
            } else {
                payload.res.list.data[i].sex = '男'
            }
            if (payload.res.list.data[i].role == '0') {
                payload.res.list.data[i].role = '超级管理员'
            } else if (payload.res.list.data[i].role == '1') {
                payload.res.list.data[i].role = '管理员'
            } else {
                payload.res.list.data[i].role = '普通用户'
            }
        }
        state.userlist = payload.res;
    },
    userId(state, payload){
        state.userid = payload.res;
    },
    getsession(state, payload){
        state.sessiondata = payload.res;
    },
    exit(state, payload){
        state.sessiondata = payload.res;
    },
}

const actions = {
    user({commit}, payload){
        axios.get('pages?p=' + payload.queryStr).then(res => {
            commit({
                type: 'user',
                res: res.data
            })
        }, error => {
            console.log('请启动node server')
        });
    },
    userId({commit}, payload){
        axios.get('getuser?id=' + payload.queryStr).then(res => {
            commit({
                type: 'userId',
                res: res.data,
                id: payload.queryStr
            })
        }, error => {
            console.log('请启动node server')
        });
    },
    getsession({commit}, payload){
        axios.post('session').then(res => {
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
