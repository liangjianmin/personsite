<template>
    <div class="pageview clr">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
            <el-form-item prop="phone">
                <el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="手机号"></el-input>
            </el-form-item>
            <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" auto-complete="off" placeholder="请设置用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请设置密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click.native.prevent="handleSubmit" :loading="logining">注册</el-button>
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
            var checktel = (rule, value, callback) => {
                var tel = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!tel.test(value)) {
                    callback(new Error('请输入正确的手机号!'));
                } else {
                    callback();
                }
            }
            return {
                logining: false,
                ruleForm: {
                    phone: '',
                    username: '',
                    password: ''
                },
                rules: {
                    phone: [
                        {required: true, message: '请填写手机号', trigger: 'change'},
                        {validator: checktel, trigger: 'change'}
                    ],
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'change'}
                    ],
                    password: [
                        {required: true, message: '请设置密码', trigger: 'change'}
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
                        var self = this;
                        this.$http.post('register', {
                            phone: this.ruleForm.phone,
                            username: this.ruleForm.username,
                            password: this.ruleForm.password
                        }).then(res => {
                            this.logining = false;
                            if(res.data.isOwn){
                                this.$message({
                                    type: 'error',
                                    message: '已经注册了',
                                    duration: 1000
                                });
                            }else{
                                this.$router.push({path: '/login'});
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
            handleIs(){
                this.$router.push({path: '/login'});
            }
        }
    }
</script>
