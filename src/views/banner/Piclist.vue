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
       <div>1213</div>
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
        init(){
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
          console.log(index)
           console.log(row)
      
        }
    }
  }
</script>
