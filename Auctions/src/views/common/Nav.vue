<template>
    <div class="nav clr">
       <div class="navview">
           <el-menu theme="dark" :default-active="onRoutes" class="el-menu-demo" mode="horizontal" unique-opened router>
               <el-menu-item index="/home">在线竞拍</el-menu-item>
               <el-menu-item index="/cassify">分类列表</el-menu-item>
               <el-menu-item index="3">联系我们</el-menu-item>
           </el-menu>
           <div class="search">
               <el-input placeholder="请输入搜索内容" icon="search" v-model="searchdata" :on-icon-click="handleIconClick"></el-input>
           </div>
           <template v-if="user== null">
               <router-link to="/login" class="login">登录</router-link>
           </template>
           <template v-else="user !=null">
               <a class="login">{{user.name}}</a>
           </template>
       </div>
    </div>
</template>
<style>

</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'nav',
        data(){
            return {
                searchdata:''
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
            handleIconClick(ev){

            }
        }
    }
</script>