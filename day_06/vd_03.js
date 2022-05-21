//This
//'use strict';
function myFunction() {
    console.log(this)
}
// myFunction();
//Nếu có use strict thì this trong một hàm ở vị trí global là undefined nếu ko có thì là window
var a = "Xin chào"
const obj = {
    a: "Hehe"
}
function logger() {
    console.log(this.a)
} 
logger();
logger.call(obj);