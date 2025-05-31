🔰 Arrow Function – Definition
Arrow function JavaScript ka ek shorter syntax hai function likhne ka.
Ye anonymous (naam ke bina) function hota hai jo mostly short code, callbacks, or functional programming me use hota hai.
Iska sabse bada feature hai ki iska this parent scope se inherit hota hai, khud ka this nahi hota.

📚 Types of Arrow Functions with Definition & Use-case (No Example)
🔹 1. Arrow Function with No Parameters
Definition: A function that doesn't take any input/argument.

Use Case: Jab koi kaam karwana ho bina kisi input ke, jaise console.log, alert, etc.

🔹 2. Arrow Function with One Parameter
Definition: A function that takes exactly one argument.

Use Case: Jab single value ko process karna ho, jaise kisi number ka square, string length, etc.

🔹 3. Arrow Function with Multiple Parameters
Definition: A function that takes two or more arguments.

Use Case: Jab do ya zyada values ke beech calculation ya comparison karna ho.

🔹 4. Arrow Function with Single-Line (Implicit) Return
Definition: Function jisme return likhne ki zarurat nahi hoti, ek hi line me value return hoti hai.

Use Case: Jab short return karna ho — like in map, filter, reduce, etc.

🔹 5. Arrow Function with Multi-Line Body (Explicit Return)
Definition: Function jisme multiple lines ka logic ho aur return explicitly likhna padta hai.

Use Case: Jab tumhe complex logic likhna ho before returning any value.

🔹 6. Arrow Function that Returns an Object
Definition: Arrow function jo object return karta hai — isme object ko parentheses me wrap karna padta hai.

Use Case: Jab kisi function ko quickly object return karna ho — jaise user info, config settings, etc.

🔹 7. Arrow Function with No Return (Only Side Effects)
Definition: Function jo sirf kuch kaam karta hai, par return nahi karta.

Use Case: Jab tumhe sirf console.log, alert, ya DOM update jaisa kaam karna ho — bina return ke.

🔹 8. Immediately Invoked Arrow Function (IIFE)
Definition: Arrow function jo turant define karte hi automatically run ho jata hai.

Use Case: Initialization, ek baar ke kaam ke liye, jise dobara call karne ki zarurat nahi ho.

🔹 9. Arrow Function as a Callback
Definition: Jab arrow function kisi doosre function ke parameter me diya jata hai, wo callback ke roop me use hota hai.

Use Case: map, forEach, setTimeout, filter, event listeners jaise jagah pe frequent use.



Case	                                 Syntax Example
No parameter------	                        () => console.log("Hi")
One parameter--	                        x => x * 2
Two+ parameters	----                        (a, b) => a + b
Return object	                        () => ({name: "Abhishek"})
Multiline body	                        (n) => { if(n>0) return "yes"; }
No return (just side-effect)	        msg => console.log(msg)
IIFE	                                (() => { console.log("run") })();