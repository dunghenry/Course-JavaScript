setTimeout(log, 1000);

function log() {
    console.log("XIN CHAO");
}

var promise = new Promise(function (resolve, reject) {
    resolve("success"); //
    reject("error"); //
});

promise
    .then(function (response) {
        console.log(response);
        return response;
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log("done");
    });