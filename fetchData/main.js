const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";
fetch(url)
    .then(res => {
        const data = res.json(); //promise
        return data;
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))

//async await
async function fetchAPI(url) {
    const response = await axios.get(url);
    const data = response.data;
    return data;
}
fetchAPI(url).then(data => console.log(data))

//ajax
function callAPI(url, resolve) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) resolve(xhttp)
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

const promise = new Promise((resolve) => {
    callAPI(url, resolve);
})
promise.then(function (data) {
    return(JSON.parse(data.responseText))
}).then(function (data) {
    console.log( data);
})