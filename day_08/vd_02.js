const courses = [
    {
        id: 1,
        name: "Javascript",
        coin: 100
    },
    {
        id: 2,
        name: "PHP",
        coin: 200
    },
    {
        id: 3,
        name: "React",
        coin: 300
    },
]

let totalCoin = 0;
for (const course of courses) {
    totalCoin += course.coin
}
console.log(totalCoin);

const totalCoint2 = courses.reduce((acc, curr) => acc + curr.coin, 0);
console.log(totalCoint2);


const numbers = [1, 2, 3]
const sum = numbers.reduce((acc, curr, index, arr) => {
    index += 1;
    console.table({
        'index': index,
        'value': curr,
        'acc': acc + curr
    })
    return acc + curr;
}, 0)
console.log(sum); //6


const numbers1 = [1, 2, [3, 4], [5, 6], [7, 8], [9, 10]]
const arrNew = numbers1.reduce((acc, curr) => {
    return acc.concat(curr);
}, [])
console.log(arrNew)


//
const topics = [
    {
        title: "Javascript Tutorial",
        courses: [
            {
                id: 1, 
                name: "Javascript Basic"
            },
            {
                id: 2, 
                name: "Javascript Advance"
            }
        ]
    },
    {
        title: "Javascript Framework",
        courses: [
            {
                id: 1, 
                name: "VueJS"
            },
            {
                id: 2, 
                name: "ReactJS"
            }
        ]
    }
]

const newCourses = topics.reduce((courses, topic) => {
    return courses.concat(topic.courses)
}, []) 
console.log(newCourses)