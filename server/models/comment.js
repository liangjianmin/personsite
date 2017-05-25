var mysqlDB = require("./mysqlDB.js");
var sql = null;
module.exports = {
    /**
     * 新增评论
     * @param data
     * @param callback
     */
    addComment: function (data, callback) {
        mysqlDB.insertTable(data, callback);
    },
    /**
     *查询评论数目
     * @param callback
     */
    getCommentNum: function (id,callback) {
        sql = 'select count(1) count from comment WHERE shopid='+id;
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 查评论列表
     * @param callback
     */
    getComment: function (id,callback) {
        sql = 'SELECT * FROM `comment` WHERE shopid = '+ id + ' ORDER BY id desc';
        mysqlDB.getTableAllInfo({sql: sql}, callback);
    },
    /**
     * 更新shop表的评论数量(计算评论列表的平均值)
     * @param data
     * @param callback
     */
    updateShopComment: function (id,data, callback) {
        mysqlDB.updateTable(data, callback)
    }
};
