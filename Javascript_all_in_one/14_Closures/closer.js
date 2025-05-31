function outer() {
  let secret = "I am hidden";

  return function inner() {
    console.log(secret);
  };
}

const reveal = outer();  // 'outer' is called and returns 'inner'
reveal();  // Output: I am hidden
