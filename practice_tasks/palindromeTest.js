// cd practice_tasks
// node palindrome.js

function isPalindrome(word, reverseFunction) {
  if (word === reverseFunction(word)) {
    console.log("Is Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}

isPalindrome("wow", (wordInput) => {
  let reversedWord = "";
  for (i = wordInput.length - 1; i >= 0; i--) {
    reversedWord += wordInput[i];
  }
  return reversedWord;
});
