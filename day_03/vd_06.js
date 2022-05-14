//Method array
var languages = ['Javascript', 'Java', 'C#'];

console.log(languages.toString()); //Javascript,Java,C#
console.log(languages.join('/')) //Javascript/Java/C#
console.log(languages.pop())//Lấy ra phần tử cuối cùng rồi xóa khỏi mảng: C#, Khi mảng rỗng mà vẫn pop thì kq trả về undefined
languages.push('javascript'); //Thêm 1 hoặc nhiều phần tử vào mảng
console.log(languages); //[ 'Javascript', 'Java', 'javascript' ]
console.log(languages.shift()); //Lấy ra phần tử đầu tiên và xóa khỏi mảng : Javascript tương tự pop
console.log(languages); //[ 'Java', 'javascript' ]

languages.unshift('PHP'); //Thêm 1 pt vào đầu mảng ['PHP', 'Java', 'javascript' ]
languages.unshift('JS', 'C#');//Thêm 1 hoặc nhiều phần tử vào đầu mảng
console.log(languages) //[ 'JS', 'C#', 'PHP', 'Java', 'javascript' ]

console.log(languages.splice(1)); //Xóa mảng từ vt thứ nhất đến hết mảng [ 'C#', 'PHP', 'Java', 'javascript' ]
console.log(languages) //Sau khi xóa thì mảng cũ sẽ mất tất cả những phần tử bị xóa  đi
console.log(languages.splice(0, 1));
console.log(languages); //[]
languages.splice(0, 0, 'PHP', 'JS');

//Chèn dùng splice
console.log(languages) //[ 'PHP', 'JS' ]

//Concat: Nối hai mảng
var arr = languages.concat(['C#', 'Dart']);
console.log(languages.concat(['C#', 'Dart'])) //[ 'PHP', 'JS', 'C#', 'Dart' ]
console.log(arr) //[ 'PHP', 'JS', 'C#', 'Dart' ]


//Slice
var languages1 = ['Javascript', 'Java', 'C#'];
console.log(languages1.slice(1, 2)) //[ 'Java' ] 
console.log(languages1.slice(-3, -2)) //[ 'Javascript' ]
console.log(languages1);
console.log(languages1.slice(0)) //copy mảng