<template>
    <div class="pageview clr">
        <dl class="barlist">
            <dt>类型：</dt>
            <dd class="curr">服饰美妆</dd>
            <dd>家用电器</dd>
            <dd>电脑数码</dd>
        </dl>
        <el-col :span="24" class="content">
            <el-col :span="8" v-for="(item, index) in 6" :key="item" class="list">
                <el-card>
                    <router-link to="1">
                        <div href="javascript:;" class="pic">
                            <img class="image" src="http://127.0.0.1:3838/static/upload/shop/d745391ca43d91c242a844b21b6aea6c.jpg">
                        </div>
                        <div class="shop clr">
                            <div class="clr">
                                <span class="fl shop-t1">121</span>
                                <span class="fr shop-t2">555元</span>
                            </div>
                            <p class="shop-txt">梦娜10条装 丝袜15D薄款防勾丝显瘦连裤袜 女士性感 打底袜子 10肤色 均码</p>
                            <div class="bottom clr">
                                <el-col>
                                    <span class="evaulate">好评度：</span>
                                    <el-rate v-model="item.evaluate" disabled  text-color="#ff9900" text-template="{value}"></el-rate>
                                </el-col>
                            </div>
                        </div>
                    </router-link>
                </el-card>
            </el-col>
        </el-col>
    </div>
</template>
<style scoped lang="scss">
    .content{
        box-sizing: border-box;
        padding:10px 10px 40px 10px;
    }
    .content .list {
        box-sizing: border-box;
        padding: 10px;
    }
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
    .barlist{
        padding: 15px 20px;
        color: #3d3d3d;
    }
    .barlist dt{
        display: inline-block;
    }
    .barlist dd{
        display: inline-block;
        margin: 0 5px;
        padding: 2px 6px;
        cursor: pointer;
    }
    .barlist dd.curr{
        background-color: #20a0ff;
        color: #ffffff;
    }
    .content .pic {
        display: block;
        width: 100%;
        height: 230px;
        overflow: hidden;
    }
    .content .pic .image {
        display: block;
        width: 100%;
        height: 100%;
    }
    .shop {
        padding: 15px;
    }
    .shop-t1 {
        color: #303030;
    }
    .shop-t2 {
        color: #F40;
    }
    .shop-txt {
        padding: 8px 0 5px 0;
        font-size: 13px;
        color: #838487;
        min-height: 42px;
        white-space: normal;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 10px;
        line-height: 22px;
    }
    .evaulate{
        font-size: 13px;
        vertical-align: middle;
        color:#838487;
    }
    .el-rate{
        display: inline-block;
        vertical-align: middle;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'classify',
        data() {
            return {

            }
        },
        computed: mapState({

        }),
        mounted(){

        },
        watch: {
            $route(to){

            }
        },
        methods:{
            getlist(){

            }

        }
    }
</script>
