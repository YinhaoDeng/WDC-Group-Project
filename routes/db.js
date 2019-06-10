var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    password : 'DYH981209',
    database : 'wdc_project_database'
});

module.exports = connection;