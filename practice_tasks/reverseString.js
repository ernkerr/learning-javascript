// reverse a string

// cd practice_tasks
// node reverseString.js

let aString = "You're a wizard now Harry";

let reversedString = "";

for (i = aString.length - 1; i >= 0; i--) {
  reversedString += aString[i];
}

console.log(reversedString);

//
// Follow up questions
//

// 1. Can you think of a different way to do it?

// 2. How would you reverse an array?

const array = ["one", "two", "three"];
console.log("array:", array); // Expected output: "array:" Array ["one", "two", "three"]

const reversed = array.reverse();
console.log("reversed:", reversed); // Expected output: "reversed:" Array ["three", "two", "one"]

// 3. Why can you not use this method for a string? (bonus/hint: why might you have to be careful with this method?)

// reverse can only be used on arrays because it mutates or changes the original array
// arrays are mutable (changable)
// while strings are immutable (unchangeable)

// bonus: is there a way to reverse the elements in an array without mutating the original array?
const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
