const courses = ["JavaScript", "PHP", "Ruby"]
const htmls = courses.map(function (course) {
    return `<h2>${course}</h2>`
})
console.log(htmls.join(''))

//

function myCallback(course, index, arr) {
    console.log(course, index, arr);
}

courses.map(myCallback);
