function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();
increment(); // 1
increment(); // 2

// Closures are often used to create private variables:
