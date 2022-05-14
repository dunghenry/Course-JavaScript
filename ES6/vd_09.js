//Spread
var arr1 = ["Javascript", "Python"];
var arr2 = ["PHP", "Dart"];
var arr3 = [...arr1, ...arr2];
console.log(arr3) //[ 'Javascript', 'Python', 'PHP', 'Dart' ];

var obj1 = {
    fullName: "Tran Van Dung"
}
var obj2 = {
    age: 21
}
var obj3 = { ...obj1, ...obj2 }
var obj4 = Object.assign(obj1, obj2)
console.log(obj4);
console.log(obj3);

var defaultConfig = {
    api: 'https://jsonplaceholder.typicode.com/posts',
    apiVersion: 'v1',
    others: 'others'
}
// {
//     api: 'https://jsonplaceholder.typicode.com/posts',
//     apiVersion: 'v1',
//     others: 'others'
//   }

var todosConfig = {
    ...defaultConfig,
    api: 'https://jsonplaceholder.typicode.com/todos'
}
//{
    // api: 'https://jsonplaceholder.typicode.com/todos',
    // apiVersion: 'v1',
    // others: 'others'
//   }

console.log(defaultConfig)
console.log(todosConfig);


const coursesName = ["Javascript", "PHP", "Ruby"];
function logger(a, ...rest) { //rest
    console.log(a) //Javascript
    console.log(rest) //[ 'PHP', 'Ruby' ]
}
logger(...coursesName) //Spread

function logger1(...rest) { //rest
    console.log(rest) //[ 'Javascript', 'PHP', 'Ruby' ]
    console.log(arguments) //[Arguments] { '0': 'Javascript', '1': 'PHP', '2': 'Ruby' }
    console.log(Array.prototype.slice.call(arguments)) //[ 'Javascript', 'PHP', 'Ruby' ]
    console.log(Array.from(arguments)) //[ 'Javascript', 'PHP', 'Ruby' ]
}
logger1(...coursesName) //Spread