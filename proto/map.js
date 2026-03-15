const nums = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const result = nums.map((num) => num * 2);

console.log(result);

// implementing our own map function

Array.prototype.myMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

const myMapResult = nums.myMap((num) => num * 3);

console.log(myMapResult);
