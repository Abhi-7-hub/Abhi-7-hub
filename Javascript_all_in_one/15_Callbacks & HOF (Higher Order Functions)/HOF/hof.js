let arry = ["apple", "banana", "mango"];

// ✅ Callback function
function calling(frist, paramiter) {
    console.log(`This is calling function on ${frist} intration and Value is: ${paramiter} `)
}

// ✅ Higher-order function — jo callback ko call karta hai
function procesing(arr, callback) {
    for (let i = 0; i <= arr.length - 1; i++) {
        callback(i, arr[i]); // ✅ sahi tarike se callback call ho raha hai
    }
}

// ✅ Function call
procesing(arry, calling);


"In this example, calling() is a callback function which is passed into the procesing() function. The procesing() function is a higher-order function because it takes another function as a parameter and executes it inside a loop. This shows how callback functions help us pass custom behavior into generic logic."
