// function myname(name){
//     console.log(name)
// }

// function yourname(callback){
//     let name="Abhishek"
//     callback(name);
// } 
// yourname(myname);

// Ek function addNumbers(a, b) banao jo a + b return kare.
// Fir ek dusra function calculate(operation, a, b) banao jo kisi bhi function (operation) ko callback ke roop me accept kare aur a, b pass karke uska result return kare.


// function addNumber(a,b){
//     return a+b
// }
// function calculate(callback, a, b){
//     return callback(a, b);
// }

// let result = calculate(addNumber,4,5);
// console.log(result)



function displayMessage(callback) {
  callback();  // 👈 yeh line callback function ko call kar rahi hai
}

// 👇 yahan hum ek anonymous function pass kar rahe hain
displayMessage(function() {
  console.log("This is a callback!");
});

