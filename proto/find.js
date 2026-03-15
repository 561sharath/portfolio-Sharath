
const nums = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const result = nums.find((num) => num > 5);

console.log(result);

// implementing our own find function


Array.prototype.myFind = function (callback) {

    for (let i =0; i<this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }

}

const myFindResult = nums.myFind((num) => num > 5);

console.log(myFindResult);