//Data types
//Primitive types
/**
 * Number
 * String
 * Boolean
 * Undefined
 * Null
 * Symbol
 */

var a = 1; //number
var str = "Hi"; //string
var udf = undefined; //undefined
var nll = null; //object
var syb = Symbol('hi'); //symbol, unique
var syb2 = Symbol('hi'); // symbol, unique
var b;
console.log(syb === syb2) //false
console.log(typeof a, typeof str, typeof udf, typeof nll, typeof syb); 
console.log(typeof b); //undefined

//Node string
var fullName = "Tran \"Dung\""; //Tran "Dung"
fullName = "Tran 'Dung'" // Tran 'Dung'
fullName = "\\Tran \\Dung" // \Tran \Dung

console.log(fullName);

/**
 * Complex data
 * function
 * object
 */
//function type
function myFunction() {
    console.log("Xin chao");
}
myFunction(); //executed function
console.log(typeof myFunction); //function

//object type;
var myObject = {
    fullName: "TranDung",
    age: 21,
    getInfo: function () {
        return `${this.fullName} - ${this.age}`;
    }
}

console.log(myObject); //{ fullName: 'TranDung', age: 21 }
console.log(myObject.fullName); //TranDung
console.log(myObject.age); //21
console.log(myObject.getInfo()); //TranDung - 21
console.log(typeof myObject) //object
console.log(Object.keys(myObject)); //[ 'fullName', 'age', 'getInfo' ]

//Array
var myArray = ["Xoai", "Cam"];
console.log(myArray); // [ 'Xoai', 'Cam' ]
console.log(myArray.length);//2
console.log(typeof myArray); //object
console.log(Object.keys(myArray)); //[ '0', '1' ]