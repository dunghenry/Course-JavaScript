function Animal(name, weight) {
    this.name = name;
    this.weight = weight
}

function Cat(name, weight, legs) {
    console.log(this) //Cat {}
    Animal.apply(this, [name, weight])
    // Animal.apply(this, arguments)
    console.log(arguments)
    console.log(this) //Cat {name: 'Chicken', weight: 1000}
    this.legs = legs
}

const cat = new Cat("Chicken", 1000, 4)
console.log(cat)
console.log(Cat)