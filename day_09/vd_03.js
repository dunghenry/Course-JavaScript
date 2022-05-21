let courses = ['C#', 'Java', 'Javascript']
courses.length = 100;
Array.prototype.some2 = function (callback) {
    var output = '';
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            if (callback(this[key], key, this)) {
                output = true;
                break;
            }
                
        }
    }
    return output;
}

const kq = courses.some2(function (course, index, arr) {
    console.log(course, index, arr);
    return course.length > 3
})
console.log(kq)

const result = courses.some(function (course, index) {
    if (course.length > 3)
        return course;
})
console.log(result)