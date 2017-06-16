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
        imgdata:[],
        banner:{
          data:[],
          imgListDate:[],
          nowdata:[],
          delOldData:false
        }

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
            _this.banner.nowdata=_this.banner.imgListDate.concat(_this.banner.data);
            if(_this.fileList<3 || _this.fileList>5){
              _this.$message({
                type: 'error',
                message: '请选择上传3至5图片',
                duration: 1000,
              })
            }else {
                _this.delDate()

            }
      },
      delDate() {
        var _this=this;
        _this.$confirm('是否覆盖之前图片?', '提示', {
          confirmButtonText: '覆盖',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.banner.nowdata=_this.banner.imgListDate;
          _this.$message({
            type: 'success',
            message: '点击上传覆盖!',
            duration: 1000,
            onClose:function () {
              _this.uploadImg()
            }
          });

        }).catch(() => {
          _this.$message({
            type: 'info',
            message: '已取消删除,',
            duration: 1000,
            onClose:function () {
                /**
                 * 列表数据加上数据库数据
                 * */
              _this.banner.nowdata=_this.banner.imgListDate.concat(_this.banner.data);
              _this.uploadImg()
            }
          });
        });
      },
      uploadImg(){
          var _this=this;
        _this.$confirm('是否上传','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
            _this.addData()
        }).catch(()=>{
          _this.banner.nowdata=[]
        })
      },
      addData(){
        var _this=this;
        let data=_this.banner.nowdata.join(',');
                 _this.$http.post('bannerload',{url:data,delurl:_this.banner.data}).then(res=>{
                    if(res.status){
                      _this.$message({
                        type: 'success',
                        message: '上传成功',
                        duration: 1000,
                        onClose:function () {
                          _this.$router.push({path: '/bannerlist'});
                        }
                      })
                    }
                });
      },
      resetForm(formName) {
      },
      handlePreview(file){

      },
      handleRemove(file,fileList){
        var _this=this;
        _this.imgdata=[];
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
          _this.fileList=fileList.length;
         _this.banner.imgListDate=[];
          if(res.staus){
              _this.banner.data=res.imgurl[0].url.split(',');
              fileList.forEach(function (e) {
                _this.banner.imgListDate.push(e.name)

              });
          };
      },
      handlePictureBefore(file){
        if (this.uploadFlag) {
          return false;
        }
      },
      handlePictureChange(file, fileList){

      }
    }
  }
</script>
