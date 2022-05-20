function callback(value) {
    return value;
}

function myFunction(value, callback) {
    if(typeof callback === 'function') {}
        return callback(value)
}

const a = myFunction("Xin chao", callback)
console.log(a)