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
  </el-table>
</template>
<style scoped>
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
             this.$http.get('getimglist?p=1').then(res=>{
               if(res.status){
                  this.tableData=res.data.data;
               }
             })
        }
    }
  }
</script>
