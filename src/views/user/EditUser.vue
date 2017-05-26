<template>
  <el-col :span="8">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="user">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请填写用户名" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio class="radio" v-model="ruleForm.sex" label="1">美眉</el-radio>
        <el-radio class="radio" v-model="ruleForm.sex" label="2">帅锅</el-radio>
      </el-form-item>
      <el-form-item label="权限">
        <el-select v-model="ruleForm.role" clearable placeholder="请选择">
          <el-option v-for="item in rolesoption" :key="item.id" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>

<style scoped>

</style>
<script type="es6">
  import {mapState} from 'vuex'

  export default {
    name: 'edituser',
    data() {
      return {
        ruleForm: {
          username: '',
          sex: '1',
          role: '',
          password: '',
          id: 1
        },
        rules: {},
        rolesoption: [{
          value: '2',
          label: '普通用户'
        }, {
          value: '1',
          label: '管理员'
        }, {
          value: '0',
          label: '超级管理员',
          disabled: true
        }]
      }
    },
    created(){
      var path = this.$route.query.id;
      if (path != undefined) {
        this.getUser(path);
      }
    },
    watch: {
      $route(to){
        var path = this.$route.query.id;
        if (path != undefined) {
          this.getUser(path);
        }
      }
    },
    methods: {
      getUser(path){
        this.$http.get('getuser?id='+path).then(res => {
         this.ruleForm=res.data.data[0];
        }, error => {
          console.log('请启动node server')
        });
      },
      submitForm(formName) {
        var self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('updateUsers', {
              username: this.ruleForm.username,
              password: this.ruleForm.password,
              sex: this.ruleForm.sex,
              role: this.ruleForm.role,
              id: this.ruleForm.id
            }).then(res => {
              this.$message({
                type: 'success',
                message: '修改成功',
                duration: 1000,
                onClose: function () {
                  self.$router.push({path: '/userlist'});
                }
              });
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
