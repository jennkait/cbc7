var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'chat'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;

function get_all_inventory()

function set_new_item()