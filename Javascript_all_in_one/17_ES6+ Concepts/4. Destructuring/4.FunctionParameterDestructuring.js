function greet({ name, age }) {
  console.log(`Hello ${name}, age: ${age}`);
}

const person = { name: "Abhishek", age: 25 };

greet(person); // "Hello Abhishek, age: 25"
