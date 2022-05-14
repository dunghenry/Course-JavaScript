function logger(...rest) {
    console.log(rest); //[1, 2, 3, 4]
}
logger(1, 2, 3, 4);

function logger1(a, ...rest) {
    console.log(a); //1
    console.log(rest); //[2, 3, 4]
}
logger1(1, 2, 3, 4);

function logger2({fullName, ...rest}) { //destructuring and rest
    console.log(fullName); //Tran Van Dung
    console.log(rest); //{age: 21, address: 'Ninh Binh'}
}
logger2({
    fullName: "Tran Van Dung",
    age: 21,
    address: "Ninh Binh"
});
function logger3(obj) {
    console.log(obj); //{fullName: 'Tran Van Dung', age: 21, address: 'Ninh Binh'}
    console.log(obj.fullName); //Tran Van Dung
   
}
logger3({
    fullName: "Tran Van Dung",
    age: 21,
    address: "Ninh Binh"
});


function logger4([a, ...rest]) {
    console.log(a); //1
    console.log(rest); //[2, 3]
}
logger4([1, 2, 3])