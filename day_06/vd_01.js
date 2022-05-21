function User(username, age, email, password) {
    this.username = username;
    this.age = age;
    this.emai = email;
    this.password = password;
    this.getUsername = function () {
        return this.username;
    };
}
User.prototype.class = "KTPM02";
User.prototype.getClass = function () {
    return this.class;
}
const author = new User("TranDung", 21, "trandungksnb00@gmail.com", "dung2001");
author.address = "Ninh Binh";
console.log(author.class);
console.log(author.getUsername());
console.log(author.getClass()); //


//Object

const myObj = {
    fullName: "Tran Van Dung",
    age: 21,
    getFullName() {
        return this.fullName;
    },
    getAge: function () {
        return this.age;
    }
}
console.log(myObj)
delete myObj['age'] //delete key age
console.log(myObj)
myObj.className = "Test class"
console.log(myObj.getFullName());
// console.log(myObj.getAge());