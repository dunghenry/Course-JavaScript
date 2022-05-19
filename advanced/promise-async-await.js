const promise1 = x => new Promise(function (resolve) {
    setTimeout(() => resolve(x), 2000)
})
const promise2 = y => new Promise(function (resolve) {
    setTimeout(() => resolve(y), 5000)
})

async function sum(x, y) {
    console.time("Timer")
    // C1
    // Timer: 7007.578125 ms
    // const _x = await promise1(x);
    // const _y = await promise2(y);

    //C2
    // Timer: 5007.578125 ms
    // const [_x, _y] = await Promise.all([promise1(x), promise2(y)])
   

    //C3
    // Timer: 5007.578125 ms
    const awaitX = promise1(x);
    const awaitY = promise2(y);
    const _x = await awaitX;
    const _y = await awaitY;
    console.timeEnd("Timer")
    return _x + _y;
    
}
sum(1, 2).then(total => console.log(total))