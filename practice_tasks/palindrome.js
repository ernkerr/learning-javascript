// cd practice_tasks
// node palindrome.js

// A simple palindrome checker
// autocomplete suggestions - check back to on eventually ?
// copilots!!

function isPalindrome(word, reverseFunction) {
  if (word == reverseFunction(word)) {
    console.log("Is Palidrome");
  } else {
    console.log("Not a Palidrome");
  }
}

isPalindrome("wow", (string) => {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
});
