function random() {
    console.log(Math.random())
}
//random.call(); //tương tự random()


const me = {
    firstName: "Tran",
    lastName: "Dung",
    showFullName() {
        return this.firstName + " " + this.lastName
    }
}
const teacher = {
    firstName: "Minh",
    lastName: "Thu",
    showFullName() {
        return this.firstName + " " + this.lastName
    }
}
// console.log(me.showFullName())

console.log(me.showFullName.call(me))
console.log(me.showFullName.call(teacher))

//bind this và gọi luôn hàm đó còn bin chỉ tạo ra hàm mới

//VD
