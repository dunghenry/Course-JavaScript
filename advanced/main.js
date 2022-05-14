//Bất đồng bộ
function test() {
    setTimeout(() => console.log(1), 0)
    console.log(2)
    console.log(3)
    console.log(4)
}
test();
//
function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp)
    }
    xmlHttp.open('GET', url, true) //true for async
    xmlHttp.send(null)
}
//Callback hell
httpGetAsync("https://picsum.photos/200/300", (data) => {
    document.getElementById('img_01').setAttribute('src', data.responseURL);
    httpGetAsync("https://picsum.photos/200/300", (data) => {
        document.getElementById('img_02').setAttribute('src', data.responseURL);
        httpGetAsync("https://picsum.photos/200/300", (data) => {
            document.getElementById('img_03').setAttribute('src', data.responseURL);
            httpGetAsync("https://picsum.photos/200/300", (data) => {
                document.getElementById('img_04').setAttribute('src', data.responseURL);
                httpGetAsync("https://picsum.photos/200/300", (data) => {
                    document.getElementById('img_05').setAttribute('src', data.responseURL);
                    httpGetAsync("https://picsum.photos/200/300", (data) => {
                        document.getElementById('img_06').setAttribute('src', data.responseURL);
                    })
                })
            })
        })
    })
})

//Promise
const promise = new Promise((resolve, reject) => {
    let condition = false;
    if (condition) {
        setTimeout(function () {
            resolve("Success!")
        }, 3000)
    }
    else {
        reject("Error")
    }
})

promise.then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log(err)
})


