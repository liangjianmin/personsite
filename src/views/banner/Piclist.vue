<template>
  <div>

    <table class="bannerTable" border="1">
      <caption>只有超级管理员可以编辑</caption>
      <thead>
      <tr>
        <th>id</th>
        <th>名字</th>
        <th>张数</th>
        <th>上传者</th>
        <th>时间</th>
        <th>图片</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody v-for="mes in tableData" :key="mes">
        <tr v-for="(item,index) in mes" :key="item">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td :rowspan="mes.length" v-if="index==0">{{mes.length}}张</td>
          <td>{{item.from}}</td>
          <td>{{item.time}}</td>
          <td><img :src="'http://127.0.0.1:3838/static/banner/'+item.name" width="50" height="50" /> </td>
          <td :rowspan="mes.length" v-if="index==0">
            <el-button v-if="item.desc!='banner table use1'"  type="primary" @click="online(item.id)" :disabled="user.role==0?false:true">上线</el-button>
            <el-button v-else  type="primary" :disabled="true">上线</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="block right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.page.pindex"
        :page-sizes="[1, 2, 3, 4]"
        :page-size="this.page.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="this.page.total">
      </el-pagination>
    </div>
  </div>
</template>
<style scoped>

.ban-list-img{padding: 5px;display: block;margin: 0 auto;    font-size: 14px;}
  .bannerTable{border: 1px solid #dfe6ec;}
  .bannerTable th{text-align: center;    height: 40px;
    word-wrap: normal;
    width: 250px;
    min-width: 0;
    text-overflow: ellipsis;
    vertical-align: middle;
    white-space: nowrap;
    overflow: hidden;
    background-color: #eef1f6;
    position: relative; font-size: 14px;
  }
.bannerTable td{
  text-align: center;
  word-wrap: normal;
  text-overflow: ellipsis;
  position: relative;
  vertical-align: middle; font-size: 14px;
}
.bannerTable td img{
      display: block;padding: 5px 0;margin: 0 auto;
}
</style>
<script>
  import {mapState} from 'vuex';
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  export default {
    name: 'shopsave',
    components: {ElButton},
    data(){
      return {
        tableData: [],
        page:{
            pindex:1,
          pagesize:3,
          total:1,
        }
      }
    },
    computed: mapState({
      user: state => state.user.sessiondata
    }),
    mounted(){
      this.init();
    },
    methods: {
        init () {
          this.getImgList();
        },
    handleCurrentChange(val) {
      this.page.pindex=val;
      this.getImgList();
    },
      online(id){
        var _this=this;
        _this.$confirm('是否上线替换原图片?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.$http.get('updatabanner?id='+id+'').then(res=>{
            _this.$message({
              type: 'success',
              message: '上线成功!',
              duration: 1000,
              onClose:function () {
                _this.getImgList();
              }
            });
          })

        }).catch(() => {
          _this.$message({
            type: 'info',
            message: '哈哈 ，上线失败'
          });
        });
      },
      handleSizeChange(val){
        this.page.pagesize=val;
        this.getImgList();
      },
        getImgList(){
            var _this=this;
          _this.$http.get('bannerall?pindex='+(_this.page.pindex-1)*_this.page.pagesize+'&pagesize='+_this.page.pagesize+'').then(res=>{
              let allDate=[];
               if(res.status){
                   if(res.data.data[0].url!=''){
                      let dataAll=res.data.data;
                       dataAll.forEach(function (el,index) {
                           let item=el.url.split(',');
                            allDate[index]=[];
                         item.forEach(function (ms) {
                           allDate[index].push({name:ms,from:el.from,time:el.time,id:el.id,desc:el.desc})
                         })
                       });
                       _this.tableData=allDate;
                     _this.page.total=res.data.count;
                   }
               }
             }).catch()
        }
    }
  }
</script>
