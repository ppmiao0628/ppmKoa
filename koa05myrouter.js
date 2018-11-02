const Koa = require('koa');
const app = new Koa();
const fs = require('fs')

function myRender(url) {
    return new Promise((resolve, reject) => {
        let fileName = `./pages/${url}`;
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

async function myRouter(url) {
    let pageUrl = '404.html'
    switch (url) {
        case "/":
        case "/index":
            pageUrl = 'index.html';
            break;
        case "/main":
            pageUrl = 'main.html';
            break;
        case '404':
            pageUrl = '404.html';
            break;
        default:
            break;
    }
    let htmlContent = myRender(pageUrl);
    return htmlContent;
};

app.use(async (ctx) => {
    let url = ctx.url;
    ctx.body = await myRouter(url);
    console.log(url);
});
app.listen('9000', function () {
    console.log('localhost:9000 is serving...');
});