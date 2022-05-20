let courses = ["JavaScript", "PHP", "Ruby"];
courses.length = 100
Array.prototype.forEach2 = function (callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i, this)
        }
    }
}
const result = courses.forEach2(function (course, index, arr) {
    console.log(course);
})

console.log(result)

