const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    let url = ctx.url;
    let request = ctx.request;
    let ctxQuery = ctx.query;
    let ctxQueryString = ctx.querystring;
    ctx.body = {
        ctx,
        request,
        ctxQuery,
        ctxQueryString
    };
});
app.listen('9000',()=>{
    console.log('koa is start working at 9000...');
});