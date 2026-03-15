const nums = [1, 2, 3, 4, 5];

const result = nums.filter((num) => num % 2 === 0);

console.log(result);

// implementing our own filter function

Array.prototype.myFilter = function (callback) {

    const newArray = [];

    for (let i =0; i<this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

const myFilterResult = nums.myFilter((num) => num % 2 === 0);

console.log(myFilterResult);

