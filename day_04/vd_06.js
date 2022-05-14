var promise1 = new Promise(function (resolve, reject) {
  setInterval(function () {
    resolve([1]);
  }, 2000);
});
var promise2 = new Promise(function (resolve, reject) {
  setInterval(function () {
    resolve([2, 3]);
  }, 5000);
});

Promise.all([promise1, promise2])
  .then(function ([data1, data2]) {
      console.log(data1.concat(data2));
      console.log([...data1, ...data2]);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("done");
  });

//Nếu gặp lỗi ở bất cứ promise nào thì sẽ chạy vào catch
var promise3 = Promise.reject("Failed!");
Promise.all([promise1, promise3])
  .then(function ([data1, data2]) {
      console.log(data1.concat(data2));
      console.log([...data1, ...data2]);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("done");
  });