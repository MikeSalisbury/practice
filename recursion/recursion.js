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

// 6) receives a start and end value, returns an array
// from start up to end

function range(starting, ending) {
  if (starting === ending) return [starting];
  let result = range(starting, ending-1);
  result.push(ending);
  return result;
}

// 7) receives an array of numbers and recursively sums them
function sumRec(arr) {
  if (arr.length <= 1) return arr[0];
  let sum = 0;
  sum += arr[0] + sumRec(arr.slice(1));
  return sum;
}

// 8) receives a base and exponent, returns the base raise
// to the power of the exponent (base ^ exp)
//
// write two versions:
// # this is math, not Ruby methods.
//
// # version 1
// exp(b, 0) = 1
// exp(b, n) = b * exp(b, n - 1)
//
// # recursion 2
// exp(b, 0) = 1
// exp(b, 1) = b
// exp(b, n) = exp(b, n / 2) ** 2             [for even n]
// exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]

function exp(b, n) {
  if (n === 0) return 1;
  return b * exp(b, n - 1);
}

function otherExp(b, n) {
  if (n === 0) return 1;
  if (n === 1) return b;
  if (n % 2 === 0) {
    return Math.pow(exp(b, n/2), 2);
  } else {
    return b * Math.pow(exp(b, (n-1) / 2), 2);
  }
}


// 9) receives an integer, n, and returns the first n Fibonacci numbers
function fibonacci(n) {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  let arr = fibonacci(n-1);
  arr.push(arr[arr.length -2] + arr[arr.length -1]);
  return arr;
}

// 10) deep dup of an Array!
// Aside: type-checking in javascript
// Type checking in JS can get a very strange at times and it is best
// practice to avoid it if at all possible. Check out the Typeof operator
// section of this article. For this problem though, we will need to do it.
// Use the getType method from the True Object types section in that same
// article to see a clever way to type-check. This method may not make a
// whole lot of sense now, but it will in a few days.
function deepDup(arr) {

    if (!(arr instanceof Array)) {
      return arr;
    }

    return arr.map((el) => {
      return deepDup(el);
    });
}

const array = [[2],3];
const dupedArray = deepDup(array);
console.log(`deepDup original = ${JSON.stringify(array)}`);

dupedArray[0].push(4);

console.log(`deepDup original = ${JSON.stringify(array)} (should not be mutated)`);
console.log(`deepDup duped = ${JSON.stringify(dupedArray)} (should be mutated)`);

// 11) receives a sorted array, returns the index of the target or -1 if not found
function bsearch(arr, target) {
  if (arr.length < 1) return -1;
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) {
    let search = bsearch(arr.slice(mid+1, arr.length), target);
    return (search === -1 ? -1 : mid + 1 + search);
  } else {
    return bsearch(arr.slice(0, mid), target);
  }

}

// 12) receives an array, returns a sorted copy of the array by
// implementing merge sort sorting algorithm

function mergesort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, mid));
  let right = mergesort(arr.slice(mid));

  return mergesortHelper(left, right);
}

function mergesortHelper(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }



  return result.concat(left, right);

}

// 13) receives an array, returns an array containing all
// the subsets of the original array
// [[]]
// [[],[1]]
// [[], [1], [2], [1, 2]]
function subsets(arr) {
  if (arr.length < 1) return [[]];
  let first = arr[0];
  let afterFirst = subsets(arr.slice(1));

  const result = afterFirst.map(sub => [first].concat(sub));
  return afterFirst.concat(result);
}

function permutations(arr) {
  if (arr.length <= 1) return arr;
  let first = arr.shift();
  let perms = permutations(arr);
  let result = [];

  for(let i = 0; i < perms.length; i++) {
    for(let j = 0; j < perms[i].length; j++) {
      result.push(perms[i].slice(0, j).concat(first, perms[i].slice(j)));
    }
  }

  return result;

}
