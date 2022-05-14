let urls = [
    "https://jsonplaceholder.typicode.com/todos",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/users"
];
let requests = urls.map(url => fetch(url));
Promise.all(requests)
    .then(responses =>Promise.all(responses.map(response => response.json()))) //arr promise
    .then(data => data.map(data => console.log(data)))


const fetchPromise = fetch('https://jsonplaceholder.typicode.com/todos');
fetchPromise
    .then(response => {
        const result = response.json();
        return result;
    })
    .then(data => console.log(data))