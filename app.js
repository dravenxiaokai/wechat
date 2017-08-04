'use strict'

var Koa = require('koa')
var path = require('path')
var wechat = require('./wechat/g')
var util = require('./libs/util')
// var serveStatic = require('serve-static')
var wechat_file = path.join(__dirname,'./config/wechat.txt')
var config = {
    wechat: {
        appID: 'wx10634733a3237f78',
        appSecret: '3163c4622e9074dd396a5e91274ca872',
        token: 'wechatdravenren',
        getAccessToken:function(){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken:function(data){
            data = JSON.stringify(data)
            return util.writeFileAsync(wechat_file)
        }
    }
}
var app = new Koa()

app.use(wechat(config.wechat))

app.listen(3002, 'localhost', () => {
    console.log('listening:3002')
})
