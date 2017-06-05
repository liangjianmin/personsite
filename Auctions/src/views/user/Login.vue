<template>
    <div class="pageview clr">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            <el-form-item>
                <el-button type="primary"  @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
                <el-button @click.native.prevent="handleRegisterSubmit">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<style scoped lang="scss">
    .pageview {
        width: 1200px;
        margin: 20px auto 0;
    }
    .login-container{
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 500px;
        padding: 35px 55px 15px;
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
        name: 'login',
        data() {
            return {
                logining: false,
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        { required: true, message: '请输入账号', trigger: 'change' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'change' },
                    ]
                },
                checked: true
            }
        },
        methods:{
            handleSubmit(ev) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        this.logining = true;
                        var self = this;
                        this.$http.post('logins', {
                            username: this.ruleForm.username,
                            password: this.ruleForm.password,
                            flag:'client'
                        }).then(res => {
                            this.logining = false;
                            if (res.data.status) {
                                self.$store.dispatch({
                                    type: 'getsession'
                                });
                                this.$message({
                                    type: 'success',
                                    message: '登录成功',
                                    duration: 1000,
                                    showClose:true,
                                    onClose: function () {
                                        self.$router.push({path: '/home'});
                                    }
                                });
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '用户名或者密码错误',
                                    duration: 1000,
                                    showClose:true
                                });
                            }
                        }, error => {
                            console.log('请启动node server')
                        });
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            handleRegisterSubmit(){
                this.$router.push({path: '/register'});
            }
        }
    }
</script>
