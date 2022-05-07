function log(msg) {
  if (!msg) msg = "Hi";
  console.log(msg);
}
setInterval(log, 3000, "Hi"); // after 3 seconds the function log is executed

//VD setInterval and clearInterval
var intervalID = setInterval(myCallback, 1000, "Parameter 1", "Parameter 2");
function myCallback(a, b) {
  console.log(a);
  console.log(b);
  console.log(intervalID);
  clearInterval(intervalID); //remove intervalID and stoped
}

//VD setInterval using iife and arrow function
(function loop() {
  setInterval(() => {
    console.log("setTimeout");
  }, 1000);
})();
