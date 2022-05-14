function clock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";
    if (h > 12) {
        session = 'PM';
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + session;
    console.log(time);
    setTimeout(clock, 1000)
}
clock(); //Lần đầu gọi hàm từ những lần sau cứ hết 1s thì hàm clock sẽ được gọi lại

//Đệ quy vs iife
(function loop() {
    setTimeout(function () {
        console.log("setTimeout")
        loop()
    }, 5000);
})();