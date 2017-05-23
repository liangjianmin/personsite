<template>
    <el-col :span="8">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="商品名称" prop="shopname">
                <el-input v-model="ruleForm.shopname" placeholder="请填写商品名称"></el-input>
            </el-form-item>
            <el-form-item label="商品编号" prop="shopnumber">
                <el-input v-model="ruleForm.shopnumber" placeholder="请填写商品编号"></el-input>
            </el-form-item>
            <el-form-item label="商品类别">
                <el-select v-model="ruleForm.type" clearable placeholder="请选择">
                    <el-option v-for="item in rolesoption" :key="item.id" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="价格：" prop="price">
                <el-input-number v-model="ruleForm.price" :min="0" :max="10000"></el-input-number>
            </el-form-item>
            <el-form-item label="库存：" prop="stocknum">
                <el-input-number v-model="ruleForm.stocknum" :min="0" :max="500"></el-input-number>
            </el-form-item>
            <el-form-item label="评分：" prop="evaluate">
                <el-rate  disabled show-text v-model="ruleForm.evaluate" text-template="{value}" text-color="#ff9900"></el-rate>
            </el-form-item>
            <el-form-item label="商品描述：" prop="describes">
                <el-input type="textarea" v-model="ruleForm.describes"></el-input>
            </el-form-item>
            <el-form-item label="上传图片：">
                <el-upload  :file-list="fileList" name="inputFile"  action="shopupload"  list-type="picture-card" :before-upload="handlePictureBefore" :on-change="handlePictureChange" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleAvatarSuccess">
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog v-model="dialogVisible" size="tiny">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            </el-form-item>
        </el-form>
    </el-col>
</template>

<style scoped>
    .el-rate {
        line-height: 2;
    }
    .el-form-item .el-form-item__content{
        white-space: nowrap !important;
    }
</style>
<script type="es6">
    import {mapState} from 'vuex'

    export default {
        name: 'editshop',
        data() {
            return {
                uploadFlag: false,
                dialogImageUrl: '',
                dialogVisible: false,
                fileList: [{url: ''}],
                ruleForm: {
                    shopname: '',
                    price: 0,
                    shopnumber:'',
                    stocknum: 0,
                    evaluate: 0,
                    describes: '',
                    imgid: 0,
                    type:0,
                    id:0
                },
                rules: {},
                rolesoption: [{
                    value: '0',
                    label: '服饰美妆'
                }, {
                    value: '1',
                    label: '家用电器'
                }, {
                    value: '2',
                    label: '电脑数码'
                }]
            }
        },
        created(){
            var path = this.$route.query.id;
            if (path != undefined) {
                this.getshop(path);
            }
        },
        watch: {
            $route(to){
                var path = this.$route.query.id;
                if (path != undefined) {
                    this.getshop(path);
                }
            }
        },
        methods: {
            getshop(path){
                this.$http.get('getshop?id=' + path).then(res => {
                    this.ruleForm = res.data.data.shop[0];
                    /*设置图片地址*/
                    this.fileList[0].url='http://127.0.0.1:3838/static/upload/shop/'+res.data.data.shop[0].url;
                    if(this.ruleForm.type == 0){
                        this.ruleForm.type='服饰美妆';
                    } else if(this.ruleForm.type == 1){
                        this.ruleForm.type='家用电器';
                    } else if(this.ruleForm.type == 2){
                        this.ruleForm.type='电脑数码';
                    }
                }, error => {
                    console.log('请启动node server')
                });
            },
            submitForm(formName) {
                var self = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$http.post('shopupdate', {
                            shopname: this.ruleForm.shopname,
                            price: this.ruleForm.price,
                            describes: this.ruleForm.describes,
                            evaluate: this.ruleForm.evaluate,
                            imgid: this.ruleForm.imgid,
                            stocknum: this.ruleForm.stocknum,
                            shopnumber:this.ruleForm.shopnumber,
                            type:this.ruleForm.type,
                            id: this.ruleForm.id
                        }).then(res => {
                            this.$message({
                                type: 'success',
                                message: '修改商品成功',
                                duration: 1000,
                                onClose: function () {
                                    self.$router.push({path: '/shoplist'});
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
