var message = "Xin chao cac ban nhe? Minh la TrAn Van Dung! Xin chao..."
//indexOf
console.log(message.indexOf("chao")) //=> return the starting index of the string "chao" = 4

//lastIndexOf
console.log(message.lastIndexOf("chao")) //=> return the last index of the string "chao" = 49
console.log(message.lastIndexOf("chao", 10)) //=>Tìm từ cuối chuỗi tìm về đầu chuỗi

//search
console.log(message.search("la")) //=> return the starting index of the string = 27

//match: string.match(regexp)

console.log(message.match(/a/g)); //['a', 'a', 'a','a', 'a','a'] = 6
console.log(message.match(/a/gi)); //['a', 'a', 'a','a', 'A' 'a', 'a','a'] = 7

//includes : string.includes(searchvalue, start)
console.log(message.includes("chao")) // boolean = true
console.log(message.includes("chao", 50)) // boolean = false

//includes and array
const fruits = ["Banana", "Cherry", "Apple"];
console.log(fruits.includes("Cherry")); //true
console.log(fruits.includes("Cherry", 2)); //false

//startsWith : string.startsWith(searchvalue, start)

console.log(message.startsWith("Xin")) //boolean: true
console.log(message.startsWith("Xin", 1)) //boolean: false

//endsWith : string.endsWith(searchvalue, start)
console.log(message.endsWith("...")) //boolean: true
console.log(message.endsWith("...", 1)) //boolean: false

