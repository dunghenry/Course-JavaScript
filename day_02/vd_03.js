//prefix and postfix(Sd trước là tiền tố sau là hậu tố)
var a = 6;
var b;
b = a++ + a--; // 6 + 7 lưu ý khi sd hậu tố
console.log(b); //13

//Note tiền tố: ++a : thực hiện +1 cho a rồi trả về giá trị sau khi cộng 1
var x = ++a;
console.log(x); //7

//Note hậu tố:Đầu tiên copy giá trị của c, c copy = 1 sau đó trừ c cho 1 => c - 1 = 0 rồi trả về c copy
var c = 1;
var y = c--;
console.log(y); //1

console.log(c) //0

//VD:
var number = 6;
var output = number++ + --number;// 6 + 6
console.log(output) // 12

//VD
var output2 = number++ * 2 - --number * 2; // 6 * 2 - 6 * 2
console.log(output2) //0

var output3 = ++number * 2 - number-- * 2; // 7 * 2 - 7 * 2
console.log(output3) //0