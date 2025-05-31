let nums = [1, 2, 3];

// let squared = nums.map(n => n * n) aese bhi likh skte hai niche wale ko;
let squared = nums.map(function(n) {
  return n * n;
});

console.log(squared)
