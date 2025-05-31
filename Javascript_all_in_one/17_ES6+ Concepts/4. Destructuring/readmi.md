🔥 What is Destructuring in JavaScript?
Destructuring ek feature hai jisse tum array ya object ke andar se specific values ko directly variables me assign kar sakte ho, bina baar-baar . ya [ ] ke use kiye.

✅ "Tukdo-tukdo me tod ke chhant lena" – yeh hota hai destructuring!

🧠 Why use Destructuring?
Code chhota, readable, aur clean ho jata hai ✅

Bar-bar obj.key ya arr[0] likhne ki zarurat nahi ✅

Functions ke parameters me use karke clear inputs milte hain ✅

React, Node, APIs me bahut kaam aata hai ✅

📦 Types of Destructuring in JavaScript (with Where & How to Use)
1️⃣ Array Destructuring
🔹 Definition:
Array ke elements ko order ke basis pe variables me assign karna.

🔹 Use Cases:
Jab fixed length ka array ho

Jab tumhe index-wise values chahiye ho (jaise coordinates, colors, names)

🔹 Syntax Style:
js
Copy
Edit
const [a, b, c] = array;
2️⃣ Object Destructuring
🔹 Definition:
Object ke properties ko unke name ke basis pe variables me tod lena.

🔹 Use Cases:
Jab object se specific properties chahiye

Jab function me object pass hota hai aur tumhe keys chahiye

API response handle karte waqt

🔹 Syntax Style:
js
Copy
Edit
const {name, age} = obj;
3️⃣ Nested Destructuring
🔹 Definition:
Jab object ya array ke andar bhi object ya array ho, tab unke andar ke values bhi destructure karna.

🔹 Use Cases:
Jab deeply nested object se kuchh specific data chahiye ho

JSON ya APIs se data access karte waqt

4️⃣ Function Parameter Destructuring
🔹 Definition:
Function ke argument me hi destructure kar dena (na ki andar likhkar).

🔹 Use Cases:
Clean aur readable function likhna

Jab tumhe sirf kuch specific keys chahiye ho

🔹 Syntax Style:
js
Copy
Edit
function greet({name, age}) {
  // use name and age directly
}
5️⃣ Default Values in Destructuring
🔹 Definition:
Agar value na mile to koi default value assign kar dena

🔹 Use Cases:
Jab kabhi value undefined ho sakti hai

Jab API response me kuch key missing ho sakti hai

6️⃣ Renaming Variables While Destructuring
🔹 Definition:
Property ka naam kuch aur ho aur tum apna variable naam kuch aur rakhna chaho

🔹 Use Cases:
Jab tumhari variable naming convention different ho

Jab tum same property name do jagah pe use kar rahe ho

7️⃣ Destructuring in Loops
🔹 Definition:
for...of ya forEach loop me array ya object ke andar destructuring karna

🔹 Use Cases:
Array of objects ke upar loop chala rahe ho

Complex data me values directly nikalni ho

8️⃣ Rest Operator with Destructuring
🔹 Definition:
Bachhi hui (remaining) values ko ek hi variable me pack kar lena (...rest)

🔹 Use Cases:
Jab tum sirf kuchh hi values chahte ho aur baaki ignore

Jab tum dynamic ya unknown keys handle kar rahe ho

9️⃣ Mixed Destructuring (Array + Object)
🔹 Definition:
Jab array ke andar object ho ya object ke andar array ho, aur dono ko todna ho

🔹 Use Cases:
Nested complex data structure

Real-world APIs ke data process karte waqt

🧪 Bonus Use Cases (Kaha Kaha Use Karte Hain?)
Place	Destructuring Use
✅ React	Props, useState, useEffect
✅ Node.js	require se import karte waqt
✅ API Response	fetch().then(res => res.json())
✅ Redux	state, actions extract karte waqt
✅ Form Handling	Input fields ke values extract karte waqt
✅ Array of Objects	List ke items ke data nikalne me
✅ Loops	for...of, map, etc. me objects destructure

💡 Tips to Never Forget
Array = order matters (index based)

Object = keys matter (name based)

Default values = Missing data safe banata hai

Nested destructuring = Deep data access

Rest operator = Extra values collect karne ke liye

Function params destructuring = Cleaner functions

Always match names in object destructuring