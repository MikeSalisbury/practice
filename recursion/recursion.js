// 1) Write a function sum_to(n) that uses recursion to calculate the sum from 1 to n (inclusive of n).
function sum_to(n) {
  if (n === 1) return n;
  return n + sum_to(n-1);
}

console.log(sum_to(5) === 15);
