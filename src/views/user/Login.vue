<template>
    <el-col :span="24" type="flex" class="row-bg" justify="between">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请填写用户名" type="text"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass" placeholder="请填写密码" type="password"></el-input>
            </el-form-item>
            <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>
<style scoped>
    .remember{
        color: #fff;
        margin-left: 100px;
        margin-bottom: 16px;
    }
</style>
<script>
    import {mapState} from 'vuex'
    import util from '../../util/cookie'
    export default {
        name: 'login',
        data() {
            return {
                checked:true,
                ruleForm: {
                    name: '',
                    pass: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'change'},
                        {min: 2, max: 9, message: '用户长度在 3 到 9 个字符', trigger: 'change'}
                    ],
                    pass: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ]
                }
            }
        },
        mounted:function () {
          this.init()
        },
        methods: {
            init:function () {
                /*获取保存的密码*/
                var ruleformdata=util.getCookie('userinfo');
                if(ruleformdata){
                    this.ruleForm=JSON.parse(ruleformdata);
                }
            },
            submitForm(formName) {
                var self = this;
                /*保存密码*/
                if(this.checked){
                    util.setCookie('userinfo', JSON.stringify(self.ruleForm),30);
                }else{
                    util.setCookie('userinfo', '',0);
                }
                this.$http.post('login', {
                    username: this.ruleForm.name,
                    password: this.ruleForm.pass,
                }).then(res => {
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
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
