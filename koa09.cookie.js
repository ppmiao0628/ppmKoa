const Koa = require('koa');
const app = new Koa();


app.use(async (ctx) => {
    if (ctx.url === '/ppm') {
        ctx.cookies.set(
            'myname', 'keller'
        );
        console.log('set ok');
        ctx.body = 'hello ppm';
    } else {
        ctx.body = 'hello keller';
    }
})
app.listen('9000', function () {
    console.log('localhost:9000 is serving...');
});