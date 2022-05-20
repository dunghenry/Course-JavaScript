let courses = ["JavaScript", "PHP", "Ruby"];
courses.length = 100
Array.prototype.map2 = function (callback) {
    var output = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(courses[i], i, courses);
            output.push(result);
        }
    }
    return output;
}

const htmls = courses.map2(function (course, index, arr) {
    return `<h2>${course}</h2>`
})

console.log(htmls)


//Failed
function callback(course, index, arr) {
    // console.log(course, index, arr)
    return `<h2>${course}</h2>`
}
function myF(callback) {
    var output = [];
    for (var i = 0; i < courses.length; i++) {
        const result = callback(courses[i], i, courses);
        output.push(result)
    }
    return output;
}

const h = myF(callback);
console.log(h);


