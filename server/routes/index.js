var user = require("../action/user.js");
var shop = require("../action/shop.js");
var comment = require("../action/comment.js");
module.exports = function (app) {
    /**
     * 重定向首页
     */
    app.get('/', function (req, res) {
        res.redirect('index.html')
    });

    user(app);
    shop(app);
    comment(app);
};
