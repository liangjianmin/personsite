<template>
    <div class="pageview clr">
        <div class="order">
            <div class="order-box">
                <ul class="tab">
                    <li @click="selstatus(index)" v-for="(item,index) in status" :class="{'curr':active==index}">{{item}}</li>
                </ul>
            </div>
            <div class="order-list cart">
                <div class="cart-th lbBox">
                    <span class="cart-th-1">商品信息</span>
                    <span class="cart-th-2">单价</span>
                    <span class="cart-th-3">数量</span>
                    <span class="cart-th-4">实付款</span>
                    <span class="cart-th-5">订单状态</span>
                </div>
                <div class="cart-td">
                    <dl class="lbBox" v-for="(item, index) in orderdata" :key="item">
                        <dt>
                            <span class="t0">{{item.ordertime}}</span>
                            <span class="t1">订单号：{{item.orderuid}}</span>
                            <span class="fr del">
                                <i class="el-icon-delete2"></i>
                            </span>
                        </dt>
                        <dd class="cart-th-1 t1">
                            <a href="javascript:;">
                                <img class="va-m" :src="'http://127.0.0.1:3838/static/upload/shop/'+item.url" width="50" height="50">
                                <p class="lineBlock">{{item.describes}}</p>
                            </a>
                        </dd>
                        <dd class="cart-th-2 t2">￥{{item.price}}</dd>
                        <dd class="cart-th-3 t2">{{item.shopnum}}</dd>
                        <dd class="cart-th-4 t4">{{item.total}}</dd>
                        <dd class="cart-th-5 t5"><span @click="del" :attr="item.status">{{item.status | statusFormat}}</span></dd>
                    </dl>
                    <div class="nodate" v-if="orderdata == ''">
                        您暂无订单数据
                        <router-link to="/home" class="link">快去购物吧</router-link>
                    </div>
                </div>
            </div>
            <div class="page-block" v-if="orderdata != ''">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currage"  :page-size="page.limit" layout="total,prev, pager, next, jumper" :total="page.count"></el-pagination>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
    .page-block {
        padding: 40px 10px 0px 40px;
        text-align: right;
    }
    .order {
        padding: 40px 0 20px 0;
    }
    .order-box{
        position: relative;
        margin: 0 0 40px 0;
    }
    .order .tab{
        width: 100%;
        border-bottom: 1px solid #e8e8e8;
        box-shadow: 0 0 0 0 #D5D5D5;
        cursor: pointer;
    }
    .cart{
        margin-bottom: 0;
    }
    .order .tab li{
        position: relative;
        padding: 0 20px 0px;
        height: 40px;
        line-height: 40px;
        position: relative;
        display: inline-block;
        text-align: center;
        color: #586069;
        font-size: 14px;
    }
    .order .tab li.curr{
        color: #ff6000;
    }
    .order .tab li.curr:before{
        position: absolute;
        border-bottom: 1px solid #ff6000;
        left:0;
        bottom:-1px;
        content: '';
        width: 100%;
    }
    .cart .cart-th{
        margin: 10px 0 40px 0;
        background-color: #f5f5f5;
        border: 1px solid #e8e8e8;
    }
    .cart .cart-th span{
        line-height: 40px;
    }
    .cart .cart-td dl{
        border: 1px solid  #ececec;
        padding: 0;
        box-sizing: border-box;
    }
    .cart .cart-td dl dt{
        line-height: 40px;
        display: block;
        font-size: 13px;
        vertical-align: middle;
        width: 100%;
        background:#f1f1f1;
        box-sizing: border-box;
        padding-left: 10px;
    }
    .cart .cart-td dl dt span{
        display: inline-block;
    }
    .cart .cart-td dl dt .t0{
        margin-left: 15px;
        margin-right: 10px;
        font-weight: 500;
        font-size: 13px;
    }
    .cart .cart-td dl dt .t1{
        width: 30%;
        color: #3c3c3c;
        font-size: 12px;
    }
    .cart .cart-td dl dd{
        padding:10px 0;
        box-sizing: border-box;
    }
    .cart .cart-td dl dd.cart-th-1{
        padding-left: 10px;
    }
    .cart .cart-td dl dd.cart-th-1 a{
        display: block;
    }
    .cart .cart-td dl dd.cart-th-1 a p{
        color: #586069;
        font-size: 13px;
    }
    .cart .cart-td dl dt .del{
        margin-right: 14px;
        cursor: pointer;
    }
    .cart .cart-td dl dt .del .el-icon-delete2{
        color: #99a9bf;
        font-size: 19px;
        vertical-align: middle;
    }
    .cart .cart-td dl dd.t2{
        color: #586069;
        font-size: 13px;
        font-weight: normal;
    }
    .cart .cart-td dl .t5 span[attr="1"]{
        color: #fff;
        background-color: #ff4949;
        border-color: #ff4949;
        padding:2px 4px;
        font-size: 12px;
    }
    .cart .cart-td dl .t5 span[attr="2"]{
        color: #fff;
        background-color: #50bfff;
        border-color: #50bfff;
        padding:2px 4px;
        font-size: 12px;
    }
    .cart .cart-td dl .t5 span[attr="3"]{
        color: #fff;
        background-color: #f7ba2a;
        border-color: #f7ba2a;
        padding:2px 4px;
        font-size: 12px;
    }
    .cart .cart-td dl .t5 span[attr="4"]{
        color: #fff;
        background-color: #13ce66;
        border-color: #13ce66;
        padding:2px 4px;
        font-size: 12px;
    }
    .nodate {
        padding:40px;
        text-align: center;
        text-align: center;
        color: #586069;
        font-size: 14px;
    }
    .nodate a{
        color: #ff6000;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'order',
        data() {
            return {
                active: 0,
                type: 0,
                currage: 1,
                status:['全部','待付款','待发货','已配货','已完成']
            }
        },
        computed: mapState({
            page:state => state.order.orderdata,
            orderdata (state) {
                var obj = state.order.orderdata;
                if (obj.hasOwnProperty('list')) {
                    return obj.list.data;
                }
            }
        }),
        mounted(){
            this.getlist();
        },
        methods: {
            getlist(){
                this.$store.dispatch({
                    type: 'order',
                    queryStr:{userid:this.$store.state.user.sessiondata.session.id,type:this.type,p:this.currage}
                })
            },
            selstatus(index){
                this.type=index;
                this.active=index;
                this.$store.dispatch({
                    type: 'order',
                    queryStr:{userid:this.$store.state.user.sessiondata.session.id,type:this.type,p:this.currage}
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currage=val;
                this.$store.dispatch({
                    type: 'order',
                    queryStr:{userid:this.$store.state.user.sessiondata.session.id,type:this.type,p:this.currage}
                })
            },
            del(){

            }
        }
    }
</script>
