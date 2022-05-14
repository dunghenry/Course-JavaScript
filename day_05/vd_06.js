//obj constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar,
    this.getName = function () {
        return this.firstName + " " + this.lastName;
    }
}
User.prototype.className = 'KTPM02';
User.prototype.getClassName = function () {
    return this.className;
}
var user = new User('Dung', 'Tran', 'img1');
console.log(user);
console.log(user.getClassName()); //KTPM02
