const data = {
  name: "Abhi",
  hobbies: ["coding", "reading"]
};

const {
  name,
  hobbies: [hobby1, hobby2]
} = data;

console.log(name);   // "Abhi"
console.log(hobby1); // "coding"
console.log(hobby2); // "reading"
