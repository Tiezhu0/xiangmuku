var mysql = require('mysql');

//连接数据库
let connection = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'hu_kou'
})

module.exports = connection;