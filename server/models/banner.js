/**
 * Created by gan on 2017/5/26.
 */
var mysqlDB=require("./mysqlDB.js");
var sql= null;
module.exports={
  addPic:function (data, callback) {
    mysqlDB.updateTable(data,callback)
  },
  getbannerOrder:function (callback) {
    sql='select * from pics where id=(SELECT MAX(id) FROM pics WHERE `desc`="banner table use")';
    mysqlDB.getTableAllInfo({sql:sql},callback)
  },
  insertbaner:function (data, callback) {
    mysqlDB.insertTable(data,callback)
  }
}
