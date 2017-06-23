<template>
    <div class="pageview clr">
        <h1>{{test}}</h1>
        <h1>{{test2}}</h1>
        <h1>{{test5}}</h1>
        <div class="cart">
            <div class="cart-th lbBox">
                <span class="cart-th-1">商品信息</span>
                <span class="cart-th-2">单价</span>
                <span class="cart-th-3">数量</span>
                <span class="cart-th-4">金额</span>
                <span class="cart-th-5">操作</span>
            </div>
            <div class="cart-td" v-if="visible">
                <dl class="lbBox" v-if="cars==false">
                    <dd class="cart-th-1 t1">
                        <img class="va-m" :src="ruleForm.url" width="50" height="50">
                        <p class="lineBlock">{{ruleForm.describes}}</p>
                    </dd>
                    <dd class="cart-th-2 t2">￥{{ruleForm.price}}</dd>
                    <dd class="cart-th-3 t3">
                        <el-input-number v-model="num" @change="handleChange" :min="1" :max="ruleForm.stocknum" size="small"></el-input-number>
                        <p>库存总容量：{{ruleForm.stocknum}}</p>
                    </dd>
                    <dd class="cart-th-4 t4">￥{{price}}</dd>
                    <dd class="cart-th-5 t5"><span @click="del">删除</span></dd>
                </dl>
              <dl class="lbBox" v-for="(item,index) in ruleForm" :key="item" v-else>
                <dd class="cart-th-1 t1">
                  <img class="va-m" :src="'http://127.0.0.1:3838/static/upload/shop/'+item.url" width="50" height="50">
                  <p class="lineBlock">{{item.describes}}</p>
                </dd>
                <dd class="cart-th-2 t2">￥{{item.price}}</dd>
                <dd class="cart-th-3 t3">
                  <el-input-number ref="iptNum" :data-price="item.price" :data-ind="index" v-model="item.num" @change="handleChangeS" :min="1" :max="item.stocknum" size="small"></el-input-number>
                  <p>库存总容量：{{item.stocknum}}</p>
                </dd>
                <dd class="cart-th-4 t4" ref="total">￥{{item.price*item.num}}</dd>
                <dd class="cart-th-5 t5"><span @click="del">删除</span></dd>
              </dl>
            </div>
            <div class="total clr" v-if="visible">
                <div class="fr totalbox">
                    <span class="tx" v-if="cars==false">合计：<em class="va-m">￥{{price}}</em></span>
                    <span class="tx" v-else>合计：<em class="va-m">￥{{totalprice}}</em></span>
                    <el-button type="primary" :loading="logining" @click="onSubmitTotal" class="totalbtn">结算</el-button>
                </div>
            </div>
            <div class="back" v-if="!visible">
                <router-link to="/home" class="login">返回重新购物</router-link>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
    .back{
        margin: 100px auto 0;
        width: 100%;
        text-align: center;
    }
    .back a{
        color: #3c3c3c;
        padding:5px 8px;
        font-size: 12px;
        background: #e74649;
        color: #ffffff;
    }

</style>
<script>
    import {mapState} from 'vuex'
    import { mapGetters } from 'vuex'
    export default{
        name: 'cart',
        data() {
            return {
                logining: false,
                user: '',
                userid: '',
                visible: true,
                num: 1,
                price: '',
                ruleForm: {
                    url: ''
                },
                car:{

                },
              cars:false,
              totalprice:0,
              test5:0

            }
        },
        computed:{
          ...mapState({
                     test:state=>state.shop.testshop.test,
                    // test1:'shop.testshop.test'
                    test2:function (state) {
                    return state.shop.testshop.test+'---我是加的啊'
                  }
                  }),
          ...mapGetters(['doneTodos'])
        }
      ,
        mounted(){
            this.test5=this.$store.getters.testshop1
            this.totalprice=0
            var path = this.$route.query.r;
            var cars = this.$route.query.cars;
            if(path==undefined && cars!=undefined){
                this.cars=true;
                this.getDetailT();

               /* for(var e of this.ruleForm){
                  pri+=(e.price*e.num)
                }*/
            }else {
              this.getDetails(path);
            }
        },
        watch: {
            $route(to){
                if (to.path.indexOf('cart') != -1&& to.path.indexOf('cars') == -1) {
                    var path = this.$route.query.r;
                    this.getDetails(path);
                }
            }
        },
        methods: {
          getDetails(path){
                this.$http.get('getshop?r=' + path).then(res => {
                    console.log(res)
                    if (res.data.data.status) {
                        this.visible = true;
                        this.ruleForm = res.data.data.shop[0];
                        this.num = res.data.data.selnum;
                        this.user = res.data.data.user;
                        this.userid = res.data.data.userid;
                        this.price = this.ruleForm.price * this.num;
                        this.ruleForm.url = 'http://127.0.0.1:3838/static/upload/shop/' + res.data.data.shop[0].url;
                    } else {
                        this.visible = false;
                        this.$message({
                            type: 'error',
                            duration: 2000,
                            message: '亲，该链接已经失效'
                        });
                    }
                }, error => {
                    console.log('请启动node server')
                });
            },
          getDetailT(path){
            var time=new Date().getTime();
            this.$http.get('getshop?cars='+time).then(res => {
              if(res.data.data.status){
                this.visible = true;
                this.ruleForm=res.data.data.shop;
                this.total()
              }
            }, error => {
              console.log('请启动node server')
            });
          },
            total(){
              let pir=0;
              this.ruleForm.forEach(function (e) {
                pir+=(e.num*e.price)
              });
              this.totalprice=pir
            },
            totalT(){
              let pir=0;
              this.$refs.total.forEach(function (e) {
                var te=parseInt(e.innerHTML.toString().replace('￥',''));
                console.log(te)
                pir+=te
              });
              console.log(pir)
              this.totalprice=pir
            },
            handleChange(value){
                this.price = this.ruleForm.price * value;
                if (value == this.ruleForm.stocknum) {
                    this.$message({
                        type: 'error',
                        duration: 1000,
                        message: '亲，库存容量不足'
                    });
                }
            },
          handleChangeS(index,oldval){
                console.log(index)
            console.log(oldval)
            this.$nextTick(()=>{
              console.log(this.$refs.iptNum[0].value)

            })

             //   console.log(index)
         //   this.totalT()
           /* if (value == max) {
              this.$message({
                type: 'error',
                duration: 1000,
                message: '亲，库存容量不足'
              });
            }*/
          },
            /*结算处理*/
            onSubmitTotal(){
                var self = this;
                this.logining = true;
                this.$http.post('ordersave', {
                    id: this.ruleForm.id,
                    shopname: this.ruleForm.shopname,
                    price: this.ruleForm.price,
                    total: this.price,
                    shopnum: this.num,
                    stocknum: this.ruleForm.stocknum - this.num,
                    shopnumber: this.ruleForm.shopnumber,
                    username: this.user,
                    userid: this.userid
                }).then(res => {
                    if (res.data.status) {
                        this.$message({
                            type: 'success',
                            message: '跳转支付页面',
                            duration: 1000,
                            onClose: function () {
                                self.$http.post('pay',{
                                    orderid:res.data.id
                                }).then(data=>{
                                    self.logining = false;
                                    if(data.data.status){
                                        self.$router.replace({path: '/pay', query: {sign:data.data.sign,o: data.data.uuid.params}});
                                    }
                                });
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
            },
            /*删除商品*/
            del(){
                var self = this;
                this.$confirm('确定删除该商品嘛', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.ruleForm='';
                    this.num=0;
                    this.price=0;
                    this.visible=false;
                }).catch(() => {});
            }
        }
    }
</script>
