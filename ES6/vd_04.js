var name = "Javascript";
var price = 2000;
var course = {
    name,
    price,
    getName() {
        return name;
    }
}
console.log(course) //{ name: 'Javascript', price: 2000 }
console.log(course.getName()) // Javascript

//VD
var fieldName = 'name';
var fieldPrice = 'price';

const course1 = {
    [fieldName]: 'JS',
    [fieldPrice]: 1000
}
console.log(course1);