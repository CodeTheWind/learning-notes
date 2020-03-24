let person = {
  name: 'dy',
  age: 21,
  sex: 'male',
  hobby: 'female',
};


/* 
* 参数：要返回其枚举自身属性的对象
  返回值：一个表示给定对象的所有可枚举属性的字符串数组
 */
console.log(Object.keys(person));



let persons = [
  {
    name: 'dy',
    age: 21,
    sex: 'male'
  },
  {
    name: 'hyj',
    age: 20,
    sex: 'female',
  }
];
console.log(Object.keys(persons));
