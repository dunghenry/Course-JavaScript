var a = 1;
var b = '1';
console.log(a == b); //true
console.log(a != b);// false

console.log(a === b); //false
console.log(a !== b);// true


var result = 'A' && 'B' && 'C' && 'D' && 'E'; // false && 'B' && 'C' && 'D' && 'E' => false
// Nếu gặp giá trị convert bằng false thì lấy gt đó gán vào result, nếu ko có giá trị convert bằng false thì lấy giá trị cuối cùng khác giá trị convert = false gán cho result
console.log(result); //E


var result2 = false || NaN || 0 || null; //'A' || 'B' || 'C' || 'D' => A
console.log(result2); // null

//Nếu gặp giá trị khác 6 giá trị convert sang boolean bằng false thì lấy giá trị đó gắn cho result2 ngược lại nếu tất cả các giá trị convert mà bằng false thì lấy giá trị cuối convert bằng false