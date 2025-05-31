// let sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);  // 6
let sum = [1, 2, 3].reduce(function(acc, curr) {
  return acc + curr;
}, 0);
console.log(sum);  // Output: 6
