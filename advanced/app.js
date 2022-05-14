function httpGetAsync(url, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp)
    }
    xmlHttp.open('GET', url, true) //true for async
    xmlHttp.send(null)
}
const currentPromise = new Promise(function (resolve) {
    httpGetAsync("https://picsum.photos/200/300", resolve)
})

currentPromise
    .then(function (data) {
        document.getElementById('img_01').setAttribute('src', data.responseURL);
        return new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve)
        });
    })
    .then(function (data) {
        document.getElementById('img_02').setAttribute('src', data.responseURL);
        return new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve)
        });
    })
    .then(function (data) {
        document.getElementById('img_03').setAttribute('src', data.responseURL);
        return new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve)
        });
    })
    .then(function (data) {
        document.getElementById('img_04').setAttribute('src', data.responseURL);
        return new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve)
        });
    })
    .then(function (data) {
        document.getElementById('img_05').setAttribute('src', data.responseURL);
        return new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve)
        });
    })
    .catch(function (err) {
        console.log(err);
    })