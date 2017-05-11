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
            <div class="block">
                <el-carousel trigger="click" height="265px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3>{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
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
</style>
<script>
    export default{
        name: 'home',
        data() {
            return {
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