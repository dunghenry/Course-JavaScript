function getTodos(url) {
    return fetch(url)
}

function getPosts(url) {
    return fetch(url)
}

function run() {
    const todos = getTodos('https://jsonplaceholder.typicode.com/todos').then(data => data.json());
    const posts = getPosts('https://jsonplaceholder.typicode.com/posts').then(data => data.json());
    return [todos, posts]
}

Promise.all(run()).then(data => console.log(data))
    
    
