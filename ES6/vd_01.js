//Block and scope
{
    const course = "JS";
    let course1 = "JS";
    console.log(course); //success
    console.log(course1); //success
    var course2 = "JS";
    {
        {
            {
                const course = "PHP"
                console.log(course) //success: PHP
                console.log(course1) //success
                console.log(course2); //success
            }
        }
    }
}
// console.log(course) //error
// console.log(course1) //error
console.log(course2); //success


//hoisting
a = 1;
var a;
console.log(a) //1

// b = 1;
// let b; 
// console.log(b) //  Cannot access 'b' before initialization

// c = 1;
// const c;  //'const' declarations must be initialized.


//Assignment ko the gan lai gia tri

const obj = {
    name: "Tran Dung"
}
obj.name = "Tran Van Dung"
console.log(obj)  //{ name: 'Tran Van Dung' }

let isSelected = false;
if (!isSelected) {
    isSelected = !isSelected;
}
console.log(isSelected) //true