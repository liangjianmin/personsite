var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    /**
     * 返回商品总个数
     * @param callback
     */
    getComment: function (id,callback) {
        sql = 'SELECT * FROM `comment` WHERE shopid = '+id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    }
};
