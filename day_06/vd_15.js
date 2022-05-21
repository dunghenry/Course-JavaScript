function createCounter() {
    let count = 0;

    function increment() {
        return ++count;
    }
    return increment;
}

const counter1 = createCounter();

console.log(counter1())//1
console.log(counter1())//2
console.log(counter1())//3


const counter2 = createCounter();
console.log(counter2()) //1