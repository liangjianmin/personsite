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
    },
    /**
     * 查询用户的唯一订单
     * @param id
     * @param callback
     */
    getOrder: function (id, callback) {
        sql = "select * from `order` WHERE id=" + id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查询用户的所有订单
     * @param id
     * @param callback
     */
    getOrders: function (p, limit, id, callback) {
        sql = "SELECT  `order`.* ,shop.id,shop.imgid, shop.describes, pics.url FROM `order`,shop,pics WHERE `order`.shopid=shop.id AND pics.id=shop.imgid AND `order`.userid=" + id + " ORDER BY `order`.id desc limit " + p + "," + limit;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查询用户的订单状态
     * @param id
     * @param callback
     */
    getOrderstatus: function (p, limit, type, id, callback) {
        sql = "SELECT  `order`.* ,shop.id,shop.imgid, shop.describes, pics.url FROM `order`,shop,pics WHERE  `order`.shopid=shop.id AND pics.id=shop.imgid AND `status`=" + type + " AND userid=" + id + " ORDER BY `order`.id desc limit " + p + "," + limit;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 返回用户订单的总数量
     * @param id
     * @param callback
     */
    getOrderCount: function (id, callback) {
        sql = "select count(1) count from `order` WHERE userid =" + id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 返回用户订单状态的数量
     * @param id
     * @param callback
     */
    getOrderStatusCount: function (type, id, callback) {
        sql = "select count(1) count from `order` WHERE `status` =" + type + " AND userid =" + id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 删除id订单
     * @param data
     * @param callback
     */
    deleteOrder: function (data, callback) {
        mysqlDB.deleteTable(data, callback);
    }
};
