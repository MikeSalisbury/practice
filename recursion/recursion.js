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
  return nums_array[0] + add_numbers(nums_array[1..nums_array.length]);
}

function add_numbers(nums_array) {
  if (nums_array.length < 1) return 0;
  return nums_array[0] + add_numbers(nums_array.slice(1, nums_array.length));
}

console.log(add_numbers([6, 3, 5, 8, 9]) === 31);
