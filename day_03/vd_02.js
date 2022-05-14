//Tagged templates
let person = 'TranDung';
let age = 21;
function myTag(strings, ...others) {
    return {
        strings,
        others
    }
}
let output = myTag `That ${ person } is a ${ age }.`;
console.log(output);

const arr = (strings, ...others) => {
    return {
        strings,
        others
    }
};
const ouput1 = arr `That ${ person } is a ${ age }.`
console.log(ouput1);
