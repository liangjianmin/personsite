<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      label="id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="from"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间">
    </el-table-column>
    <el-table-column
      prop="url"
      label="地址">
    </el-table-column>
    <el-table-column
      label="删除" align="center" >
      <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style scoped>
.center{text-align:center;}
</style>
<script>
  import {mapState} from 'vuex'
  export default {
    name: 'shopsave',
    data(){
      return {
        tableData: []
      }
    },
    mounted(){
      this.init();
    },
    methods: {
        init:function () {
          this.getImgList()
        },
        getImgList(){
             this.$http.get('bannerlist').then(res=>{
               if(res.status){
                  this.tableData=res.data.data;
               }
             })
        },

        handleDelete(index,row){
          var _this=this;
          this.$http.post('bannerremove',{
              id:row.id
          }).then(res=>{
            if(res.status){
              this.$message({
                type: 'success',
                message: '删除成功',
                duration: 1000,
                showClose:true,
                onClose: function () {
                  _this.$http.get('bannerlist').then(res=>{
                    if(res.status){
                      _this.tableData=res.data.data;
                    }
                  })
                }
              });
            }
          })

        }
    }
  }
</script>
