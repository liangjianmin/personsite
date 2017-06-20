/**
 * Created by gan on 2017/5/26.
 */
var mysqlDB=require("./mysqlDB.js");
var sql= null;
module.exports={
  addPic:function (data, callback) {
    mysqlDB.updateTable(data,callback)
  },
  getBanner:function ( callback) {
    sql='select id from pics WHERE `desc`="banner table use1"';
    mysqlDB.getTableAllInfo({sql:sql},callback)
  },
  /**
   * 根据desc和id查找最新的那条数据
   *
   * */
  getbannerOrder:function (callback) {
    sql='select * from pics WHERE `desc`="banner table use1" ORDER BY `time` DESC';
    mysqlDB.getTableAllInfo({sql:sql},callback)
  },
  /**
   * 插入banner数据
   * */
  insertbaner:function (data, callback) {
    mysqlDB.insertTable(data,callback)
  },
  /**
   * 商品总个数
   * @param callback
   */
  getBannerCount: function (callback) {
    sql = 'select count(1) count from pics where `desc`="banner table use" or `desc`="banner table use1"';
    mysqlDB.getTableAllInfo({sql: sql}, callback);
  },
  /**
   * 获取图片 分页
   * */
  getbannerAll:function (data,callback) {
    sql='select * from pics where `desc`="banner table use" or `desc`="banner table use1" ORDER BY `time` DESC limit '+data.pindex+','+data.pagesize+' ';
    mysqlDB.getTableAllInfo({sql:sql},callback)
  },
  /**
   *
   * */
  updataBanner:function (data,callback) {
    sql='UPDATE pics SET `desc`="banner table use" WHERE id='+data.id+'';
    mysqlDB.updateTable({sql:sql},callback)
  },
  /**
  * 前台获取上线的
  * */
  updataBannerNow:function (data,callback) {

    sql='UPDATE pics SET `desc`="banner table use1" WHERE id='+data.id+' ORDER BY `time` DESC';
    mysqlDB.updateTable({sql:sql},callback)
  }

};
