var express = require('express');
var router = express.Router();

var connection = require('./mysql');

router.get('/:xu_hao', function (request, response) {

    let str = '';

    let xu_hao = request.params.xu_hao;
    connection.query(`select * from biao_yi where xu_hao = '${xu_hao}'`, function (error, result) {
        if(error) {
            console.log(`数据库连接错误！错误是${error}`);
        }
        else {
            str = JSON.stringify(result);

            response.setHeader("Access-Control-Allow-Origin", "*");
            //发送服务器存储的str
            response.send(str);
        }
    })
})

module.exports = router;