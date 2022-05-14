//Cac loai function

//Declaration function hoisting
function demo() {
  console.log("Declaration function");
}

//Expression function
const demo1 = function () {
  console.log("Expression function");
};

setTimeout(function () {}, 1000);

var myObj = {
  myFunction: function () {},
};

// button.addEventListener('click', function(event) {
//     console.log('button is clicked!')
// })

//Arrow function

const a = () => console.log("Arrow function");
a(); //Arrow function

//Generator function

function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);
console.log(gen.next().value);
// expected output: 10
console.log(gen.next().value);
// expected output: 20


function* count() {
    var index = 0;
    while (true) {
        yield index++;
    }
}
    
var gen1 = count();
console.log(gen1.next().value); //0
console.log(gen1.next().value);//1
console.log(gen1.next().value);//2