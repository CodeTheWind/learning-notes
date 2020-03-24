/**
 * 1. push(value1, value2, ..., valuex) 向数组末尾插入一个或多个元素，并返回新的长度
 * 2. unshift(value1, value2, ..., valuex) 向数组头部插入一个或多个元素，并返回新的长度
 * ps: 改变原数组
 */
let array = [0, 1];

array.push(4);
console.log(array);          // [0, 1, 4]

array.unshift(1);
console.log(array);          // [1, 0, 1, 4]



/**
 * 3. pop() 删除并返回数组的最后一个元素
 * 4. shift() 删除并返回数组的第一个元素
 * ps: 改变原数组
 */
let array = [1, 2, 3];

array.pop();
console.log(array);          // [1, 2]

array.shift();
console.log(array);          // [2]



/**
 * 5. splice(index, howmany, value1, value2, ..., valuex)
 * 从数组中删除元素或者向数组插入元素
 * ps: 该方法会改变原数组，返回被删除的元素, 如果没有删除元素则返回空数组
 */
let array = [1, 2, 3, 4, 5, 6, 7, 8];

// 5.1 当参数只有 index 时, 从 index 处开始删除后面全部元素
array.splice(5);               // 删除5号位之后的所有元素
console.log(array);            // [1, 2, 3, 4, 5]

// 5.2 当参数有 index 和 howmany 时, 从 index 处删除 howmany 个元素
array.splice(2, 2);            // 从2号位开始删除2个元素
console.log(array);            // [1, 2, 5]

// 5.3 当参数有 index 、howmany 、 value... 时, 从 index 处删除 howmany 个元素后插入value...元素
array.splice(2, 1, 1);         // 从2号位删除1个元素, 并插入元素 1
console.log(array);            // [1, 2, 1]

array.splice(2, 0, 2, 3);      // 在2号位处插入元素 2 和 3
console.log(array);            // [1, 2, 2, 3, 1]



/**
 * 6. join() 通过指定连接符将数组转化为一个新的字符串
 * ps: 不会改变原数组, 默认使用 "," 连接字符
 */
let array = [1, 2, 3, 4];
let str1 = array.join();
let str2 = array.join('-');

console.log(str1);              // 1,2,3,4
console.log(str2);              // 1-2-3-4
console.log(array);             // [1, 2, 3, 4]



/**
 * 7. concat() 连接两个或多个数组
 * ps: 不会改变原数组
 */
const array1 = [1, 2, 3];
const array2 = [4, 5];
const array3 = [6, 7, 8];
const array = array1.concat(array2, array3);

console.log(array);             // [1, 2, 3, 4, 5, 6, 7, 8]



/**
 * 8. reverse() 颠倒数组中元素的顺序
 * ps: 改变原数组
 */
let array = [0, 1, 2];

array.reverse();
console.log(array);             // [2, 1, 0]



/**
 * 9. sort(fn) 数组排序
 * ps: 改变原数组
 */
let array = [1, 10, 4, 5, 9];

array.sort((a, b) => a - b);
console.log(array);           // [1, 4, 5, 9, 10]



/**
 * 10. slice(start, end) 选取数组中的选定元素
 * ps: 不改变原数组
 */
let array = [1, 2, 3, 4];

// 当不传参数时, 会返回原数组的副本(浅拷贝)
let newArray = array.slice();
console.log(newArray);

// 当参数只有 start 时, 选取的是 start 之后所有的元素(包含start)
let newArray1 = array.slice(2);
console.log(newArray1);       // [3, 4]

// 当参数有 start 和 end 时, 选取的元素包含start不包含end
let newArray2 = array.slice(1, 2);
console.log(newArray2);       // [2]



/**
 * 11. indexOf(value, fromIndex) 从 fromIndex 处开始查找 value 的位置
 * ps: 若无 fromIndex 则从第一个开始查找; 若没有找到则返回 -1
 */
const array = [1, 2, 3, 7, 4];

console.log(array.indexOf(7, 1));           // 3
console.log(array.indexOf(10));             // -1



/**
 * 12. includes(value) 查找数组中是否有 value, 若有返回 true, 若无则返回 false
 */
const array = [1, 3, 5, 9, 2];

console.log(array.includes(4));    // false
console.log(array.includes(2));    // true



/**
 * 13. map(fn) 遍历数组, 并返回回调返回值组成的新数组
 */
const array = [1, 4, 5, 7, 10];
const newArray = array.map(item => item * 2)

console.log(newArray);              // [2, 8, 10, 14, 20]



/* 14. filter(fn) 过滤, 回调函数必须要求返回一个Boolean值
 * true: 函数内部会自动将这次回调的n加入要新的数组中
 * false: 函数内部会自动过滤掉这个的n
 * */
const array = [100, 50, 14, 12, 36, 200, 15, 12, 632, 202];
const newArray = array.filter(n => n < 100);

console.log(newArray);    // [50, 14, 12, 36, 15, 12]



/**
 * 15. every(fn) 检测数组所有元素是否符合(fn)指定条件
 * ps: 只要有一项不符合, 则返回 false, 且剩下的元素不会再检测, 所有项都满足时返回 true
 *     不会对空数组进行检测, 不会改变原数组
 */
const array = [10, 23, 12, 36, 2, 51, 16];

console.log(array.every(n => n > 10));     // false
console.log(array.every(n => n < 100));    // true



/**
 * 16. some(fn) 检测数组所有元素是否符合(fn)指定条件
 * ps: 只要有一项符合, 则返回 true, 且剩下的元素不会再检测, 所有项都不满足时返回 false
 *     不会对空数组进行检测, 不会改变原数组
 */
const array = [1, 2, 3, 5, 7];

console.log(array.some(n => n > 5));       // true
console.log(array.some(n => n > 10));      // false



/**
 * 17. reduce(fn) 将数组中的值从左到右累加计算总值, reduceRight(fn) 从右到左累加
 * ps: 对空数组不执行回调函数
 */
const array = [1, 2, 3, 4, 5, 5];

console.log(array.reduce((total, item) => total + item));



/**
 * 18. forEach(fn) 遍历, 数组中的每一项都执行一次回调函数
 */
const array = [1, 23, 4, 5];
array.forEach(item => console.log(item));



/**
 * 19. find(fn) 返回第一个通过fn测试的值 - findIndex(fn) 返回第一个通过测试的值的位置
 * ps: 当数组元素满足fn条件时返回true, find()返回符合条件的元素, 之后的值不再调用回调函数
 *      如果没有符合条件的值则返回 undefined(find()) -1(findIndex()), 空数组不执行回调函数, 不会改变原数组
 */
const array = [1, 2, 3, 4];
console.log(array.find(item => item > 2));



/**
 * 总结：
 * 1、会改变原数组的方法有： push、pop、unshift、shift、splice、reverse、sort
 * 2、不会改变原数组的方法有：join、concat、slice
 */