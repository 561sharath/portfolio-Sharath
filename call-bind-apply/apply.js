// apply() is exactly like call(), but arguments are passed as an array.

const person1 = {
    name: 'John'
}

function sayHello(role, city) {
    console.log(`Hello, I'm ${this.name} and I'm a ${role}. and I am from ${city}`);
}

sayHello.apply(person1, ['developer', 'New York']);

const numbers = [5, 10, 15];

const max = Math.max.apply(null, numbers);

console.log(max);