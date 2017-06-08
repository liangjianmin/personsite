<template>
    <div class="nav clr">
       <div class="navview">
           <el-menu theme="dark" :default-active="onRoutes" class="el-menu-demo" mode="horizontal" unique-opened router>
               <el-menu-item index="/home">在线竞拍</el-menu-item>
               <el-menu-item index="/cassify">分类列表</el-menu-item>
               <el-menu-item index="3">联系我们</el-menu-item>
           </el-menu>
           <div class="search">
               <el-input placeholder="请输入搜索内容" icon="search" v-model="searchdata"  :on-icon-click="handleIconClick"></el-input>
           </div>
           <template v-if="user== null">
               <router-link to="/login" class="login">登录</router-link>
           </template>
           <template v-else="user !=null">
              <div class="islg">
                  <a class="box" href="#">
                      <img src="../../assets/images/default.jpg" alt="">
                  </a>
                  <div class="g-user-card">
                      <div class="card-inner">
                          <div class="card-top clr">
                              <router-link to="/setting" class="head va-m" >
                                  <img src="../../assets/images/default.jpg">
                              </router-link>
                              <span class="t1 va-m">{{user.name}}</span>
                          </div>
                          <div class="user-center-box">
                              <ul class="clr">
                                  <li>
                                      <router-link to="/order">
                                          <img src="../../assets/images/order.png" alt="" class="va-m">
                                          <span class="user-center-icon icon-tick"></span>我的订单
                                      </router-link>
                                  </li>
                                  <li>
                                      <router-link to="/setting">
                                          <img src="../../assets/images/setting.png" alt="" class="va-m">
                                          <span class="user-center-icon icon-tick"></span>个人设置
                                      </router-link>
                                  </li>
                              </ul>
                          </div>
                          <div class="card-sets cl">
                              <a href="javascript:;" class="fr">安全退出</a>
                          </div>
                      </div>
                  </div>
              </div>
           </template>
       </div>
    </div>
</template>
<style scoped>
    .islg{
        display: block;
        height: 60px;
        position: absolute;
        right: 14px;
        top: 0;
        font-size: 14px;
        color: #bfcbd9;
    }
    .box{
        display: block;
        height: 60px;
        line-height: 60px;
        width: 60px;
        color: #787d82;
        text-align: center;
        -webkit-transition: background-color .2s;
        -moz-transition: background-color .2s;
        transition: background-color .2s;
        cursor: pointer;
        white-space: nowrap;
    }
    .box img{
        width: 36px;
        height: 36px;
        border-color: #4d5559;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
    }
    .info-show{
        position: absolute;
        top:60px;
        right:-4px;
        width: 100px;
        height: 100px;
        background: #fff;
        z-index:111;
        display: none;
    }
    .islg:hover .g-user-card{
        display: block;
    }
    .g-user-card{
        position: absolute;
        right: -4px;
        top: 60px;
        width: 306px;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.2);
        z-index: 1000;
        display: none;
    }
    .card-inner{
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.2);
        padding: 24px;
        box-sizing: border-box;
    }
    .card-inner .card-to{
        white-space: nowrap;
    }
    .card-inner .card-top .head{
        color: #93999f;
        display: inline-block;
        text-align: center;
        cursor: pointer;
    }
    .card-inner .card-top .head img{
        display: inline-block;
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 2px solid #fff;
        margin-right: 12px;
    }
    .card-inner .card-top .t1{
        display: inline-block;
        font-size: 16px;
        color: #07111b;
    }
    .card-inner .user-center-box{
        margin-top: 16px;
        margin-bottom: 14px;
    }
    .card-inner .user-center-box ul li{
        position: relative;
        width: 127px;
        height: 36px;
        float: left;
        background: #f3f5f7;
        line-height: 36px;
        color: #4d555d;
        font-size: 12px;
        margin-right: 2px;
        margin-bottom: 2px;
        box-sizing: border-box;
        transition: all 0.2s ease;
    }
    .card-inner .user-center-box ul li a{
        width: 100%;
        height: 36px;
        line-height: 36px;
        padding-left: 12px;
        text-align: left;
        box-sizing: border-box;
        color: #787d82;
        transition: background-color .2s;
        display: block;
    }
    .card-inner .user-center-box ul li a span{
        margin-left: 3px;
    }
    .card-inner .user-center-box ul li:hover{
        background: #d9dde1;
    }
    .card-inner .user-center-box ul li:hover a{
        color: #f01414;
    }
    .card-inner .card-sets{
        margin-top: 16px;
        font-size: 12px;
        line-height: 12px;
    }
    .card-inner .card-sets a{
        color: #4d555d;
    }
    .card-inner .card-sets a:hover{
        color: #f01414;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'nav',
        data(){
            return {
                searchdata:'',
                currage: 1,
            }
        },
        computed: {
            ...mapState({
                user: state => state.user.sessiondata.session
            }),
            onRoutes(){
                return this.$route.path;
            }
        },
        mounted(){
            this.getSession();
        },
        methods:{
            getSession(){
                this.$store.dispatch({
                    type: 'getsession'
                })
            },
            handleIconClick(value){
                if(this.searchdata == '')return false;
                this.$router.push({path: '/cassify', query: {type: 4}});
                this.$store.dispatch({
                    type: 'search',
                    queryStr:{like:this.searchdata,type:4}
                })
                this.$store.dispatch({
                    type: 'searchshop',
                    queryStr:{p:this.currage,like:this.searchdata}
                })
            }
        }
    }
</script>