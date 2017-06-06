<template>
    <div class="pageview clr">
        <div class="pay" v-for="item in orderdata" v-if="visibility">
            <p class="t1">亲爱的{{item.username}}：请在半个时间内完成该订单的付款，否则系统自动取消该订单，您的订单号为：<em>{{item.orderuid}}</em></p>
            <p class="t1">亲，您需要支付金额：<em>￥{{item.total}}</em></p>
            <p class="t2"><span>还剩下<em>{{time.minute}}</em>分<em>{{time.second}}</em>秒，加油，亚麻得！！</span></p>
            <div class="btn">
                <el-button type="success">支付宝支付</el-button>
                <el-button type="success">微信支付</el-button>
            </div>
        </div>
        <div class="paytext" v-if="!visibility">
            <p class="t3"><em>该订单已经失效</em></p>
            <router-link to="/home" class="login">返回重新购物</router-link>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }

    .pay {
        padding: 50px 0 200px 0;
    }

    .pay .t1 {
        font-size: 14px;
    }

    .pay .t2 {
        margin-top: 40px;
        font-size: 20px;
    }

    .pay .btn {
        width: 100%;
        margin-top: 110px;
        text-align: center;
    }

    .pay em {
        padding: 0 8px;
        font-size: 22px;
        color: #ff4400;
        font-style: normal;
        vertical-align: middle;
    }

    .paytext {
        margin-top: 94px;
        text-align: center;
    }

    .paytext .t3 {
        padding: 0 8px;
        font-size: 22px;
        color: #ff4400;
    }

    .paytext .t3 em {
        font-style: normal;
        vertical-align: middle;
    }

    .paytext a {
        margin-top: 10px;
        margin-bottom: 100px;
        display: inline-block;
        color: #3c3c3c;
        padding: 5px 8px;
        font-size: 12px;
        background: #e74649;
        color: #ffffff;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'pay',
        data() {
            return {
                timeclear:null,
                orderdata: null,
                visibility: true,
                time: {
                    minute: '',
                    second: ''
                }
            }
        },
        computed: {},
        mounted(){
            var path = this.$route.query.o;
            this.getOrder(path);
        },
        methods: {
            getOrder(path){
                var self = this;
                this.$http.post('dopay', {
                    orderid: path.split('.')[0]
                }).then(res => {
                    if (res.data.status) {
                        this.orderdata = res.data.data;
                        this.timestamp=res.data.end;
                        this.freshTime(res.data.end,new Date().getTime());
                        this.timeclear = setInterval(() => {
                            this.freshTime(res.data.end,new Date().getTime())
                        }, 1000)
                    } else {

                        this.$message({
                            type: 'error',
                            message: '该链接已经失效',
                            duration: 1000
                        });
                    }
                });
            },
            freshTime(endtime, nowtime){
                var lefttime = parseInt((endtime - nowtime) / 1000);
                var d = parseInt(lefttime / 3600 / 24);
                var h = parseInt((lefttime / 3600) % 24);
                var m = parseInt((lefttime / 60) % 60);
                var s = parseInt(lefttime % 60);
                this.time.minute=m;
                this.time.second=s;
                if (lefttime <= 0) {
                    clearInterval(this.timeclear);
                    this.visibility = false;
                    this.$message({
                        type: 'error',
                        message: '该订单已经失效',
                        duration: 1000
                    });
                }
            }
        }
    }
</script>
