<template>
  <el-col :span="10">
    <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" enctype="multipart/form-data">
      <el-form-item label="上传图片：">
        <el-upload  name="inputFile"
                    ref="upload"
                    action="bannerreceive"
                    list-type="picture-card"
                    :on-change="handlePictureChange"
                    :on-preview="handlePictureCardPreview"
                    :on-progress="handlePreview"
                    :on-remove="handleRemove"
                    :before-upload="handlePictureBefore"
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
        },
        imgdata:[]
      };
    },
    computed: mapState({
      user: state => state.user.sessiondata
    }),
    mounted(){

    },
    methods: {
      submitForm(){
            var _this=this;

            let data={
                url:_this.imgdata
            }
            this.$http.post('/bannerload',{data},function (res) {
                if(res.status){
                  _this.$message({
                    type: 'success',
                    message: '上传成功',
                    duration: 1000,
                    onClose:function () {
                      _this.$router.push({path: '/bannerlist'});
                    }
                  });
                }
            })
      },
      resetForm(formName) {
          console.log('asd')

      },
      handlePreview(file){

      },
      handleRemove(file,fileList){
        var _this=this;
        _this.imgdata=[]
        fileList.forEach(function (e) {
          _this.imgdata.push(e.name)
        })
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleAvatarSuccess(res, file, fileList) {
          var _this=this;
          if(res.staus){
            _this.imgdata=res.imgurl[0].url.split(',');//把数据库的url取出;
            //将图片加入到imgdata
            fileList.forEach(function (e) {
              _this.imgdata.push(e.name)
            })

          };
      },
      handlePictureBefore(file){
        if (this.uploadFlag) {
          return false;
        }
      },
      handlePictureChange(file, fileList){
        /*if (fileList.length > 1) {
          this.uploadFlag = true;
          this.$message({
            type: 'error',
            message: '亲，只能上传一张图片',
            duration: 1000
          });
        }
          this.fileList=fileList.length;
*/
      }
    }
  }
</script>
