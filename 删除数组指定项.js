let array = ['dengyu', 'dy', '21', 'man'];

let key = 'dy';

array.splice(array.findIndex(item => item === key), 1);

console.log(array);
