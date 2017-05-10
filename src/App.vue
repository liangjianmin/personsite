<template>
  <div id="app">
    <NavHeader v-if="headShow"></NavHeader>
    <section class="page">
      <el-col :span="3" class="section-left" v-if="headShow">
        <el-menu class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/home"><i class="el-icon-menu"></i>主页</el-menu-item>
          <el-menu-item v-if="user.role == 0" index="/adduser"><i class="el-icon-menu"></i>增加用户</el-menu-item>
          <el-menu-item v-if="user.role == 0 || user.role == 1" index="/userlist"><i class="el-icon-setting"></i>用户管理</el-menu-item>
          <el-menu-item v-if="user.role == 0 || user.role == 1 || user.role == 2" index="/publish"><i class="el-icon-setting"></i>发布活动</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21" class="section-right" v-if="headShow">
        <keep-alive>
          <router-view class="view"></router-view>
        </keep-alive>
      </el-col>
      <el-col :span="10" class="section-right hidesection" v-else="!headShow">
        <keep-alive>
          <router-view class="view"></router-view>
        </keep-alive>
      </el-col>
    </section>
  </div>
</template>
<style>
  .loginbg {
    background: url("./assets/images/bg.jpg") repeat-x !important;
  }

  .loginbg .el-form-item__label {
    color: #fff !important;
  }

  .hidesection {
    margin: 4% auto 0;
  }
</style>
<script>
  import Vue from 'vue'
  import Home from './components/Home.vue'
  import NavHeader from './components/Nav.vue'
  import {mapGetters} from 'vuex'
  import {mapState} from 'vuex'
  export default {
    name: 'app',
    data(){
      return {}
    },
    computed: {
      ...mapGetters([
        'headShow'
      ]),
      ...mapState({
        user: state => state.user.sessiondata
      })
    },
    mounted(){
      var path = this.$route.path.substring(1);
      this.headerChange(path);
      this.role();
    },
    watch: {
      $route(to){
        var path = to.path.substring(1);
        this.headerChange(path);
        this.role();
      }
    },
    methods: {
      headerChange(path){
        if (path == 'login') {
          document.body.className = 'loginbg';
          this.$store.dispatch('hidehead');
        } else {
          document.body.className = '';
          this.$store.dispatch('showhead');
        }
      },
      /*判断是否登录访问的页面*/
      role(){
        this.$router.beforeEach(({meta, path}, from, next) => {
          var {auth = true} = meta;
          var isLogin = Boolean(this.$store.state.user.sessiondata.status) //true用户已登录， false用户未登录
          if (auth && !isLogin && path !== '/login') {
            return next({path: '/login'})
          }
          next();
        })
      }
    },
    components: {
      NavHeader,
      Home
    }
  }
</script>

