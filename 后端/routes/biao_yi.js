var express = require('express');
var router = express.Router();

var connection = require('./mysql');
router.get('/', function (request, response) {

    let str = '';
    // console.log('AAA')

    connection.query('select * from biao_yi', function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            // console.log(str);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

module.exports = router;