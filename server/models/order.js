var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    /**
     * 保存用户订单信息
     * @param data
     * @param callback
     */
    savaoreder: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    /**
     * 更新shop表的库存
     * @param data
     * @param callback
     */
    updateShop: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    },
    /**
     * 更新stock表的库存
     * @param data
     * @param callback
     */
    updateStock: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    }
};