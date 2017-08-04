'use strict'

var Koa = require('koa')
var wechat = require('./wechat/g');
var config = {
    wechat: {
        appID: 'wx10634733a3237f78',
        appSecret: '3163c4622e9074dd396a5e91274ca872',
        token: 'wechatdravenren'
    }
}
var app = new Koa()

app.use(wechat(config.wechat))

app.listen(3002, 'localhost', () => {
    console.log('listening:3002')
})
