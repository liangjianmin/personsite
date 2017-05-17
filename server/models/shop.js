var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    /**
     * 新增商品
     * @param data
     * @param callback
     */
    addShop: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    /**
     * 根据shop表更新stock表统计
     * @param data
     * @param callback
     */
    updateStock: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    },
    /**
     * 更新商品表
     * @param data
     * @param callback
     */
    updateShop: function (data, callback) {
        mysqlDB.updateTable(data, callback)
    },
    /**
     * 返回商品总个数
     * @param callback
     */
    getShopCount: function (callback) {
        sql = 'select count(1) count from shop';
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 新增图片
     * @param data
     * @param callback
     */
    addPic: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    /**
     * 连表查询图片返回商品所有信息
     * @param p
     * @param limit
     * @param callback
     */
    getshops: function (p, limit, callback) {
        sql = "select  shop.*, pics.url, pics.`from`  from shop, pics WHERE shop.imgid = pics.id limit " + p + "," + limit;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查询单个商品
     * @param p
     * @param limit
     * @param callback
     */
    getshop: function (id, callback) {
        sql = "select  shop.*, pics.url, pics.`from`  from shop, pics WHERE shop.imgid = pics.id AND shop.id = " + id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 删除商品id
     * @param data
     * @param callback
     */
    deleteShops: function (data, callback) {
        mysqlDB.deleteTable(data, callback);
    },
    /**
     * 查询库存的数量
     * @param data
     * @param callback
     */
    getStock: function (callback) {
        sql = "select * from stock";
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    }
};
