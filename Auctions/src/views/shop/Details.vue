<template>
    <div class="pageview clr">
        <el-col :span="24">
            <el-card>
                <div class="clr">
                   <el-col :span="10" class="detailboxl">
                       <img class="pic" :src="ruleForm.url">
                   </el-col>
                    <el-col :span="14" class="detailbox">
                        <p class="text ts">{{ruleForm.describes}}</p>
                        <div class="tb-meta">
                            <p class="text t1"><span class="tx">价格：</span>{{ruleForm.price}} 元</p>
                        </div>
                        <p class="text t2"><span class="tx">库存：</span><span class="txs">{{ruleForm.stocknum}}个</span></p>
                        <p class="text t3">
                            <span class="tx">选择数量：</span>
                            <el-input-number v-model="num"  @change="handleChange" :min="1" :max="ruleForm.stocknum" size="small"></el-input-number>
                        </p>
                        <p class="text t3"><span class="tx">评论数：</span><span class="txs">{{commentnum | commentFormate}}</span></p>
                        <el-button type="primary" @click="onCarsSubmit" class="detbtn">加入购物车</el-button>
                        <el-button type="primary" @click="onSubmit(user)" class="detbtn">购买</el-button>
                    </el-col>
                </div>
                <div class="clr comment">
                    <el-button  @click="onSubmitCommentBtn(user)">发表评论</el-button>
                    <div class="comm-textarae" v-if="visibile">
                        <el-input type="textarea" v-model="desc" class="textdesc"></el-input>
                        <el-rate v-model="evaluate" show-text></el-rate>
                        <el-button  type="primary" @click="onSubmitComment" class="btnfa">提交</el-button>
                    </div>
                    <ul v-for="(item,index) in comment">
                        <li>
                            <div class="time clr">
                                <span class="fl">{{item.user}}：{{item.time}}</span>
                                <div class="fl time-rate"><el-rate v-model="item.evaluate" disabled ></el-rate></div>
                            </div>
                            <p class="txt">{{item.desc}}</p>
                        </li>
                    </ul>
                </div>
            </el-card>
        </el-col>
        <a class="cw-icon" href="javascript:;">
            <el-badge :value="carnum" :max="99" class="item"></el-badge>
        </a>
    </div>
</template>
<style scoped>
    .el-badge{
        position: relative;
        top: -10px;
        right: -11px;
    }
    .textdesc{
        margin-bottom: 10px;
    }
    .btnfa{
        margin-top: 20px;
    }
    .comm-textarae{
        margin: 10px 0;
    }
    .comment{
        margin-top: 80px;
        padding:20px;
    }
    .comment ul{
        margin-top: 20px;
        padding-left: 100px;
        box-sizing: border-box;
    }
    .comment ul li{
        margin-bottom: 20px;
    }
    .comment ul li .time{
        font-size: 12px;
        color: #B0B0B0;
        margin-bottom: 5px;
    }
    .comment ul li p.txt{
        font-size: 14px;
        line-height: 1.4;
        color: #3F3F3F;
        vertical-align: middle;
    }
    .comment ul li p.txts{
        vertical-align: middle;
    }
    .detailboxl,detailbox{
        vertical-align: middle;
    }
    .time-rate{
        margin-left: 27px;
    }
    .detailboxl{
        height: 305px;
    }
    .ts{
        width: 90%;
        white-space: normal;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 28px;
    }
    .tb-meta{
        width: 30%;
        background-color: #FFF2E8;
        padding-left: 5px;
    }
    .tx{
        width: 75px;
        padding-left: 5px;
        display: inline-block;
    }
    .pic{
        width: 100%;
        height: 100%;
    }
    .pageview {
        position: relative;
        width: 1200px;
        margin: 20px auto 0;
    }
    .text{
        padding:9px 0;
    }
    .t1{
        padding: 0px 0;
        line-height: 35px;
        font-size: 26px;
        font-weight: 700;
        font-family: Tahoma,Arial,Helvetica,sans-serif;
        color: #F40;
    }
    .t1 span{
        color: #5e6d82;
        font-size: 13px;
        font-weight: normal;
    }
    .t2{
        color: #5e6d82;
        font-size:13px;
    }
    .t3{
        color:#5e6d82;
        font-size:13px;
    }
    .t3 span{
        vertical-align: middle;
    }
    .el-input-number{
       vertical-align: middle;
    }
    .detailbox{
        box-sizing: border-box;
        padding:10px 0 10px 30px;
    }
    .detbtn{
        margin-top: 25px;
        border-color: #F22D00;
        background: #F22D00;
        width: 134px;
        height: 38px;
        text-align: center;
        border-radius: 2px;
        font-size: 16px;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'details',
        data() {
            return {
                carnum:1000,
                visibile:false,
                num:1,
                desc:'',
                descview:'',
                evaluate:0,
                commentnum:0,
                comment:[

                ],
                ruleForm:{
                    url:''
                }
            }
        },
        computed: mapState({
            user: state => state.user.sessiondata.session
        }),
        mounted(){
            var path = this.$route.params.id;
            this.getDetails(path);
        },
        watch: {
            $route(to){
                if (to.path.indexOf('editshop') != -1) {
                    var path = this.$route.params.id;
                    this.getDetails(path);
                }
            }
        },
        methods:{
            /**加入购物车 无需判断用户是否登录，记录个人购买信息*/
            onCarsSubmit(){
                this.$message({
                    type: 'error',
                    duration: 2000,
                    message: '马拉个币，点毛啊，没做',
                    onClose: function () {

                    }
                });
            },
            getDetails(path){
                this.$http.get('getshop?id=' + path).then(res => {
                    this.comment=res.data.data.comment;
                    this.commentnum=res.data.data.commentnum;
                    this.ruleForm = res.data.data.shop[0];
                    this.ruleForm.url='http://127.0.0.1:3838/static/upload/shop/'+res.data.data.shop[0].url;
                }, error => {
                    console.log('请启动node server')
                });
            },
            /*购买必须判断用户是否登录*/
            onSubmit(data){
                var self=this;
                if(data == null){
                    this.$message({
                        type: 'error',
                        duration: 2000,
                        message: '亲，请登录',
                        onClose: function () {
                            self.$router.push({path: '/login'});
                        }
                    });
                }else{
                    /*点击购买跳转结算页面*/
                    this.$http.post('cars',{
                        id:this.ruleForm.id,
                        num:this.num,
                        userid:this.$store.state.user.sessiondata.session.id,
                        user:this.$store.state.user.sessiondata.session.name
                    }).then(res=>{
                        if(res.status == 200){
                            this.$router.push({ path: '/cart', query: {r:res.data.r}})
                        }
                    },error=>{
                        console.log('请启动node server')
                    });
                }
            },
            /*评论*/
            onSubmitComment(){
                var self = this;
                if(this.desc == ''){
                    this.$message({
                        type: 'error',
                        duration: 1000,
                        message: '亲，请输入您的评语'
                    });
                }else if(this.evaluate == ''){
                    this.$message({
                        type: 'error',
                        duration: 1000,
                        message: '亲，请选择评分'
                    });
                }else{
                    this.visibile=false;
                    this.$http.post('savecomment', {
                        desc: this.desc,
                        evaluate: this.evaluate,
                        shopid: this.ruleForm.id,
                        userid:this.$store.state.user.sessiondata.session.id,
                        user:this.$store.state.user.sessiondata.session.name
                    }).then(res => {
                        if (res.data.status) {
                            this.$message({
                                type: 'success',
                                message: '评论成功',
                                duration: 1000,
                                onClose: function () {
                                    self.getDetails(self.ruleForm.id);
                                }
                            });
                        } else {
                            this.$message({
                                type: 'error',
                                message: '评论失败',
                                duration: 1000
                            });
                        }
                    }, error => {
                        console.log('请启动node server')
                    });
                }
            },
            onSubmitCommentBtn(data){
               if(data == null){
                   this.$message({
                       type: 'error',
                       duration: 1000,
                       message: '亲，没有登录'
                   });
               }else{
                   //重置
                   this.desc='';
                   this.evaluate=0;
                   this.visibile=!this.visibile;
               }
            },
            handleChange(value){
               if(value == this.ruleForm.stocknum){
                   this.$message({
                       type: 'error',
                       duration: 1000,
                       message: '亲，库存容量不足'
                   });
               }
            }
        }
    }
</script>
