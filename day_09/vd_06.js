let courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 100
    },
    {
        id: 2,
        name: 'Javascript',
        coin: 200
    },
    {
        id: 1,
        name: 'Javascript',
        coin: 300
    },
];

Array.prototype.reduce2 = function (callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        result = this[0].coin
        i = 1;
    };
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}

const result = courses.reduce2(function (acc, curr) {
    return acc + curr.coin;
}, 100)
console.log(result)



