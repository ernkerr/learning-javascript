// cd practice_tasks
// node findLargest.js

const arr = [10, 324, 45, 90, 9808];

function largest(arr) {
  return Math.max(...arr);
}

console.log(largest(arr));

// Follow up Questions
// is there another way you could solve it?

// Iterative approach: loop through the whole array

function largestInArray(arr) {
  let largest = arr[0];
  // Traverse from second and compare
  // every element with current largest
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// console.log(largestInArray(arr));

// bonus: is there a third way you could solve it?

// Recursive Approach: you can traverse the array recurively instead of iteratively
