//function
function log() {
    console.log("Xin chào");
}
log();


function writeLog(msg) {
    if(msg) console.log(msg);
}
writeLog("Xin chao cac ban");

//arguments
function arguments() {
    var myString = '';
    console.log(arguments) //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    for (const item of arguments) {
       myString += `${item}-`;
    }
    var str = myString.slice(0, myString.length - 1);
    console.log(myString.lastIndexOf('-'))
    console.log(str)
}
arguments(1, 2, 3, 4,);

//return trong hàm
const isConfirm = confirm("message");
console.log(isConfirm) //boolean

function sum(a, b) {
    return a + b;
}
console.log(sum(1, 2))