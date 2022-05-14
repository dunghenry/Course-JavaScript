var promise = new Promise(function (resolve, reject) {
    resolve();
});

promise.then(function () {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(["JavaScript", "PHP", "Java"]);
        }, 2000);
    });
}).then(function (data) {
    console.log(data)
});

//VD

function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
}
sleep(1000)
    .then(function () {
        console.log(1);
        return sleep(1000)
    })
    .then(function () {
        console.log(2);
        return sleep(1000)
    })
    .then(function () {
        console.log(3);
        return sleep(1000)
    })
    .then(function () {
        console.log(4);
        return sleep(1000)
    })
    .then(function () {
        console.log(5);
        return sleep(1000)
    })