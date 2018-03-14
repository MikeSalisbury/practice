// 1) Write a function sum_to(n) that uses recursion to calculate the
// sum from 1 to n (inclusive of n).
function sum_to(n) {
  if (n === 1) return n;
  return n + sum_to(n-1);
}

console.log(sum_to(5) === 15);

// 2) Write a function add_numbers(nums_array) that takes in an array
// of Fixnums and returns the sum of those numbers. Write this method recursively.

function add_numbers(nums_array) {
  if (nums_array.length < 1) return 0;
  return nums_array[0] + add_numbers(nums_array.slice(1, nums_array.length));
}

console.log(add_numbers([6, 3, 5, 8, 9]) === 31);

// 3) Let's write a method that will solve Gamma Function recursively.
// The Gamma Function is defined Γ(n) = (n-1)!.
function gamma_fnc(n) {
  if (n < 1) return null;
  if (n === 1) return 1;
  let result = n-1;
  return result * gamma_fnc(result);
}

console.log(gamma_fnc(1) === 1);
console.log(gamma_fnc(4) === 6);
console.log(gamma_fnc(8) === 5040);
