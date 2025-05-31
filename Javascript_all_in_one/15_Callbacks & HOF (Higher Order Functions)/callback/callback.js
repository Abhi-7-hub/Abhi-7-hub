// Callback function
function showMessage(message) {
  console.log("Message: " + message);
}

// Function jo callback accept karta hai
function greetUser(callback) {
  let userName = "Abhishek";
  
  // Jab kaam ho jaye, callback ko call karte hain
  callback("Hello, " + userName + "!");
}

// greetUser function ko call karte hain aur showMessage ko callback dete hain
greetUser(showMessage);
