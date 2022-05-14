//Default values parameter
function log(msg, type = 'log') {
    console[type](msg)
}
log("Xin chao", 'warn');

function hi(msg = "Default Value") {
    console.log(msg)
}
hi();
function xinchao(msg) {
    if(!msg) msg = "Xin chao cac ban"
    console.log(msg)
}
xinchao();