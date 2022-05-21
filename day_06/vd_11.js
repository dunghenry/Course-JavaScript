const teacher = {
    firstName: "Minh",
    lastName: "Thu"
}
function greet(greeting, message) {
    return `${greeting} ${this.firstName} ${this.lastName} ${message}`
}

let result = greet.call(teacher, 'Em chao co.', 'Co day mon gi the a?');
console.log(result)

const result2 = greet.apply(teacher, ['Em chao co.', 'Co day mon gi the a?']);
console.log(result2)

console.log("-------------------")

const teacher2 = {
    firstName: "Minh",
    lastName: "Thu",
    isOnline: false,
    goOnline() {
        this.isOnline = true;
        console.log(`${this.firstName} ${this.lastName} is Online`);
    },
    goOffline() {
        this.isOnline = false;
        console.log(`${this.firstName} ${this.lastName} is Offline`);
    }
}

const me = {
    firstName: "Tran",
    lastName: "Dung",
    isOnline: false
}
console.log("Teacher: " + teacher2.isOnline)
teacher2.goOnline()
console.log("Teacher: " + teacher2.isOnline)
console.log("---------------");
console.log("Me: " + me.isOnline)
teacher2.goOnline.apply(me)
console.log("Me: " + me.isOnline)



