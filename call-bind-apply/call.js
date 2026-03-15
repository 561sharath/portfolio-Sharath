// call() calls a function immediately and lets you set the this value manually.


const person1 ={
    name: 'John',
}

const person2 = {
    name: 'Jane',
}

function sayHello(role){
    console.log(`Hello, I'm ${this.name} and I'm a ${role}.`);
}

sayHello.call(person1, 'developer'); 
sayHello.call(person2, 'designer');
// Output: Hello, I'm John and I'm a developer.