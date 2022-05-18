const arr1 = [0, 1, 2, [[[3, 4]]]];
console.log(arr1.flat(1)) //[ 0, 1, 2, [ [ 3, 4 ] ] ]
console.log(arr1.flat(2)) //[ 0, 1, 2, [ 3, 4 ] ]
console.log(arr1.flat(3)); //[ 0, 1, 2, 3, 4 ]

const arr2 = [1, 2, [3, 4]];

const arrNew = arr2.reduce((acc, val) => acc.concat(val), []) //[ 1, 2, 3, 4 ]
console.log(arrNew)

const arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr3.flat(Infinity)) 

/**
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
 */


const arr4 = [1, 2, , 4, 5];
console.log(arr4.flat()); //[ 1, 2, 4, 5 ]


