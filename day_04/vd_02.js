//Sync/Async

setTimeout(function () {
    console.log(1)
}, 1000)

console.log(2)

//Theo luồng tư duy đồng bộ thì số 1 phải in ra trước rồi mới đến số 2
//Thực tế nó lại chạy bất đồng bộ vì số 2 in ra trước sau 1s mới in ra số 1(KN bất đồng bộ)

//Async : fetch, setTimeout, setInterval, XMLHttpRequest, file reading, request animation frame

//Callback hell

setTimeout(function () {
    console.log(1);
    setTimeout(function () {
        console.log(2);
        setTimeout(function () {
            console.log(3);
            setTimeout(function () {
                console.log(4);
                setTimeout(function () {
                    console.log(5);
                    setTimeout(function () {
                        console.log(6);
                        setTimeout(function () {
                            console.log(7);
                            setTimeout(function () {
                                console.log(8);
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
