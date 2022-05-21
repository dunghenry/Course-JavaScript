//IIFE
//Nên dùng dấu ; trước IIFE
//IIFE là hàm private
(function () {
  console.log("Xin chao");
})();
(function () {
  console.log("Hehe");
})();
let i = 0;
(function myFunction() {
  i++;
  console.log(i);
  if (i < 10) {
    myFunction();
  }
})() %
  //Thay bằng + - * ,...
  (function () {
    console.log("Oke");
  })();

//VD

const app = (function () {
    const cars = [];
    return {
        getCars() {
            return cars;
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})()

//Closures
function makeCounter() {
    let count = 0;
    return function increment() {
        return ++count;
    }
}

const num = makeCounter();
console.log(num())
console.log(num())
console.log(num())