const Koa = require('koa');
const server = new Koa();
server.use(async(ctx)=>{
    ctx.body = 'hello ppm'
});
server.listen('9000');
console.log("server is starting at port 9000");