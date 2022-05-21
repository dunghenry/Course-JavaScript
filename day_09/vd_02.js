let courses = ['C#', 'Java', 'Javascript']
courses.length = 100;
Array.prototype.find2 = function (callback) {
    var output = '';
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            if (callback(this[key], key, this)) {
                output = this[key];
                break;
            }
                
        }
    }
    return output;
}

const kq = courses.find2(function (course, index, arr) {
    console.log(course, index, arr);
    return course.length > 3
})
console.log(kq)

const result = courses.find(function (course, index) {
    if (course.length > 3)
        return course;
})
console.log(result)