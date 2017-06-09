var moment = require('moment'); //时间


module.exports = {
    /**
     * 生成订单编号
     * @param number
     * @returns {string}
     */
    orederNumber: function () {
        var time = moment(new Date()).format("YYYYMMDDHHmmss")+new Date().getTime();
        return 'E' + time;
    },
    /**
     *  解析购买时候的地址 r
     * @param id
     * @param num
     * @param userid
     * @param user
     * @returns {{id: *, num: *, userid: *, user: *, params: string}}
     */
    carsNumber: function (id, num, userid, user) {
        var cars = {
            id: id,
            num: num,
            userid: userid,
            user: user,
            params: '0.' + new Date().getTime()
        }
        return cars;
    },
    /**
     * 结算付款
     * @param id
     * @returns {{id: *, params: string}}
     */
    payNumber: function () {
        var pay = {
            params:+ new Date().getTime()
        }
        return pay;
    },
    /**
     * 付款时间 半个小时
     *
     */
    time:function () {
        var now = new Date().getTime() +1000*60*30;
        return now;
    }
}
