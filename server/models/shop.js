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
     * 返回商品总个数
     * @param callback
     */
    getShopCount:function (callback) {
        sql='select count(1) count from shop';
        mysqlDB.getTableAllInfo({sql:sql},callback);
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
    getshops: function (p,limit,callback) {
        sql = "SELECT a.*,b.* FROM shop a JOIN pics b on a.imgid=b.id limit "+p+","+limit;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
};
