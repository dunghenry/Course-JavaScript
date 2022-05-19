function promiseDivision(x, y) {
    if (y === 0) {
        return Promise.reject(new Error('Can not divide by zero'));
    }
    else {
        return Promise.resolve(x / y)
    }
}
async function divideWithAwait() {
    try {
        return await promiseDivision(10, 0)
    } catch (error) {
        console.log(error.message)
        return;
    }
}
async function divideNotAwait() {
    return promiseDivision(10, 0).catch(err => console.log(err.message))
}
async function run() {
    const rs1 = await divideWithAwait();
    console.log(rs1)
    const rs2 = await divideNotAwait();
    console.log(rs2)
}
run();