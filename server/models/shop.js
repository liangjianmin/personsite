var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    addShop: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    addPic: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    getshops: function (callback) {
        sql = "SELECT a.*,b.* FROM shop a JOIN pics b on a.imgid=b.id";
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
};
