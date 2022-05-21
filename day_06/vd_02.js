const filedName = 'name'
const myObject = {
    [filedName]: "Tran Dung"
};

const keyName = 'name'
console.log(myObject) //{ name: 'Tran Dung' }
console.log(myObject[keyName]) //Tran Dung

//Methods object

const object1 = {
    myName: "Tran Dung",
    printMyname: function () {
        console.log(this.myName);
    }
}
const object2 = {
    age: 21
}
//Object.assign(object1, object2)
const mergeObject = Object.assign(object1, object2);
console.log(mergeObject)

//Object.create(myObject);
let createNewObject = Object.create(object1);
createNewObject.myName = "Tran Van A"
console.log(createNewObject); //{ myName: 'Tran Van A' }
createNewObject.printMyname() //Tran Van A

const obj1 = {
    age: 21
}
const obj2 = {
    age: 21
}
console.log(Object.is(obj1, obj2));

