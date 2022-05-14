//obj constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.avatar = avatar,
    this.getName = function () {
        return this.firstName + " " + this.lastName;
    }
}
var author = new User('Dung', 'Tran', 'img1');
console.log(author);
author.address = "Ninh Binh";
console.log(author);
console.log(author.getName()); //Dung Tran

author.getAvatar = function () {
    return this.avatar;
}
console.log(author.getAvatar()); //img1