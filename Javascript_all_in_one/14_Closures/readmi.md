Q:How to Explain Closures in an Interview:
Ans:A closure is a function that remembers variables from its outer scope, even after the outer function has finished executing.

In JavaScript, closures are created when a function is defined inside another function and accesses variables from the outer function.
This inner function retains access to those outer variables even if the outer function has returned.

Closures are useful for => data privacy, creating stateful functions, and callback functions.


🔍 Closure internally kaise kaam karta hai — step by step:
1. Jab function banta hai, to uske saath uska "scope" (jo variables uske aas-paas hain) bhi record ho jata hai
Matlab JavaScript engine function ko yaad rakhta hai na sirf function code, balki uske aas-paas ke variables ko bhi.

Yeh yaad rakhna hota hai "lexical environment" ke through.

2. Jab outer function chal raha hota hai, to uske variables memory me hote hain
Jaise count = 0 jo variable hai, woh outer function ke scope me hota hai.

3. Jab outer function khatam hota hai, normally uske variables delete ho jate hain
Matlab wo variables memory se hat jate hain, kyunki function chalna band kar deta hai.

4. Lekin agar inner function outer ke variables ko use karta hai, to wo variables memory me zinda rahte hain
Inner function ke paas reference hota hai outer function ke variables ka.

Toh JavaScript memory me us variable ko hata nahi pata kyunki inner function uska use kar sakta hai.

5. Isliye closure ban jata hai — ek special object jisme function + uska "scope chain" hota hai
Ye "scope chain" kehte hain un sab variables ko jo function ke aas-paas available hote hain.

Aur yeh scope chain function ke sath judi rehti hai jab tak function use ho raha ho.

🧠 Example ke saath samjho:

function bahar() {
  let secret = 100;

  function andar() {
    console.log(secret);
  }

  return andar;
}

const meraClosure = bahar();
meraClosure();  // 100
Jab bahar() chal raha tha, secret variable memory me tha.

andar() function ban gaya aur usne secret ko reference kiya.

Jab bahar() khatam hua, toh secret normally delete hona chahiye tha, par closure ke karan secret zinda raha.

meraClosure ab bhi secret ko access kar sakta hai.

📌 Summary internally:
Function create hota hai + lexical environment store hota hai (variables ke sath)

Inner function reference rakhta hai outer variables ka

Outer function finish hone ke baad bhi variables memory me zinda rehte hain

Closure ek combo hai: function + uski yaad (scope chain)