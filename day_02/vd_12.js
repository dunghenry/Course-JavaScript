var fullName = "Tran Van Dung";
console.log(fullName); // Tran Van Dung
var length = fullName.length;
console.log(length) // 13

//Slice: slice(start, end)
var strChild = fullName.slice(0, 4)
console.log(strChild) //Tran
var strMinus = fullName.slice(-8, -5);
console.log(strMinus) //Van

console.log(fullName.slice(5)) //Van Dung
console.log(fullName.slice(-8)) //Van Dung

//Substr
console.log(fullName.substr(5)) //Van Dung
console.log(fullName.substr(5, 8)) //Van Dung
console.log(fullName.substr(5, 3)) //Van
console.log(fullName.substr(-13)) //Tran Van Dung


//Replace
console.log(fullName.replace('Tran', 'Nguyen')) //Nguyen Van Dung
console.log(fullName.replace(/TRAN/i, "Quach")) //Quach Van Dung
var fullName1 = "Tran Tran Van Dung";
console.log(fullName1.replace(/Tran/g, "Quach")) //Quach Quach Van Dung

//toLocaleLowerCase and toUpperCase
var text = "Xin chao cac ban?";
console.log(text.toLocaleLowerCase()); //xin chao cac ban
console.log(text.toUpperCase()); //XIN CHAO CAC BAN


//concat: nối chuỗi
console.log(text.concat(fullName)) //Xin chao cac ban?Tran Van Dung

//trim: cắt chuỗi
const msg = "    Xin chao      "
console.log(msg.trim()) //Xin chao

//padStart
var x = "5";
console.log(x.padStart(4, "x")) //xxx5

var y = 6
z = y.toString(); //convert to string
console.log(z.padStart(4, "x")) //xxx6

//padEnd
console.log(x.padEnd(4, "x")) //5xxx
console.log(z.padEnd(4, "x")) //6xxx

//charAt
console.log(fullName.charAt(0)) // => char T
console.log(fullName.charCodeAt(0)) //=> unicode 84

//ECMAScript 5 (2009)
console.log(fullName[0]); //T
fullName[0] = "L" // does not work

//Split

console.log(fullName.split(" ")); //[ 'Tran', 'Van', 'Dung' ]

