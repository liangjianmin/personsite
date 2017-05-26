<template>
  <el-col :span="10">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" enctype="multipart/form-data">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="starttime">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.starttime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="endtime">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.endtime" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="上传图片">
        <el-upload :multiple="true" name="inputFile" action="fileUpload"  list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleAvatarSuccess">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog v-model="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-col>
</template>
<style scoped>

</style>
<script>
    export default {
        name: 'publish',
        data() {
            return {
                imageUrl:[],
                dialogImageUrl: '',
                dialogVisible: false,
                ruleForm: {
                    name: '',
                    region: '',
                    starttime: '',
                    endtime: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入活动名称', trigger: 'change'},
                        {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change'}
                    ],
                    region: [
                        {required: true, message: '请选择活动区域', trigger: 'change'}
                    ],
                    starttime: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    endtime: [
                        {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
                    ],
                    type: [
                        {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
                    ],
                    resource: [
                        {required: true, message: '请选择活动资源', trigger: 'change'}
                    ]
                }
            };
        },
        mounted(){

        },
        methods: {
            submitForm(formName) {
                var self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('publish', {
                            name: this.ruleForm.name,
                            region: this.ruleForm.region,
                            starttime: this.ruleForm.starttime,
                            endtime: this.ruleForm.endtime,
                            type: this.ruleForm.type.join(','),
                            imageUrl:this.imageUrl.join(','),
                            delivery: this.ruleForm.delivery,
                            resource: this.ruleForm.resource,
                            desc: this.ruleForm.desc
                        }).then(res => {
                            if (res.data.status) {
                                this.$message({
                                    type: 'success',
                                    message: '发布成功',
                                    duration: 1000,
                                    onClose: function () {
                                        self.$router.push({path: '/home'});
                                    }
                                });
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '发布失败',
                                    duration: 1000,
                                    onClose: function () {

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
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleAvatarSuccess(res, file,fileList) {
                var arr=[];
                for(let i in fileList){
                    arr.push(fileList[i].name);
                }
                this.imageUrl=arr;
            }
        }
    }
</script>
