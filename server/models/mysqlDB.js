var mysql = require("mysql");

var connection = mysql.createConnection({
    host: '5915527c385d9.gz.cdb.myqcloud.com',
    user: 'root',
    password: '15270622429ljm',
    database: 'auction',
    port:'5766'
});

function openConnection() {
    connection.open();
}

function closeConnection() {
    connection.end();
}

module.exports = {
    /**
     * @param options
     * options
     * sql : String
     * callback : 回调
     * @return
     * data
     * data : Array
     * status : Boolean
     */
    getTableAllInfo: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, function (err, rows, fields) {
                if (!err) {
                    data.data = rows;
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * @param options
     * options
     * sql : String
     * data : data(user)
     * callback : 回调
     * @return
     * data
     * id : Number
     * status : Boolean
     */
    insertTable: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, options.data, function (err, rows, fields) {
                if (!err) {
                    data.id = rows.insertId;
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * @param options
     * options
     * sql : String
     * callback : 回调
     * @return
     * data
     * status : Boolean
     */
    deleteTable: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, function (err, rows, fields) {
                if (!err) {
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    },
    /**
     * @param options
     * options
     * sql : String
     * params : Array
     * callback : 回调
     * @return
     * data
     * status : Boolean
     */
    updateTable: function (options, callback) {
        try {
            var data = {data: null, status: false};
            if (!options.sql)
                return;
            connection.query(options.sql, options.params, function (err, rows, fields) {
                if (!err) {
                    data.status = true;
                    callback && callback(data);
                } else {
                    console.log('Error while performing Query.');
                }
            });
        } catch (err) {
            console.log(err);
        }
    }
};