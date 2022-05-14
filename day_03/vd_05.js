//Array
var languages1 = ['Javascript', 'Java', 'C#', null, undefined, function () { }, {}];
var languages = ['Javascript', 'Java', 'C#',];
console.log(languages); //[ 'Javascript', 'Java', 'C#' ]
console.log(languages.length); //3
console.log(Object.keys(languages)); //[ '0', '1', '2' ]

var languages2 = new Array('PHP', 'C#', 'Java');
console.log(languages2); //[ 'PHP', 'C#', 'Java' ]
console.log(typeof languages2); //object
console.log(Array.isArray(languages2)); //true
console.log(Array.isArray({})); //false
console.log(languages[1]); //Java
//use for and arr
for (const language of languages) {
    console.log(language);
}
//Javascript
//Java
//C#

for (const key in Object.keys(languages)) {
    console.log(languages[key]);
}
//Javascript
//Java
//C#

languages.forEach(element => {
    console.log(element);
});
//Javascript
//Java
//C#