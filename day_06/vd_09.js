'use strict';
this.firstName = "Dung"
this.lastName = "Tran"
function showFullName() {
    return this.firstName + " " + this.lastName;
}
//console.log(showFullName.call(this)); //Dung Tran
console.log(showFullName.call()); // Cannot read properties of undefined (reading 'firstName') at showFullName
