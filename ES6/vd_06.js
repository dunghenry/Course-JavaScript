var array = ['Javascript', 'Java', 'C#'];
//Destructuring
const [a, b, c] = array;
const [d, , e] = array;
console.log(a, b, c) //Javascript Java C#
console.log(d, e) //Javascript C#

//rest and destructuring
const [f, g, ...h] = array;
console.log(f, g, h) //Javascript Java ['C#']

var obj = {
    name: "Tran Dung",
    age: 21,
    address: "Ninh Binh"
};
// const { name, age } = obj
// console.log(name) //Tran Dung
// console.log(age) //21

//use rest and destructuring with obj
const { name, ...rest } = obj
console.log(name, rest) //Tran Dung {age: 21, address: 'Ninh Binh'}