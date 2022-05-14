//Callback: là hàm được truyền qua đối số khi gọi hàm khác
//Là hàm, được truyền qua đối số
function myCallback(result) {
  console.log(result);
}
function calculator(x, y, callback) {
  let sum = x + y;
  callback(sum);
}
calculator(1, 2, myCallback);

//VD:
function callback(value) {
  console.log("Value : " + value);
}
function myFunction(x, callback) {
  if (typeof callback === "function") {
    callback(x);
  } else {
    console.log("callback is not a function!");
  }
}
myFunction(1, callback);

//Demo code jquery
// $('#test').click(function(){
//     console.log("This is my callback function!");
// });

function tangQua(qua){
    console.log("Đã tặng quà : " + qua)
}
function oNha(qua, tangQua) {
    tangQua(qua)
}
oNha("IPhone 12", tangQua);


function sayHello(name, callback) {
    var myName = name.toUpperCase() + ", Hello!";
    return callback(myName);
}

const result = sayHello("Tran Dung", function (myName) {
    return myName;
})
console.log(result); //TRAN DUNG, Hello!


function helloFunction(fullName, callback) {
   return callback(fullName);
}
const rs = helloFunction("Tran Van Dung", (msg) => {return msg});
console.log(rs);

//forEach, reduce, filter, map, find, some,...
var arr = ["Golang", "PHP", "JavaScript"];
arr.forEach(function (item) {
    console.log(item)
})