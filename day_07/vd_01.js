//Object
const keyCountry =  "country"
const myInfo = {
    name: "Tran Dung",
    age: 21, address: 'Ninh Binh',
    address: 'Ninh Binh',
    [keyCountry]: "VietNam",
    getName: function() {
        return this.name;
    }
}
myInfo.email = 'trandungksnb00@gmail.com';
myInfo['my-email'] = 'trandungksnb00@gmail.com';
console.log(myInfo);
console.log(myInfo['my-email']);
console.log(myInfo.email);
const myKey = 'address';
console.log(myInfo[myKey]);
console.log(myInfo.getName())