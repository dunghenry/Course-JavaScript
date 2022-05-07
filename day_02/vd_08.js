//Convert null, "" or '', undefined, 0, NaN => boolean(false)
if ("") {
    console.log("DK dung");
}
else {
    console.log("DK sai"); //executed
}

//Logical
var a = 1;
var b = 2;
var c = 3;

//AND
if (a > 0 && b > 0 && c > 0) { 
    console.log("DK dung") //executed
}
else {
    console.log("DK sai")
}

//OR
if (a > 0 || b > 10) {
    console.log("DK dung"); //executed
}
else {
    console.log("DK sai");
}

//NOT
if (!true) {
    console.log("DK dung"); //executed
}
else {
    console.log("DK sai");
}