<template>
    <div class="home clr">
        <el-col :span="6">
            <el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="商品名称:" prop="name">
                    <el-input v-model="ruleForm.name"  placeholder="商品名称"></el-input>
                </el-form-item>
                <el-form-item label="商品价格:" prop="price">
                    <el-input v-model="ruleForm.price"  placeholder="商品价格"></el-input>
                </el-form-item>
                <el-form-item label="商品类别:">
                    <el-select v-model="ruleForm.category" placeholder="请选择商品类别">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button size="large" icon="search" type="primary" @click="submitForm('ruleForm')">搜索</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="18" class="page-home">
            <el-col :span="24">
                <el-carousel trigger="click" height="265px">
                    <el-carousel-item v-for="item in 4" :key="item">
                      <img src="../../static/s.jpg" alt="">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
            <el-col :span="24" class="content">
                <el-col :span="8" v-for="(o, index) in 6" :key="o" class="list">
                    <el-card :body-style="{ padding: '0px' }">
                       <a href="javascript:;" class="pic"> <img src="../assets/images/hamburger.50e4091.jpg" class="image"></a>
                        <div class="shop clr">
                            <div class="clr">
                                <span class="fl shop-t1">商品  {{index}}</span>
                                <span class="fr shop-t2">1.99元</span>
                            </div>
                            <p class="shop-txt">
                                这是第一个商品这是第一个商品这是第一个商品这是第一个商品这是第一个商品这是第一个商品
                            </p>
                            <div class="bottom clr">
                                <el-col>
                                    <el-rate v-model="value" disabled show-text text-color="#ff9900" text-template="{value}"></el-rate>
                                </el-col>
                                <el-col>
                                    <el-button type="text" class="button">购买</el-button>
                                </el-col>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-col>
        </el-col>
    </div>
</template>
<style scoped>
    .home {
        width: 1200px;
        margin: 20px auto 0;
    }
    .home .el-form-item .el-select{
        display: block;
    }
    .home .el-form-item .el-button{
        width: 100%;
        display: block;
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
    .home .page-home{
        padding:25px;
    }
    .home .time {
        font-size: 13px;
        color: #999;
    }

    .home .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .home .button {
        padding: 0;
        float: right;
    }

    .home .image {
        width: 100%;
        display: block;
    }
    .home .shop{
        padding:15px;
    }
    .home .shop .shop-t1{
        color:#337ab7;
    }

    .home .content{
        padding:10px 5px 0 5px;
        box-sizing: border-box;
    }
    .home .content .list{
        box-sizing: border-box;
        padding:10px;
    }
    .home .content .list .pic{
        display: block;
    }
    .home .shop-txt{
        padding:8px 0 5px 0;
        font-size: 14px;
        color: #838487;
        white-space: normal;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin-bottom: 10px;
        line-height: 22px;
    }
</style>
<script>
    export default{
        name: 'home',
        data() {
            return {
                value: 3,
                ruleForm: {
                    name: '',
                    price:'',
                    category:''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入商品名称名称', trigger: 'change'},
                        {min: 2, max: 10, message: '商品名称长度在 2 到 10 个字符', trigger: 'change'}
                    ]
                }
            };
        },
        methods:{
            submitForm(formName) {
                var self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        }
    }
</script>
