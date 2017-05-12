<template>
    <el-col :span="24">
        <el-table  border   element-loading-text="拼命加载中">
              <el-table-column property ="id" label="ID"></el-table-column>
              <el-table-column prop="time" label="商品名称"></el-table-column>
              <el-table-column prop="username" label="价格"></el-table-column>
              <el-table-column property="sex" label="库存"></el-table-column>
              <el-table-column prop="role" label="评分"></el-table-column>
              <el-table-column prop="info" label="商品描述"></el-table-column>
              <el-table-column label="操作">
                  <template scope="scope">
                      <el-button size="small" @click="handleEdit(scope.$index, scope.row)" :disabled="scope.row.role == '超级管理员' ? user.role == 1 || user.role == 2 : false">编辑</el-button>
                      <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)" :disabled="scope.row.role == '超级管理员' ? user.role == 1 || user.role == 2 : false">删除</el-button>
                  </template>
              </el-table-column>
        </el-table>
        <div class="page-block">
        </div>
    </el-col>
</template>

<style scoped>
.page-block{
    padding:40px 10px 0px 40px;
    text-align: right;
}
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'shoplist',
        data() {
            return {
              currentPage: 1,
            }
        },
        computed: mapState({

        }),
        mounted(){
            this.getUserlist();
        },
        watch: {
            $route(to){
                var path = to.path.substring(1);
                if (path == 'userlist') {
                    this.getUserlist();
                }
            }
        },
        methods: {
            getUserlist(){

            },
            handleEdit(index, row) {
                this.$router.push({path: '/editUser', query: {id: row.id}});
            },
            handleDelete(index, row){
                var self = this;
                this.$confirm('确定删除该用户嘛', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                }).then(() => {
                    this.$http.post('deleteUsers', {
                    id: row.id
                }).then(() => {
                    this.$message({
                    type: 'success',
                    duration: 1000,
                    message: '删除成功!',
                    onClose: function () {
                        self.getUserlist();
                    }
                });
            });
            }).catch(() => {});
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {

            }
        }
    }
</script>
