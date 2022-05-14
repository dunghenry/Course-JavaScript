//Optional chaining
const obj = {
    name: "Alice",
    cat: {
        name: "Dinah",
        cat2: {
            name: "Dinah 2",
            cat3: {
                name: "Dinah3",
                // cat4: {
                //     name: "Dinah 4"
                // }
            }
        }
    }
};

if (obj.cat && obj.cat.cat2 && obj.cat.cat2.cat3 && obj.cat.cat2.cat3.cat4) {
    console.log(obj.cat.cat2.cat3.cat4.name)
}

console.log(obj?.cat?.cat2?.cat3?.cat4?.name); //Optional chaining : undefined

const obj1 = {
    //object literals
    // getName(value) {
    //     console.log(value)
    // }
}
obj1.getName?.("Tran Dung")

const arr = [];
console.log(arr?.[1]) //undefined