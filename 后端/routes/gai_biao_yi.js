var express = require('express');
var router = express.Router();

var connection = require('./mysql');

router.get('/:xu_hao/:ming_cheng/:xing_bie/:nian_ling', function (request, response) {

    let str = '';
    let xu_hao = request.params.xu_hao;
    let ming_cheng = request.params.ming_cheng;
    let xing_bie = request.params.xing_bie;
    let nian_ling = request.params.nian_ling;

    connection.query(`UPDATE biao_yi SET ming_cheng = '${ming_cheng}',xing_bie = '${xing_bie}',nian_ling = '${nian_ling}' WHERE xu_hao = '${xu_hao}'`, function (error, result) {
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