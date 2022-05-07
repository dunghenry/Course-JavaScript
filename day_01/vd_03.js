/**
 * function built-in
 * alert
 * console
 * confirm
 * prompt
 * set timeout
 * set interval
 */

// alert("Hi");
console.log("Hi");
console.error("Hi");
console.warn("Hi");
console.info("Hi")
console.profile("Hi")
// confirm("Hi");
// prompt("Hi");

//after 3s eforcement console.log("Hmmm")
setTimeout(function () {
    console.log("setTimeout")
}, 3000);

setInterval(function () {
    console.log("setInterval")
}, 1000)
