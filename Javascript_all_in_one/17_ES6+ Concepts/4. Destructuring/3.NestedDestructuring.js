const user = {
  id: 101,
  profile: {
    username: "abhi_dev",
    email: "abhi@example.com"
  }
};

// Destructuring
const {
  profile: { username, email }
} = user;

console.log(username); // "abhi_dev"
console.log(email);    // "abhi@example.com"
