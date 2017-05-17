<template>
  <el-menu theme="dark" default-active="1" class="el-menu-nav" mode="horizontal" :router="true">
    <el-submenu index="1">
      <template slot="title">{{user.session}} {{user.role | roleFormat}}</template>
      <el-menu-item index="/userlist" v-if="user.role == 0 || user.role == 1" >系统设置</el-menu-item>
      <el-menu-item index="/login" @click="handleSelect">退出</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<style>

</style>
<script>
  import {mapState} from 'vuex'
  export default{
    name: 'nav',
    data(){
      return {}
    },
    computed: mapState({
      user: state => state.user.sessiondata
    }),
    mounted(){
      this.getSession();
    },
    methods: {
      getSession(){
        this.$store.dispatch({
          type: 'getsession'
        })
      },
      handleSelect() {
        this.$store.dispatch({
          type: 'exit'
        })
      }
    }
  }
</script>
