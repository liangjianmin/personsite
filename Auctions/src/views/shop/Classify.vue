<template>
    <div class="pageview">
        <dl class="barlist clr">
            <dt>类型：</dt>
            <dd @click="selsearch(index)" v-for="(item,index) in classifydata" :class="{'curr':active==index}">{{item}}</dd>
        </dl>
        <div style="width: 100%" class="content boxsiz cassify">
            <ul class="boxsiz">
                <li v-for="(item, index) in shopdata" :key="item" class="boxsiz">
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
                            <div >
                                <span class="evaulate">好评度：</span>
                                <el-rate v-model="item.evaluate" disabled text-color="#ff9900" text-template="{value}"></el-rate>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="page-block">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currage"  :page-size="page.limit" layout="total,prev, pager, next, jumper" :total="page.count"></el-pagination>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .page-block {
        padding: 40px 10px 0px 40px;
        text-align: right;
    }
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
    .content {
        box-sizing: border-box;
        padding: 10px 10px 40px 10px;
    }
    .barlist {
        padding: 15px 20px;
        color: #3d3d3d;
    }

    .barlist dt {
        display: inline-block;
    }

    .barlist dd {
        transition: all 0.2s ease;
        display: inline-block;
        margin: 0 5px;
        padding: 2px 6px;
        cursor: pointer;
    }

    .barlist dd.curr {
        background-color: #20a0ff;
        color: #ffffff;
    }
    .content {
        box-sizing: border-box;
        padding: 10px 10px 40px 10px;
    }
    .cassify ul{
        width: 100%;
    }
    .cassify ul li{
        display: inline-block;
        padding: 10px;
        width: 32%;
        margin-right: 20px;
        border: 1px solid #d1dbe5;
        border-radius: 4px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .cassify ul li:nth-child(3n){
        margin-right: 0;
    }
    .cassify ul li a{
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
    .cassify ul li .image{
        transition: all 0.5s ease;
    }
    .cassify ul li:hover .image{
        transform: scale(1.03);
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'classify',
        data() {
            return {
                active: 0,
                type: 0,
                currage: 1,
                classifydata:['服饰美妆','家用电器','电脑数码','全部']
            }
        },
        computed: mapState({
            page:state => state.shop.typeshop,
            shopdata (state) {
                var obj = Object.assign(state.shop.typeshop);
                if (obj.hasOwnProperty('list')) {
                    return obj.list.data;
                }
            }
        }),
        mounted(){
            if(this.$route.query.type == 4){
                this.classifydata.push('搜索数据');
                this.active=this.$store.state.shop.searchdata.type;
                this.type =4;
            }else{
                this.getlist(this.type, this.currage);
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currage=val;
                if(this.type == 4){
                    this.$store.dispatch({
                        type: 'searchshop',
                        queryStr:{p:this.currage,like:this.$store.state.shop.searchdata.like}
                    })
                }else{
                    this.$store.dispatch({
                        type: 'typeshop',
                        queryStr:{type:this.type,p:this.currage}
                    })
                }
            },
            getlist(){
                this.$store.dispatch({
                    type: 'typeshop',
                    queryStr:{type:this.type,p:this.currage}
                })
            },
            selsearch(index){
                this.type=index;
                this.active=index;
                this.$store.dispatch({
                    type: 'typeshop',
                    queryStr:{type:this.type,p:this.currage}
                })
            }
        }
    }
</script>
