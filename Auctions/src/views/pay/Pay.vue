<template>
    <div class="pageview clr">
        <div class="pay">
            <p class="t1">亲爱的小明：请在30分钟内完成该订单的付款，否则系统自动取消该订单，您的订单号为：<em>E20170606110147150</em></p>
            <span class="t2">还剩下<em>29</em>分<em>59</em>秒，加油，亚麻得！！</span>
            <div class="btn">
                <el-button type="success">支付宝支付</el-button>
                <el-button type="success">微信支付</el-button>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
    .pay{
        padding: 50px 0 200px 0;
    }
    .pay .t1{
        margin-bottom: 20px;
        font-size: 14px;
    }
    .pay .t2{
        font-size: 20px;
    }
    .pay .btn{
        width: 100%;
        margin-top: 110px;
        text-align: center;
    }
    .pay em{
        padding: 0 8px;
        font-size: 22px;
        color: #ff4400;
        font-style: normal;
        vertical-align: middle;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'pay',
        data() {
            return {

            }
        },
        computed: {

        },
        mounted(){

        },
        methods: {

        }
    }
</script>
