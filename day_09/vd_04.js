let courses = ['C#', 'Java', 'Javascript']
courses.length = 100;
Array.prototype.every2 = function (callback) {
    var output = '';
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            if (!callback(this[key], key, this)) {
                output = false;
                break;
            }       
        }
    }
    return output;
}

const kq = courses.every2(function (course, index, arr) {
    console.log(course, index, arr);
    return course.length > 3
})
console.log(kq)

const result = courses.every(function (course, index) {
    if (course.length > 3)
        return course;
})
console.log(result)