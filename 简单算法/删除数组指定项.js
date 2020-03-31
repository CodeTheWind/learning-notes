/**
 * 删除数组指定项
 * @param {数组} array 
 * @param {数组中某一项的值} key 
 */
function delAppointedItem(array, key) {
  // splice方法会改变原数组，所以需要深拷贝得到一个新数组
  let newArray = JSON.parse(JSON.stringify(array));
  newArray.splice(newArray.findIndex(item => item === key), 1);

  return newArray;
}

let array = ['dengyu', 'dy', '21', 'man'];
let key = 'dy';

console.log(delAppointedItem(array, key));
console.log(array);
