var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    password : 'DYH981209'
    database : 'chris'
});

module.exports = connection;