<template>
    <div class="home clr">
        <el-col :span="24">
            <el-col :span="24" class="page-home">
                <el-col :span="24">
                    <el-carousel trigger="click" height="265px">
                        <el-carousel-item v-for="item in bannerItem"  >
                          <div class="back-cover" :style="'background-image: url(http://127.0.0.1:3838/static/banner/'+item+')'"></div>
                        </el-carousel-item>
                    </el-carousel>
                </el-col>
                <div style="width: 100%" class="content boxsiz cassify clr">
                    <ul class="boxsiz">
                        <li v-for="(item, index) in pagelist" :key="item" class="boxsiz">
                            <router-link :to="'/details/'+item.id" class="link">
                                <div href="javascript:;" class="pic">
                                    <img class="image" :src="'http://127.0.0.1:3838/static/upload/shop/'+item.url">
                                </div>
                                <div class="shop">
                                    <div class="clr">
                                        <span class="fl shop-t1">{{item.shopname}}</span>
                                        <span class="fr shop-t2">{{item.price}}元</span>
                                    </div>
                                    <p class="shop-txt">{{item.describes}}</p>
                                    <div>
                                        <span class="evaulate">好评度：</span>
                                        <el-rate v-model="item.evaluate" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                                    </div>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-col>
    </div>
</template>
<style scoped>
    .evaulate {
        font-size: 13px;
        vertical-align: middle;
        color: #838487;
    }

    .back-cover {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      width: 100%;
      height: 100%
    }
    .el-rate {
        display: inline-block;
        vertical-align: middle;
    }

    .home {
        width: 1200px;
        margin: 0px auto 0;
    }

    .home .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .home .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .home .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .home .page-home {
        padding: 0 10px 10px 10px;
    }
    .home .time {
        font-size: 13px;
        color: #999;
    }
    .home .image {
        width: 100%;
        height: 100%;
        display: block;
    }
    .home .shop {
        padding: 15px;
    }
    .content {
        box-sizing: border-box;
        padding: 10px 0 40px 0px;
    }
    .cassify ul {
        width: 100%;
    }
    .cassify ul li {
        display: inline-block;
        padding: 10px;
        width: 32.2%;
        margin-right: 20px;
        border: 1px solid #d1dbe5;
        border-radius: 4px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
    }
    .cassify ul li:nth-child(3n) {
        margin-right: 0;
    }
    .cassify ul li a {
        display: block;
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
    .evaulate {
        font-size: 13px;
        vertical-align: middle;
        color: #838487;
    }
    .el-rate {
        display: inline-block;
        vertical-align: middle;
    }
    .cassify ul li .image {
        transition: all 0.5s ease;
    }
    .cassify ul li:hover .image {
        transform: scale(1.03);
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'home',
        data() {
            return {
                value: 3,
                bannerItem:[],
            }
        },
        computed: mapState({
            pagelist (state) {
                var obj = Object.assign(state.shop.shoplist);
                if (obj.hasOwnProperty('list')) {
                    return obj.list.data;
                }
            }
        }),
        mounted(){
            this.getlist();
            this.getBanner();
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                if (path == 'home') {
                    this.getlist();
                }
            }
        },
        methods: {
            getlist(){
                this.$store.dispatch({
                    type: 'shop'
                });
            },
          getBanner(){
            this.$http.get('/bannerlist').then(res=>{
              this.bannerItem=res.data.data[0].url.split(',');
            })
          }
        }
    }
</script>
