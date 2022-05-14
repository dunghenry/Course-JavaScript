function show() {
    console.log('show');
}
function show() {
    console.log('show1');
}
show(); //show 1

function test() {
    var fullName = "Tran Van Dung"
    console.log(fullName); //Tran Van Dung
}
test();
//console.log(fullName); // fullName is not defined

function parent() {
    function child() {
        console.log('child function'); //child function
    }
    child();
}
parent();
// child(); error