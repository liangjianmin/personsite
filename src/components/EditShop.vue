<template>
    <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="商品名称" prop="shopname">
                <el-input v-model="ruleForm.shopname" placeholder="请填写商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品编号" prop="shopnumber">
                <el-input v-model="ruleForm.shopnumber" placeholder="请填写商品编号"></el-input>
            </el-form-item>
            <el-form-item label="商品类别">
                <el-select v-model="ruleForm.type" clearable placeholder="请选择">
                    <el-option v-for="item in rolesoption" :key="item.id" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="价格：" prop="price">
                <el-input-number v-model="ruleForm.price" :min="0" :max="10000"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：" prop="stocknum">
                <el-input-number v-model="ruleForm.stocknum" :min="0" :max="500"></el-input-number>
            </el-form-item>
            <el-form-item label="评分：" prop="evaluate">
                <el-rate v-model="ruleForm.evaluate" text-template="{value}"></el-rate>
            </el-form-item>
            <el-form-item label="商品描述：" prop="describe">
                <el-input type="textarea" v-model="ruleForm.describe"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>

<style scoped>
    .el-rate {
        line-height: 2;
    }
</style>
<script type="es6">
    import {mapState} from 'vuex'

    export default {
        name: 'editshop',
        data() {
            return {
                ruleForm: {
                    shopname: '',
                    price: 0,
                    stocknum: 0,
                    evaluate: 0,
                    describe: '',
                    type:''
                },
                rules: {},
                rolesoption: [{
                    value: '0',
                    label: '服饰美妆'
                }, {
                    value: '1',
                    label: '家用电器'
                }, {
                    value: '2',
                    label: '电脑数码'
                }]
            }
        },
        created(){
            var path = this.$route.query.id;
            if (path != undefined) {
                this.getshop(path);
            }
        },
        watch: {
            $route(to){
                var path = this.$route.query.id;
                if (path != undefined) {
                    this.getshop(path);
                }
            }
        },
        methods: {
            getshop(path){
                this.$http.get('getshop?id=' + path).then(res => {
                    this.ruleForm = res.data.data[0];
                    if(this.ruleForm.type == 0){
                        this.ruleForm.type='服饰美妆';
                    } else if(this.ruleForm.type == 1){
                        this.ruleForm.type='家用电器';
                    } else if(this.ruleForm.type == 2){
                        this.ruleForm.type='电脑数码';
                    }
                }, error => {
                    console.log('请启动node server')
                });
            },
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
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
