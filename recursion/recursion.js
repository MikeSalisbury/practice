// 1) Write a function sum_to(n) that uses recursion to calculate the
// sum from 1 to n (inclusive of n).
function sumTo(n) {
  if (n < 1) return null;
  if (n === 1) return n;
  return n + sumTo(n-1);
}

console.log(sumTo(5) === 15);
console.log(sumTo(1) === 1);
console.log(sumTo(9) === 45);
console.log(sumTo(-8) === null);

// 2) Write a function add_numbers(nums_array) that takes in an array
// of Fixnums and returns the sum of those numbers. Write this method recursively.

function addNumbers(nums_array) {
  if (nums_array.length < 1) return 0;
  return nums_array[0] + addNumbers(nums_array.slice(1, nums_array.length));
}

console.log(addNumbers([1,2,3,4]) === 10);
console.log(addNumbers([3]) === 3);
console.log(addNumbers([-80,34,7]) === -39);
console.log(addNumbers([]) === null);

// 3) Let's write a method that will solve Gamma Function recursively.
// The Gamma Function is defined Γ(n) = (n-1)!.
function gammaFnc(n) {
  if (n < 1) return null;
  if (n === 1) return 1;
  let result = n-1;
  return result * gammaFnc(result);
}

console.log(gammaFnc(1) === 1);
console.log(gammaFnc(4) === 6);
console.log(gammaFnc(8) === 5040);

// 4) Write a function ice_cream_shop(flavors, favorite) that takes
// in an array of ice cream flavors available at the ice cream shop, as
// well as the user's favorite ice cream flavor. Recursively find out
// whether or not the shop offers their favorite flavor.
function iceCreamShop(flavors, favorite) {
  if (flavors.length < 1) return false;
  if (flavors[0] === favorite) return true;
  return iceCreamShop(flavors.slice(1, flavors.length), favorite);
}

console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon') === false);
console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea') === true);
console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio') === false);
console.log(iceCreamShop(['moose tracks'], 'moose tracks') === true);
console.log(iceCreamShop([], 'honey lavender') === false);

// 5) Write a function reverse(string) that takes in a string and
// returns it reversed.
function reverse(string) {
  if (string.length <= 1) return string;
  return string[string.length-1] + reverse(string.slice(0, string.length-1));
}

console.log(reverse("house") === "esuoh");
console.log(reverse("dog") === "god");
console.log(reverse("atom") === "mota");
console.log(reverse("q") === "q");
console.log(reverse("id") === "di");
console.log(reverse("") === "");
