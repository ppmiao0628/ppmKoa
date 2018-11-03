const Koa = require('koa');
const Router = require('koa-router')
const Static = require('koa-static')
const path = require('path')
const app = new Koa();
const router = new Router();

let staticPath = './static';
app.use(Static(
    path.join(__dirname, staticPath)
));
router.get('/', (ctx, next) => {
    ctx.body = 'hello index';
}).get('/ppm', (ctx, next) => {
    ctx.body = 'hello ppm';
});
app.use(router.routes()).use(router.allowedMethods());

app.listen('9000', function () {
    console.log('localhost:9000 is serving...');
});