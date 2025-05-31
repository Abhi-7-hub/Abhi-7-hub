Definition:
Callback function wo hoti hai jo dusre function ko argument (parameter) ke roop mein di jati hai, aur phir wo dusra function jab chahe us callback ko call kar leta hai (execute karta hai).

Purpose:

Callback functions ka use asynchronous programming me hota hai, matlab jab kuch time leta hai (jaise file read karna, server se data lana), toh hum callback dete hain taaki jab kaam ho jaye tab woh function chale.

Isse code non-blocking aur efficient banta hai.

How it works:

Ek function ko call karte waqt usme doosra function pass kar dete hain.
Jab pehla function apna kaam karta hai, tab woh passed function (callback) ko execute karta hai.

Example situation:

Suppose tum order karte ho khana.

Tum order karte waqt kehte ho, "Jab khana ready ho jaaye, mujhe call kar dena."

Yeh "call kar dena" wala function hi tumhara callback hai.

Key point:

Callback function tabhi run hota hai jab doosra function use explicitly call kare.

Agar doosra function callback ko nahi call karega, toh callback function execute nahi hoga.

🧠 Summary:
Callback function ek aisa function hota hai jo doosre function ko argument ke roop mein diya jata hai, aur jab woh doosra function chahe, tab us callback function ko chala leta hai. Isse asynchronous ya event-driven programming possible hoti hai.