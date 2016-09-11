const koa = require('koa')
const serve = require('koa-static')
const app = module.exports = koa()
const router = require('koa-router')()

const routes = require('./routes/')

// server static files
app.use(serve(__dirname + '/public'))

routes(router)
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => console.log('Yay, :)'))
