/**
 * Created by gan on 2017/5/26.
 */
var mysqlDB=require("./mysqlDB.js");
var sql= null;
module.exports={
  addPic:function (data, callback) {
    mysqlDB.updateTable(data,callback)
  },
  getbannername:function ( callback) {
    sql='select url from pics where id = 322';
    mysqlDB.getTableAllInfo({sql:sql},callback)
  },
  getbanner:function (p,callback) {
      sql='select * from pics where `desc`="banner table use" ';
    mysqlDB.getTableAllInfo({sql:sql},callback)
  },
  removebanner:function (data, callback) {

    mysqlDB.deleteTable(data,callback)
  }
}
