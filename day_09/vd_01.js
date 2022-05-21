let courses = ['Javascript', 'Java', 'C#']
courses.length = 100;
Array.prototype.filter2 = function (callback) {
    let output = []
    for (const key in this) {
        if (this.hasOwnProperty(key)) {
            if (callback(this[key], key, this)) {
                output.push(this[key]);
            }
                
        }
    }
    return output;
}

const kq = courses.filter2(function (course, index, arr) {
    console.log(course, index, arr);
    return course.length > 3
})
console.log(kq)

