function Course(name, price) {
    this.name = name;
    this.price = price
    this.getName = function () {
        return this.name;
    }
}
const jsCourse = new Course("Javascript", 1000);
console.log(jsCourse.getName()); //Javascript


class Course1{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
}
const phpCourse = new Course1("PHP", 1000);
console.log(phpCourse.getName()); //PHP