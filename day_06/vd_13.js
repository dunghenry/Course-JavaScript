let arr = ["JS", "CSS", "PHP"]
const arr2 = ["JS", "CSS"]

for (var i = 0; i < arr2.length; i++){
    if (arr.includes(arr2[i])) {
        var index = arr.indexOf(arr2[i]);
        arr.splice(index, 1)
    }
}

console.log(arr)