<template>
  <el-col :span="10">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" enctype="multipart/form-data">
      <el-form-item label="上传图片：">
        <el-upload  name="inputFile"
                    ref="upload"
                    action="bannerload"
                    list-type="picture-card"
                    :on-change="handlePictureChange"
                    :on-preview="handlePictureCardPreview"
                    :on-progress="handlePreview"
                    :on-remove="handleRemove"
                    :auto-upload="false"
                    :multiple="true"
                    :on-success="handleAvatarSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>
<style scoped>

</style>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'banneradd',
    data() {
      return {
        uploadFlag: false,
        dialogImageUrl: '',
        dialogVisible: false,
        fileList:0,
        ruleForm: {
          imgid: 0
        }
      };
    },
    computed: mapState({
      user: state => state.user.sessiondata
    }),
    mounted(){

    },
    methods: {
      submitForm(formName) {
        var self = this;

        this.$refs[formName].validate((valid) => {
          if (valid) {
            if(this.$store.state.user.sessiondata !=''){
              if(this.fileList<1){
                this.$message({
                  type: 'error',
                  message: '请至少上传一张图片',
                  duration: 1000
                });
              }else {
                this.$refs.upload.submit();
              }
            }else{
              this.$message({
                type: 'error',
                message: '未登录',
                duration: 1000
              });
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
          console.log('asd')

      },
      handlePreview(file){

      },
      handleRemove(){},
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file, fileList) {
        this.$message({
          type: 'success',
          message: '上传成功',
          duration: 1000
        });
      },
      handlePictureChange(file, fileList){
          this.fileList=fileList.length;
        this.uploadFlag = true;
      }
    }
  }
</script>
