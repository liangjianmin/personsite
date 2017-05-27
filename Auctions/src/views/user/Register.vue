<template>
    <div class="pageview clr">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
            <el-form-item prop="account">
                <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="account">
                <el-input type="text" v-model="ruleForm.account" auto-complete="off" placeholder="请设置用户名"></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请设置密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit">注册</el-button>
                <el-button type="text" @click.native.prevent="handleIs" style="margin-left: 45px">已有帐，登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }

    .login-container {
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 400px;
        padding: 55px 55px 15px;
        background: #fff;
        border: 1px solid #eaeaea;

    }

    .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .remember {
        margin: 0px 0px 35px 0px;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default{
        name: 'register',
        data() {
            return {
                logining: false,
                ruleForm: {
                    account: '',
                    checkPass: ''
                },
                rules: {
                    account: [
                        {required: true, message: '请输入账号', trigger: 'change'},
                    ],
                    checkPass: [
                        {required: true, message: '请输入密码', trigger: 'change'},
                    ]
                },
                checked: true
            }
        },
        methods: {
            handleSubmit(ev) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.logining = true;

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleIs(){
                this.$router.push({path: '/login'});
            }
        }
    }
</script>
