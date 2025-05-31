const user = {
  name: "Abhishek"
};

// age is missing, so default value will be used
const { name, age = 30 } = user;

console.log(name); // "Abhishek"
console.log(age);  // 30
