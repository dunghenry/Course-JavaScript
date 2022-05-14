//Number
var age = 21;
var PI = 3.14;
var a = new Number(1);
console.log(a) //[Number: 1];
console.log(typeof a) //object

var result = 100 / 'A';
console.log(result) //NaN
console.log(typeof result) //number
console.log(result == NaN) //false
console.log(result === NaN) //false
console.log(isNaN(result)); //true
console.log(NaN + 1) //NaN
console.log(NaN + "1") //NaN1

var b = 123e5;
console.log(b) //12300000
var c = 123e-5;
console.log(c) //0.00123


//Float
let d = 0.1 + 0.3;
console.log(d) // 0.4

var e = "10";
var f = "20";
console.log(e + f); //1020
console.log(10 + f); //1020
console.log(f + 10); //2010

console.log(10 - f); //-10
console.log("100" - "20"); //80

//Infinity(or -Infinity) 
console.log(1 / 0) //Infinity
console.log(-1 / 0) //-Infinity
console.log(typeof (1 / 0)); //number


//Hexadecimal
console.log(0xFF); //255

var number = 100;
var str = number.toString();
console.log(typeof str); //string

var x = 1
var y = new Number(1);
console.log(x == y) //true;
console.log(x === y); //false;
var z = new Number(1);
console.log(y == z); //false
console.log(y === z); //false
