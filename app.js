'use strict'

var Koa = require('koa')
var sha1 = require('sha1')
var config = {
    wechat: {
        appID: 'wx10634733a3237f78',
        appSecret: '3163c4622e9074dd396a5e91274ca872',
        token: 'wechatdravenren'
    }
}
var app = new Koa()

app.use(function* (next) {
    console.log(this.query)
    var token = config.wechat.token
    var signature = this.query.signature
    var nonce = this.query.nonce
    var timestamp = this.query.timestamp
    var echostr = this.query.echostr

    var str = [token,timestamp,nonce].sort().join('')
    var sha = sha1(str)

    if(sha === signature){
        this.body = echostr + ''
    }else{
        this.body = 'wrong'
    }
})

app.listen(3002, 'localhost', () => {
    console.log('listening:3002')
})
