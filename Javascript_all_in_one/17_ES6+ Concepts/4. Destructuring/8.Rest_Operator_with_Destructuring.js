const user = {
  name: "Abhi",
  age: 25,
  city: "Lucknow"
};

const { name, ...rest } = user;

console.log(name); // "Abhi"
console.log(rest); // { age: 25, city: "Lucknow" }

// code Object

// const numbers = [1, 2, 3, 4];

// const [first, ...others] = numbers;

// console.log(first);  // 1
// console.log(others); // [2, 3, 4]
