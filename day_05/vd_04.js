//Object
var fieldAddress = 'address'
var obj = {
    ['name']: "Dung",
    age: 21,
    [fieldAddress]: 'Ninh Binh',
    getName: function () {
        return this.name
    }
};
obj.fullName = 'Tran Van Dung'
console.log(obj);

console.log(obj.name); //Dung
console.log(obj['name']) //Dung
const keys = Object.keys(obj);
console.log(keys) //[ 'name', 'age', 'address', 'fullName' ]
const values = Object.values(obj);
console.log(values) //[ 'Dung', 21, 'Ninh Binh', 'Tran Van Dung' ]

var myKey = 'address';
console.log(obj[myKey]) //Ninh Binh

//delete
// delete obj[myKey];
// delete obj['name'];

console.log(obj.getName());//Dung