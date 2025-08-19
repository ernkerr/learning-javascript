// reverse a string

// cd practice_tasks
// node reverseString.js

let aString = "You're a wizard now Harry";

let reversedString = "";

for (i = aString.length - 1; i >= 0; i--) {
  reversedString += aString[i];
}

console.log(reversedString);
