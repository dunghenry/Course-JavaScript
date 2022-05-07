//String
var fullName = "Tran Dung";
var fullName1 = new String("Tran Van Dung");
console.log(fullName); //Tran Dung
console.log(fullName1); //[String: 'Tran Van Dung']
console.log(typeof fullName1)// object

var msg = "Xin chao cac ban hehe \t? Haha"

var msg1 = "Xin chao cac ban hehe \n? Haha"
console.log(msg); //Xin chao cac ban hehe   ? Haha
console.log(msg1);
/**
    Xin chao cac ban hehe
    ? Haha
 */

var c = "Day la dau \\" //Day la dau \
var c1 = "Day la dau \"" //Day la dau "
var c2 = "Day la dau '" //Day la dau '
console.log(c);
console.log(c1);
console.log(c2);
console.log(c.length); //12

//Template string
var firstName = 'Dung';
var lastName = 'Tran';
var fullName = `${firstName} - ${lastName}`;
console.log(fullName); //Dung - Tran