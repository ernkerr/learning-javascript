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

// 8/19/2025
// function isPalindrome(originalString, reverser) {
//   if (originalString === reverser(originalString)) {
//     console.log("Is Palindrome");
//   } else {
//     console.log("Is Not Palindrome");
//   }
//   // then check if reversed string is equal to original string
//   // return true or false or console log answer (clarify)
// }

// // reverse the string
// isPalindrome("wow", (aString) => {
//   let reversedString = "";
//   for (let i = aString.length - 1; i >= 0; i--) {
//     reversedString += aString[i];
//     console.log("Adding", aString[i]);
//   }
//   return reversedString;
// });
