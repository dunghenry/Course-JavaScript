//Primitive
let a = 1;
let b = a;
a = 2;
console.log(b); //1
console.log(a); //2
//Gán giá trị a cho b lúc này tạo ra vùng nhớ mới cho b và lưu gt b = 1, sau đó thay đổi a = 2 thì nó trỏ đến vùng nhớ của a và thay đổi giá trị đc lưu = 2, sau

//Reference
var c = {
  name: "Javascript",
};
var d = c;
d.name = "PHP";
console.log(d); //{ name: 'PHP' }
console.log(c); //{ name: 'PHP' }

//Khi tạo biến c thì nó lưu giá trị vào 1 vùng nhớ sau đó trả về giá trị địa chỉ và gán cho c.Ta gán c cho d thì d chép lại vùng nhớ dẫn đến c và d đều trỏ đến địa chỉ của vùng nhớ đó nên khi đó ta thay đổi c.name hay d.name thì cũng chỉ sửa giá trị trong địa chỉ duy nhất đó

let e = {
  name: "JS",
};
let f = e; //{ name: 'JS' } Chỉ gán lại thì mới lấy đc ra gt cũ không thì sau khi gán lại gt của e giá trị đó vẫn còn nhưng ko thể lấy ra đc chỉ mất đi khi ct kết thúc
e = {
  name: "PHP",
  price: 1000,
};

//Tạo ra hai vùng nhó.Mỗi obj đc tạo ra là tạo ra 1 vùng nhớ mới
console.log(f);

const student = {
  name: "Dung",
  profile: {
    firstName: "Dung",
    lastName: "Tran",
    introduction: "Boy",
  },
};

const studentProfile = student.profile;
student.profile.introduction = "Good boy";
console.log(studentProfile); //{ firstName: 'Dung', lastName: 'Tran', introduction: 'Good girl' }

function sum(a, b) {
  //let a = 1;
  //let b = 2
  console.log(a, b); //1 2
  a = 0;
  b = 0;
  //Đây là kiểu tham trị
  console.log(a, b); // 0 0
  return a + b;
}

const s = sum(1, 2);
console.log(s);

function myF(obj) {
  //let obj = obj
  obj.name = "Mercerdes";
  console.log(obj); //{ name: 'Mercerdes' }
}

const obj = {
  name: "BMW",
};

myF(obj);
console.log(obj); //{ name: 'Mercerdes' }

function createCar(obj) {
  // obj = JSON.parse(JSON.stringify(obj));
  obj = { ...obj };
  obj.name = "Mercerdes";
  return obj;
}
const car = {
  name: "BMV",
};

const newCar = createCar(car);
console.log(newCar); //{ name: 'Mercerdes' }
console.log(car); //{ name: 'BMV' }

const obj1 = {
  a: 1,
};
const obj2 = {
  a: 1,
};

const obj3 = obj1;

console.log(obj1 === obj2); //false
console.log(obj1 === obj3); //true

const obj4 = {
  name: "TranDung",
};
obj4.name = "Tran Van Dung";
console.log(obj4); //{ name: 'Tran Van Dung' }
