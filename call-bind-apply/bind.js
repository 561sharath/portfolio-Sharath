// bind() does NOT call the function immediately.

// It creates a new function with a fixed this value.

const person = {
  name: "Sharath"
};

function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const greetUser = greet.bind(person, "Hyderabad");

greetUser();