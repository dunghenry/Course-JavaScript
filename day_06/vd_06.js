this.firstName = "Tran";
this.lastName = "Dung";

const teacher = {
    firstName: "Tran",
    lastName: "Ha",
    getFullName(dl1, dl2) {
        if (dl1) {
            console.log(dl1)
        }
        if (dl2) {
            console.log(dl2)
        }
        console.log(this) //teacher
        console.log(this.firstName + " " + this.lastName)
        return this.firstName + " " + this.lastName;
    }
}
const student = {
    firstName: "Tran",
    lastName: "A",
}
console.log(teacher.getFullName())
//Tran Ha

let getName = teacher.getFullName;
console.log(getName === teacher.getFullName) //true vì cùng trỏ đến 1 vùng nhớ
console.log(getName()) //this = window, Tran Dung

const getName2 = teacher.getFullName.bind(teacher);
console.log(getName2()) //this = teacher, Tran Ha
console.log(getName2)

// ƒ getFullName() {
//     console.log(this) //teacher
//     return this.firstName + " " + this.lastName;
// }


const getName3 = teacher.getFullName.bind(student, "dl3", "dl4");
console.log(getName3('dl1', 'dl2')) //this student, Tran A

//Bind trả về hàm mới vs this mới


const button = document.querySelector("button");
button.onclick = teacher.getFullName.bind(student);
