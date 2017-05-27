<template>
    <div class="nav clr">
       <div class="navview">
           <el-menu theme="dark" :default-active="onRoutes" class="el-menu-demo" mode="horizontal" unique-opened router>
               <el-menu-item index="/home">在线竞拍</el-menu-item>
               <el-menu-item index="/cassify">分类列表</el-menu-item>
               <el-menu-item index="3">联系我们</el-menu-item>
               <el-menu-item index="4">常见问题</el-menu-item>
           </el-menu>
           <div class="search">
               <el-input placeholder="请输入搜索内容" icon="search" v-model="searchdata" :on-icon-click="handleIconClick"></el-input>
           </div>
           <a href="javascript:;" class="login">登录</a>
       </div>
    </div>
</template>
<style>

</style>
<script>
    export default{
        name: 'nav',
        data(){
            return {
                searchdata:''
            }
        },
        computed: {
            onRoutes(){
                return this.$route.path;
            }
        },
        methods:{
            handleIconClick(ev){

            }
        }
    }
</script>