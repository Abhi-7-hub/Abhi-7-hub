const users = [
  { name: "Abhi", age: 25 },
  { name: "Ravi", age: 22 }
];

for (const { name, age } of users) {
  console.log(`${name} is ${age} years old.`);
}
