<template>
    <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请填写用户名" type="text"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-radio class="radio" v-model="ruleForm.sex" label="1">女</el-radio>
                <el-radio class="radio" v-model="ruleForm.sex" label="2">男</el-radio>
            </el-form-item>
            <el-form-item label="权限">
                <el-select v-model="ruleForm.role" clearable placeholder="请选择">
                    <el-option v-for="item in rolesoption" :key="item.id" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入你的文艺名言" v-model="ruleForm.info"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>
<style scoped>

</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name:'user',
        data() {
            var checkpass = (rule, value, callback) => {
                if (value !== this.ruleForm.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            return {
                ruleForm: {
                    name: '',
                    pass: '',
                    sex: '1',
                    checkPass: '',
                    role: '2',
                    info:''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名', trigger: 'change'},
                        {min: 2, max: 9, message: '用户长度在 3 到 9 个字符', trigger: 'change'}
                    ],
                    pass: [
                        {required: true, message: '请输入密码', trigger: 'change'}
                    ],
                    checkPass: [
                        {required: true, message: '请确定密码', trigger: 'change'},
                        {validator: checkpass, trigger: 'blur'}
                    ]
                },
                rolesoption: [{
                    value: '0',
                    label: '超级管理员'
                }, {
                    value: '1',
                    label: '管理员'
                }, {
                    value: '2',
                    label: '普通用户'
                }]
            };
        },
        methods: {
            submitForm(formName) {
                var self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('addUsers', {
                            username: this.ruleForm.name,
                            password: this.ruleForm.pass,
                            sex: this.ruleForm.sex,
                            info: this.ruleForm.info,
                            role:this.ruleForm.role
                        }).then(res => {
                            if (res.data.isOwn) {
                                this.$message({
                                    type: 'error',
                                    message: '该用户' + res.data.data + '已经注册'
                                });
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: '注册成功',
                                    duration: 1000,
                                    onClose: function () {
                                        self.$router.push({path: '/userlist'});
                                    }
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
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>
