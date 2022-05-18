//Object constructor expression function or declaration function

function User(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.getFullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Object prototype
User.prototype.className = 'KTPM02';
User.prototype.getAge = function () {
    return this.age;
}
const author = new User("Dung", "Tran", 21, 'trandungksnb00@gmail.com');
author.address = "Hehe"
console.log(author);
console.log(author.constructor === User) //true
console.log(author.getAge())
