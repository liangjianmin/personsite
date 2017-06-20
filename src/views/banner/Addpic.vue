<template>
  <el-col :span="10">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" enctype="multipart/form-data">
      <el-form-item label="上传图片：">
        <el-upload  name="inputFile"
                    ref="upload"
                    action="bannerreceive"
                    list-type="picture-card"
                    :on-progress="handlePreview"
                    :before-upload="handlePictureBefore"
                    :multiple="true"
                    :auto-upload="false"
                    :on-success="handleAvatarSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :disabled="user.role==0?false:true" @click="submitForm() ">提交</el-button>
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
        fileList: 0,
        ruleForm: {
          imgid: 0
        },
        imgdata: [],
        upSuccess:0
      };
    },
    computed: mapState({
      user: state => state.user.sessiondata
    }),
    mounted(){

    },
    methods: {
      submitForm(){
        var _this = this;
        _this.upSuccess=0;
        var len=document.getElementsByClassName('is-ready').length;
        if (len < 3 || len > 5) {
          _this.$message({
            type: 'error',
            message: '请选择上传3至5图片',
            duration: 1000,
          })
        } else {
          _this.$refs.upload.submit();
        }

      },
      handlePreview(file){
       /* this.dialogImageUrl = file.url;
        this.dialogVisible = true;*/
      },
      handleAvatarSuccess(res, file, fileList) {
          let _this=this;
        _this.upSuccess++;
         _this.imgdata=[];
          if(res.staus){
              fileList.forEach(function (e) {
                _this.imgdata.push(e.name)
              });
              if(_this.upSuccess==fileList.length){
                _this.$http.post('bannerload', {url:_this.imgdata}).then(res => {
                  if (res.status) {
                    _this.$message({
                      type: 'success',
                      message: '上传成功',
                      duration: 1000,
                      onClose: function () {
                        _this.$router.push({path: '/bannerlist'});
                      }
                    })
                  }
                })
              }
          }
      },
      handlePictureBefore(file){
        if (this.uploadFlag) {
          return false;
        }
      },
    }
  }
</script>
