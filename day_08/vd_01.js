// const numbers = [1, 3, 2];
// console.log(numbers.reverse())// [ 2, 3, 1 ]

// console.log(numbers.sort());
// console.log(numbers.values())

//vd

async function fetchData() {
    return (await fetch("https://jsonplaceholder.typicode.com/todos")).json();
}
console.log("async-await")
async function run() {
  console.time("Timer");
  const data = await fetchData();
  console.log(data);
  console.timeEnd("Timer");
}
run();

// function run() {
//     const data = fetch("https://jsonplaceholder.typicode.com/todos")
//     data.then(res => res.json()).then(data => {
//         console.time("Timer");
//         console.log(data);
//         console.timeEnd("Timer")
//     })
   
// }
// run()
