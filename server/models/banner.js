/**
 * Created by gan on 2017/5/26.
 */
var mysqlDB=require("./mysqlDB.js");
var sql= null;
module.exports={
  addPic:function (data, callback) {
    mysqlDB.insertTable(data,callback)
  },
  getbanner:function (p,callback) {
    sql='select * from pics limit '+p;
    mysqlDB.getTableAllInfo({sql:sql},callback)
  }
}
