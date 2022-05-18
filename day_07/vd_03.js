//Array
const courses = [
    {
        id: 1,
        name: "JavaScript",
        coin: 100
    },
    {
        id: 2,
        name: "React",
        coin: 200
    },
    {
        id: 3,
        name: "Ruby",
        coin: 0
    }
]
//forEach
courses.forEach(course => console.log(course)); //callback
courses.forEach(function (course) {
    console.log(course);
});
courses.forEach(myFunction);
function myFunction(course) {
    console.log(course);
}

//every => boolean, all elements coin > 0
const isFree = courses.every(course => course.coin > 0)
console.log(isFree)// all elements coin > 0 return true, false

//some
const isFree1 = courses.some(course => course.coin === 0);
console.log(isFree1) //true

//find
const courseCoin100 = courses.find(course => course.coin === 100);
console.log(courseCoin100) //{ id: 1, name: 'JavaScript', coin: 100 }

//filter => return  array

const arrFilter = courses.filter(course => course.coin !== 100);
console.log(arrFilter)
/**
[
  { id: 2, name: 'React', coin: 200 },
  { id: 3, name: 'Ruby', coin: 0 }
]
 */

//fill
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.fill(0, 0, 2)); //[ 0, 0, 3, 4, 5 ]

//Array.from()

const arrNew = Array.from(numbers, x => x + 1); //[ 1, 1, 4, 5, 6 ]
console.log(arrNew);
console.log(Array.from('foo')) //[ 'f', 'o', 'o' ]]

//Array.of() and Array : Array constructor
const testArr = Array.of(10, 1);
const demo = Array(10)
console.log(testArr);//[ 10, 1 ]
console.log(demo); //[ <10 empty items> ]
console.log(Array.isArray(demo)); //true
console.log(Array.isArray({ a: 1 })); //false

//entries
const result = courses.entries();
console.log(result.next().value); //[key, value]
console.log(result.next().value); //

//findIndex
const numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1.findIndex(num => num > 2)) //index > 2 : 2

//Array.flat

const arrr = [1, 2, 3, [4, 5]];
console.log(arrr.flat()) //[ 1, 2, 3, 4, 5 ]

//reduce
const totalCoin = courses.reduce((prev, curr) => prev + curr.coin, 0);
console.log(totalCoin)

//map
const newCourses = courses.map((course, index, arr) => {
    console.log(index, arr)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin
    }
})
console.log(newCourses);
