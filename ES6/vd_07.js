var obj = {
    name: "Tran Dung",
    age: 21,
    address: "Ninh Binh",
    child: {
        name: "Nguyen Nam",
        age: 10
    }
};

const { name: parentName, child: { name: childName, age }, description = "default description"} = obj

console.log(parentName, childName, age) //Tran Dung Nguyen Nam 10
console.log(description) //default description

function logger(...params) { //rest
    console.log(params) //[1, 2, 3, 4] 
    console.log(arguments) //Arguments(4) [1, 2, 3, 4, callee: (...), Symbol(Symbol.iterator): ƒ]
    const arr = Array.from(arguments); //convert to array
    console.log(arr); //[1, 2, 3, 4]
    console.log(Object.values(arguments));
    console.log(Array.prototype.slice.call(arguments))
}
logger(1, 2, 3, 4)
