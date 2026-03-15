const nums = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const result = nums.reduce((acc, num) => acc + num, 0);

console.log(result);

// implementing our own reduce function

Array.prototype.myReduce = function(callback, initialValue) {  
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator; 
}

const myReduceResult = nums.myReduce((acc, num) => acc + num, 0);

console.log(myReduceResult);