const Koa = require('koa');
const app = new Koa();

app.use(async (ctx) => {
    if (ctx.url === '/' & ctx.method === 'GET') {
        let temp = `
            <h1>koa POST form</h1>
            <form action="/" method="POST">
                <p>username:</p><input type="text" name="username">
                <br>
                <p>website:</p><input type="text" name="website">
                <br>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = temp;
    } else if (ctx.url === '/' & ctx.method === 'POST') {
        ctx.body = await setPostDate(ctx);
    } else {
        ctx.body = '<h1>404!</h1>';
    }
});

function setPostDate(ctx) {
    return new Promise((resolve, reject) => {
        try {
            let postData = '';
            ctx.req.addListener('data', data => {
                postData += data;
            });
            ctx.req.on('end', () => {
                resolve(postData);
            })
        } catch (error) {
            reject(error);
        }
    })
}
app.listen('9000', () => {
    console.log('koa is start working at 9000...');
});