<template>
    <div id="app">
        <NavHeader v-if="headShow"></NavHeader>
        <section class="page">
            <el-col :span="3" class="section-left" v-if="headShow">
                <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router>
                    <el-menu-item index="/home"><i class="el-icon-menu"></i>主页</el-menu-item>
                    <el-submenu index="1" v-if="user.role == 0 || user.role == 1">
                        <template slot="title"><i class="el-icon-message"></i>用户管理</template>
                        <el-menu-item v-if="user.role == 0" index="/adduser">增加用户</el-menu-item>
                        <el-menu-item v-if="user.role == 0 || user.role == 1" index="/userlist">用户操作</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2" v-if="user.role == 0 || user.role == 1 || user.role ==2">
                        <template slot="title"><i class="el-icon-message"></i>商品管理</template>
                        <el-menu-item v-if="user.role == 0 || user.role == 1 || user.role == 2" index="/shopsave">商品添加</el-menu-item>
                        <el-menu-item v-if="user.role == 0 || user.role == 1 || user.role == 2" index="/shoplist">商品操作</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3" v-if="user.role == 0 || user.role == 1">
                        <template slot="title"><i class="el-icon-message"></i>库存管理</template>
                        <el-menu-item v-if="user.role == 0 || user.role == 1" index="/stock">库存容量</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4" v-if="user.role == 0 || user.role == 1 || user.role ==2">
                        <template slot="title"><i class="el-icon-message"></i>图片管理</template>
                        <el-menu-item v-if="user.role == 0 || user.role == 1" index="">添加图片</el-menu-item>
                        <el-menu-item v-if="user.role == 0 || user.role == 1 || user.role == 2" index="">图片列表</el-menu-item>
                    </el-submenu>
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
    import Home from './views/home/Home.vue'
    import NavHeader from './views/common/Nav.vue'
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
            }),
            onRoutes(){
                return this.$route.path;
            }
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

