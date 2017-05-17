<template>
    <el-col :span="24">
        <el-table :data="pagelist" border v-loading="pagelist == undefined " element-loading-text="拼命加载中">
            <el-table-column property="id" label="ID"></el-table-column>
            <el-table-column prop="shopname" label="商品名称"></el-table-column>
            <el-table-column prop="shopnumber" label="商品编号"></el-table-column>
            <el-table-column prop="price" label="价格（元）"></el-table-column>
            <el-table-column property="stocknum" label="库存（件，个）"></el-table-column>
            <el-table-column prop="evaluate" label="评分"></el-table-column>
            <el-table-column prop="describes" label="商品描述"></el-table-column>
            <el-table-column prop="type" label="商品类别">
                <template scope="scope">
                    <el-tag type="success"  close-transition v-if="scope.row.type == 0">{{scope.row.type == 0 ? '服饰美妆':''}}</el-tag>
                    <el-tag type="primary"  close-transition v-else-if="scope.row.type == 1">{{scope.row.type == 1 ? '家用电器':''}}</el-tag>
                    <el-tag type="danger"  close-transition v-else-if="scope.row.type == 2">{{scope.row.type == 2 ? '电脑数码':''}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="url" label="图片" width="100">
                <template scope="scope">
                    <img class="pic" :src="'/static/upload/shop/'+scope.row.url">
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)" :disabled="scope.row.role == '超级管理员' ? user.role == 1 || user.role == 2 : false">编辑</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" :disabled="scope.row.role == '超级管理员' ? user.role == 1 || user.role == 2 : false">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="page-block">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage"  :page-size="page.limit" layout="total,prev, pager, next, jumper" :total="page.count"></el-pagination>
        </div>
    </el-col>
</template>

<style scoped>
    .page-block {
        padding: 40px 10px 0px 40px;
        text-align: right;
    }

    .pic {
        padding: 5px;
        width: 50px;
        height: 50px;
        text-align: center;
        box-sizing: border-box;
        display: block;
        margin: 0 auto;
    }
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'shoplist',
        data() {
            return {
                currentPage: 1
            }
        },
        computed: mapState({
            user: state => state.user.sessiondata,
            page:state => state.shop.shoplist,
            pagelist (state) {
                var obj = Object.assign(state.shop.shoplist);
                if (obj.hasOwnProperty('list')) {
                    return obj.list.data;
                }
            }
        }),
        mounted(){
            this.getlist();
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                if (path == 'shoplist') {
                    this.getlist();
                }
            }
        },
        methods: {
            getlist(){
                this.$store.dispatch({
                    type: 'shop',
                    queryStr: this.currentPage
                });
            },
            handleEdit(index, row) {
                this.$router.push({path: '/editshop', query: {id: row.id}});
            },
            handleDelete(index, row){
                var self = this;
                this.$confirm('确定删除该用户嘛', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.$http.post('deleteShop', {
                        id: row.id
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            duration: 1000,
                            message: '删除成功!',
                            onClose: function () {
                                self.getlist();
                            }
                        });
                    });
                }).catch(() => {
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage=val;
                this.$store.dispatch({
                    type: 'shop',
                    queryStr: this.currentPage
                });
            }
        }
    }
</script>
