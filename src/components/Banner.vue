<template>
  <el-col :span="10">
    <el-form ref="form" :model="banner" label-width="80px">
      <el-form-item label="图片名称">
        <el-input v-model="banner.name"></el-input>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload
          class="upload-demo"
          ref="upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :multiple="true"
          :show-file-list="true"
          :on-success="handleAvatarSuccess"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">最多上传5张</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitFrom">立即上传</el-button>
      </el-form-item>
    </el-form>


  </el-col>
</template>

<script>
  import ElFormItem from "../../Auctions/node_modules/element-ui/packages/form/src/form-item";
  export default {
    components: {ElFormItem}, data() {
      return {
        banner:{
          name
        },
        imageUrl:[],
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    mounted(){

    },
    methods:{
      submitFrom(){
        this.$http.get('Banner',function (res) {
          console.log(res)
        })
      }
    }



  }
</script>

<style>

</style>
