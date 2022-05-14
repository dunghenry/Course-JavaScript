function httpGetAsync(url, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);
    };
    xmlHttp.open("GET", url, true); //true for async
    xmlHttp.send(null);
}
const currentPromise = new Promise(function (resolve) {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});
const executeAsync = async () => {
    try {
        const response = await currentPromise;
        document.getElementById("img_01").setAttribute("src", response.responseURL);
        const response1 = await new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve);
        });
        document
            .getElementById("img_02")
            .setAttribute("src", response1.responseURL);
        const response2 = await new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve);
        });
        document
            .getElementById("img_03")
            .setAttribute("src", response2.responseURL);
        const response3 = await new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve);
        });
        document
            .getElementById("img_04")
            .setAttribute("src", response3.responseURL);
        const response4 = await new Promise(function (resolve) {
            httpGetAsync("https://picsum.photos/200/300", resolve);
        });
        document
            .getElementById("img_05")
            .setAttribute("src", response4.responseURL);
    } catch (error) {
        console.log(error);
    }
};
executeAsync();
