<template>
    <el-col :span="10">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" enctype="multipart/form-data">
            <el-form-item label="商品名称：" prop="shopname">
                <el-input v-model="ruleForm.shopname"></el-input>
            </el-form-item>
            <el-form-item label="价格：" prop="price">
                <el-input-number v-model="ruleForm.price" :min="0" :max="10000"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：" prop="stocknum">
                <el-input-number v-model="ruleForm.stocknum" :min="0" :max="500"></el-input-number>
            </el-form-item>
            <el-form-item label="评分：" prop="evaluate">
                <el-rate v-model="ruleForm.evaluate" disabled   text-template="{value}"></el-rate>
            </el-form-item>
            <el-form-item label="商品描述：" prop="describe">
                <el-input type="textarea" v-model="ruleForm.describe"></el-input>
            </el-form-item>
            <el-form-item label="上传图片：">
                <el-upload  name="inputFile"  action="shopupload"  list-type="picture-card" :before-upload="handlePictureBefore" :on-change="handlePictureChange" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleAvatarSuccess">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>
<style scoped>
    .el-rate{
        line-height: 2;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'shopsave',
        data() {
            return {
                uploadFlag: false,
                dialogImageUrl: '',
                dialogVisible: false,
                ruleForm: {
                    shopname: '',
                    price: 0,
                    stocknum: 0,
                    evaluate: 0,
                    describe: '',
                    imgid: 0,
                },
                rules: {
                    shopname: [
                        {required: true, message: '请输入商品名称', trigger: 'change'},
                        {min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change'}
                    ],
                    describe: [
                        {required: true, message: '请输入商品描述', trigger: 'change'}
                    ]
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
                            if(this.ruleForm.imgid == 0){
                                this.$message({
                                    type: 'error',
                                    message: '请至少上传一张图片',
                                    duration: 1000
                                });
                            }else{
                                this.$http.post('shopsave', {
                                    shopname: this.ruleForm.shopname,
                                    price: this.ruleForm.price,
                                    describe: this.ruleForm.describe,
                                    evaluate: this.ruleForm.evaluate,
                                    stocknum: this.ruleForm.stocknum,
                                    imgid: this.ruleForm.imgid
                                }).then(res => {
                                    if (res.data.status) {
                                        this.$message({
                                            type: 'success',
                                            message: '商品添加成功',
                                            duration: 1000,
                                            onClose: function () {
                                                self.$router.push({path: '/shoplist'});
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
                this.$refs[formName].resetFields();
            },
            handleRemove(file, fileList) {
                this.uploadFlag = false;
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleAvatarSuccess(res, file, fileList) {
                if (res.status) {
                    this.ruleForm.imgid = res.id;
                }
            },
            handlePictureBefore(file){
                if (this.uploadFlag) {
                    return false;
                }
            },
            handlePictureChange(file, fileList){
                if (fileList.length > 1) {
                    this.uploadFlag = true;
                    this.$message({
                        type: 'error',
                        message: '亲，只能上传一张图片',
                        duration: 1000
                    });
                }
            }
        }
    }
</script>
