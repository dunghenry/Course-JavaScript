function Animal(name, weight) {
    this.name = name;
    this.weight = weight
}

function Cat(name, weight, legs) {
    console.log(this) //Cat {}
    Animal.call(this, name, weight)
    console.log(this) //Cat {name: 'Chicken', weight: 1000}
    this.legs = legs
}

const cat = new Cat("Chicken", 1000, 4)
console.log(cat)
console.log(Cat)

function logger() {
    const arg = Array.from(arguments);
    console.log(Array.prototype.slice.call(arguments))
    console.log(arg)
    const arr = [...arguments]
    console.log(arr)
}
logger(1, 2, 3, 4)