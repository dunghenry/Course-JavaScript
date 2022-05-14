//toExponential()trả về một chuỗi, với một số được làm tròn và được viết bằng ký hiệu hàm mũ.
let x = 9.656;
console.log(x.toExponential(2)); // 9.66e+0
console.log(x.toExponential(4)); // 9.6560e+0
console.log(x.toExponential(6)); // 9.656000e+0

//toFixed()trả về một chuỗi, với số được viết với một số thập phân được chỉ định:
console.log(x.toFixed(2)); // 9.66

//toPrecision()trả về một chuỗi, với một số được viết với độ dài được chỉ định:
console.log(x.toPrecision(5)); //9.6560

//valueOf
var a = 1
console.log(x.valueOf()); //9.656
console.log(parseFloat("10")) //10
