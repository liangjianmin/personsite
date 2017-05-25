var moment = require('moment'); //时间



module.exports={
    /**
     * 生成订单编号
     * @param number
     * @returns {string}
     */
    orederNumber:function (number) {
       var time= moment(new Date()).format("YYYYMMDDHHmmss");
       return 'E'+time+number;
    }
}