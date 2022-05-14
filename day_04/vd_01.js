//JSON
const obj = {
    fullName: "Tran Van Dung",
    age: 21,
    address: "Ninh Binh"
};
console.log(JSON.stringify(obj)); //JSON
let json = JSON.stringify(obj);
console.log(JSON.parse(json)); //JS

var number = '1';
var arr = '["JS", "PHP"]'
console.log(JSON.parse(arr)); //[ 'JS', 'PHP' ]
console.log(typeof JSON.parse(number)) //number
var object = '{"name": "Dung", "age": 21}';
console.log(JSON.parse(object)) //{ name: 'Dung', age: 21 }
var b = 'true'
console.log(JSON.parse(b)) //true