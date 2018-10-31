async function setAsyncFun() {
    console.log('run setAsyncFun');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('run resolve');
            resolve('hello ppm')
        }, 3000);
    })
}
async function test() {
    const a = await setAsyncFun();
    console.log(a);
}
test()