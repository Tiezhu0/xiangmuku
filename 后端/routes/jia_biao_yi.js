var express = require('express');
var router = express.Router();
const url = require('url');

var connection = require('./mysql');
router.get('/:ming_cheng/:xing_bie/:nian_ling', function (request, response) {

    let ming_cheng = request.params.ming_cheng;
    let xing_bie = request.params.xing_bie;
    let nian_ling = request.params.nian_ling;

    let str = '';

    // console.log(`insert into biao_yi (ming_cheng, xing_bie, nian_ling) values ('${ming_cheng}','${xing_bie}','${nian_ling}')`);

    connection.query(`insert into biao_yi (ming_cheng, xing_bie, nian_ling) values ('${ming_cheng}','${xing_bie}','${nian_ling}')`, function (error, result) {
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