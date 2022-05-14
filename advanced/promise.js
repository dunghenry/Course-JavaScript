var users = [
    {
        id: 1,
        name: "Tran Dung"
    },
    {
        id: 2,
        name: "Admin"
    },
    {
        id: 3,
        name: "Harry"
    },
];

var comments = [
    {
        id: 1,
        content: "Hello"
    },
    {
        id: 2,
        content: "Hi"
    },
    {
        id: 1,
        content: "Hehe"
    },
]

function getComments() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments)
        }, 2000)
    })
}

function getUsersByIds(userIds) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIds.includes(user.id)
        })
        setTimeout(function () {
            resolve(result)
        }, 1000)
    })
}

getComments()
    .then(function (comments) {
        var userIds = comments.map(comment => comment.id);
        return getUsersByIds(userIds).then(function (users) {
            return {
                users,
                comments
            }
        })
    })
    .then(function (data) {
        var html = '';
        var ul = document.getElementById('comments');
        data.comments.forEach(function (comment) {
            var user = data.users.find(user => user.id === comment.id);
            html += `<li>${user.name} : ${comment.content}</li>`
        })
        ul.innerHTML = html
    })