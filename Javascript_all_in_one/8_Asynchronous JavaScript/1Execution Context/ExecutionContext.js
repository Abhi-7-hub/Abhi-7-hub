// "📌 2. Execution Context
// 📖 Simple Words:
// Jab bhi koi function chalta hai, JS ek box (environment) banata hai jisme sab kuch hota hai — variables, functions, values, etc.
// Is box ko hi execution context kehte hain.

// 🔄 2 types:
// Global Execution Context (GEC) → sabse pehle banega

// Function Execution Context (FEC) → har function ke liye naya box"

let x = 10; // GEC me hoga

function add() {
  let y = 5; // FEC me hoga
  console.log(x + y);
}
add();
