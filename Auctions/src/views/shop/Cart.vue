<template>
    <div class="pageview clr">
        <div class="cart">
            <div class="cart-th lbBox">
                <span class="cart-th-1">商品信息</span>
                <span class="cart-th-2">单价</span>
                <span class="cart-th-3">数量</span>
                <span class="cart-th-4">金额</span>
                <span class="cart-th-5">操作</span>
            </div>
            <div class="cart-td">
                <dl class="lbBox">
                    <dd class="cart-th-1 t1">
                        <img class="va-m" :src="ruleForm.url" width="50" height="50">
                        <p class="lineBlock">{{ruleForm.describes}}</p>
                    </dd>
                    <dd class="cart-th-2 t2">￥{{ruleForm.price}}</dd>
                    <dd class="cart-th-3 t3">
                        <el-input-number v-model="num"  @change="handleChange" :min="1" :max="ruleForm.stocknum" size="small"></el-input-number>
                        <p>库存容量：{{ruleForm.stocknum}}</p>
                    </dd>
                    <dd class="cart-th-4 t4">￥{{price}}</dd>
                    <dd class="cart-th-5 t5"><span>删除</span></dd>
                </dl>
            </div>
            <div class="total clr">
                <div class="fr totalbox">
                    <span class="tx">合计：<em class="va-m">￥{{price}}</em></span>
                    <el-button type="primary" @click="onSubmitTotal" class="totalbtn">结算</el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'cart',
        data() {
            return {
                num:1,
                price:'',
                ruleForm: {
                    url: ''
                }
            }
        },
        computed: mapState({}),
        mounted(){
            var path = this.$route.query.id;
            this.num=this.$route.query.num;
            this.getDetails(path);
        },
        watch: {
            $route(to){
                if (to.path.indexOf('cart') != -1) {
                    this.num=this.$route.query.num;
                    var path = this.$route.query.id;
                    this.getDetails(path);
                }
            }
        },
        methods: {
            getDetails(path){
                this.$http.get('getshop?id=' + path).then(res => {
                    this.ruleForm = res.data.data.shop[0];
                    this.price=this.ruleForm.price * this.num;
                    this.ruleForm.url = 'http://127.0.0.1:3838/static/upload/shop/' + res.data.data.shop[0].url;
                }, error => {
                    console.log('请启动node server')
                });
            },
            handleChange(value){
                this.price=this.ruleForm.price * value;
                if(value == this.ruleForm.stocknum){
                    this.$message({
                        type: 'error',
                        duration: 1000,
                        message: '亲，库存容量不足'
                    });
                }
            },
            onSubmitTotal(){
                var self=this;
                this.$http.post('ordersave', {
                    id:this.ruleForm.id,
                    shopname: this.ruleForm.shopname,
                    price: this.ruleForm.price,
                    total: this.price,
                    shopnum: this.num,
                    stocknum:this.ruleForm.stocknum-this.num,
                    shopnumber:this.ruleForm.shopnumber
                }).then(res => {
                    if (res.data.status) {
                        this.$message({
                            type: 'success',
                            message: '跳转支付页面',
                            duration: 1000,
                            onClose: function () {
                                self.$router.push({ path: '/pay', query: { id: self.ruleForm.id}});
                            }
                        });
                    } else {
                        this.$message({
                            type: 'error',
                            message: '结算失败',
                            duration: 1000
                        });
                    }
                }, error => {
                    console.log('请启动node server')
                });
            }
        }
    }
</script>
