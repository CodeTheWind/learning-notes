Array.prototype.unique = function () {
  return [...new Set(this)];
}

let array = [1, 2, 2, 3, 4, 5, 5, 6, 7, 7, 10, 10];

console.log(array.unique());
