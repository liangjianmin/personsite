var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    addShop: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    addPic: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    }
};
