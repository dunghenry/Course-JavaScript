//Declaration function: hoisting
logger("Hi")
function logger(log) {
    console.log(log);
    console.log(this) //Window {window: Window, self: Window, document: document, name: '', location: Location, …}
}

//console.log(log) // undefined
//log() //log is not a function
//Expression function
var log = function () {
    console.log("Hi")
}

//Arrow function
const logg = (msg) => console.log(msg);
log("Hi") //Hi

const sum = (a, b) => a + b;
console.log(sum(1, 2)) //3

const obj = (a, b) => {
    return {
        a, b
    }
}
console.log(obj(1, 2)) //{a: 1, b: 2}


const obj1 = (a, b) => ({ a, b })
console.log(obj1(1, 2)) //{a: 1, b: 2


const course = {
    name: "Javascript",
    age: 21,
    getName: function () {
        return this.name;
    },
    getContext: function () {
        return this
    },
    getAge: () => {
        return this.age;
    },
    getContextArr: () => {
        return this
    }
}
console.log(course.getName()); //Javascript
console.log(course.getContext()); //{name: 'Javascript', getName: ƒ, getContext: ƒ}
console.log(course.getAge()); //undefined 
console.log(course.getContextArr()); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//IIFE and Arrow function
(() => console.log(this))() //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

