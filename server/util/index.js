var moment = require('moment'); //时间


module.exports = {
    /**
     * 生成订单编号
     * @param number
     * @returns {string}
     */
    orederNumber: function (number) {
        var time = moment(new Date()).format("YYYYMMDDHHmmss");
        return 'E' + time + number;
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
    payNumber: function (id) {
        var pay = {
            id: id,
            params: id+'.' + new Date().getTime()+id
        }
        return pay;
    }
}