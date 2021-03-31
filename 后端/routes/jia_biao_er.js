var express = require('express');
var router = express.Router();
const url = require('url');

var connection = require('./mysql');
router.get('/:ri_qi/:di_zhi/:ba_zi', function (request, response) {


    let ri_qi = request.params.ri_qi;
    let di_zhi = request.params.di_zhi;
    let ba_zi = request.params.ba_zi;

    let str = '';

    // console.log(`insert into biao_er (ri_qi, di_zhi, ba_zi) values ('${ri_qi}','${di_zhi}','${ba_zi}')`);

    connection.query(`insert into biao_er (ri_qi, di_zhi, ba_zi) values ('${ri_qi}','${di_zhi}','${ba_zi}')`, function (error, result) {
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