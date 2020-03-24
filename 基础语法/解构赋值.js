const obj = {
  item: [{
    name: 'dy',
    age: 21,
    sex: '男',
    base: {
      hobby: ['sleep', 'eat'],
      hair: 'black',
    }
  },
  {
    name: 'hyj',
    age: 20
  }],
  value: 22,
  name: '解构赋值'
};

const { item } = obj;
const { name } = obj;

console.log(item);
console.log(name);

