let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [2, 3, 3, 6, 0, 1, 8];

let result = [...new Set(arr1)].filter(item => arr2.includes(item));

console.log(result);
