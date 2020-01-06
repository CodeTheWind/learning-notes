let obj = {
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
  }
  ]
};

const { item } = obj;

console.log(item[0]);
