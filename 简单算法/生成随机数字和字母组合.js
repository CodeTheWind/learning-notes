/**
 * 获取随机数字和字母组合
 */
function getRandomLetterAndNumber() {
  return  Math.random().toString(36).substr(2);
}

console.log(getRandomLetterAndNumber());
