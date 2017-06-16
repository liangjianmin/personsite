<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="id"
      align="center"
      label="id">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="名字">
    </el-table-column>
    <el-table-column
      prop="from"
      align="center"
      label="上传者">
    </el-table-column>
    <el-table-column
      prop="time"
      align="center"
      label="时间">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="图片">
      <template scope="scope">
        <img class="ban-list-img" :src="'http://127.0.0.1:3838/static/banner/'+scope.row.name"  width="50" height="50" />
      </template>
    </el-table-column>
    <el-table-column
      label="操作" align="center" >
      <template scope="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>
<style scoped>
.ban-list-img{padding: 5px;display: block;margin: 0 auto}
</style>
<script>
  import {mapState} from 'vuex';
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
            var _this=this;
          _this.tableData=[];
             this.$http.get('bannerlist').then(res=>{
               if(res.status){
                   if(res.data.data[0].url!=''){
                     let item=res.data.data[0].url.split(',');
                     item.forEach(function (o) {
                       _this.tableData.push({name:o,from:res.data.data[0].from,time:res.data.data[0].time,id:res.data.data[0].id});
                     });
                   }else {
                     _this.tableData=[]
                   }
               }
             })
        },
        handleDelete(index,row){
          let _this=this;
          let upData=[];
          _this.tableData.forEach(function (e) {
            upData.push(e.name)
          });
          upData.splice(index,1);
          this.$http.post('delbanner',{url:upData.join(','),delurl:row.name}).then(res=>{
              if(res.status){
                this.$message({
                  message: '删除成功',
                  type: 'success',
                  duration: 1000,
                  onClose:function () {
                    _this.getImgList()
                  }
                });
              }
          })
        }
    }
  }
</script>
