const brand = "F8";
const course = "Javascript";

function highligh([first, ...strings], ...values) {
    
    return values.reduce((acc, curr) => {
        console.log(acc)
        return [...acc, `<span>${curr}</span>`, strings.shift()]
    }, [first]).join('\n');     
}
var html = highligh`Hoc lap trinh ${course} tai ${brand}!`
console.log(html)
var app = document.getElementById('app');
app.innerHTML = html;

