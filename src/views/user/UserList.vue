<template>
    <el-col :span="24">
        <el-table :data="pagelist" border  v-loading="pagelist == undefined " element-loading-text="拼命加载中">
              <el-table-column property ="id" label="ID"></el-table-column>
              <el-table-column prop="time" label="日期"></el-table-column>
              <el-table-column prop="username" label="姓名"></el-table-column>
              <el-table-column property="sex" label="性别"></el-table-column>
              <el-table-column prop="role" label="角色"></el-table-column>
              <el-table-column prop="info" label="信息"></el-table-column>
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
.page-block{
    padding:40px 10px 0px 40px;
    text-align: right;
}
</style>
<script>
    import {mapState} from 'vuex'
    export default {
        name: 'userlist',
        data() {
            return {
              currentPage: 1,
            }
        },
        computed: mapState({
            user: state => state.user.sessiondata,
            page:state => state.user.userlist,
            pagelist (state) {
              var obj=Object.assign(state.user.userlist);
              if(obj.hasOwnProperty('list')){
                return obj.list.data;
              }
            }
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
                this.$store.dispatch({
                    type: 'user',
                    queryStr: this.currentPage
                });
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
                this.currentPage=val;
                this.$store.dispatch({
                    type: 'user',
                    queryStr: this.currentPage
                });
            }
        }
    }
</script>
