function sleep(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}
sleep(1000)
  .then(function () {
    console.log(1);
    return sleep(1000);
  })
  .then(function () {
    console.log(2);
    return sleep(1000);
  })
  .then(function () {
    console.log(3);
    return new Promise(function (resolve, reject) {
      reject("Error");
    });
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  })
  .catch(function (err) {
    console.log(err);
  });

//Promise.resolve();

var promiseResolve = Promise.resolve("Success");
promiseResolve
  .then(function (result) {
    console.log(result);
    return result;
  })
  .then(function (result) {
    console.log(result);
    return Promise.reject("Error");
  })
  .catch(function (err) {
    console.log(err);
  });

//Promise.reject();
var promiseReject = Promise.reject("Failed");
promiseReject.catch(function (err) {
  console.log(err);
});
