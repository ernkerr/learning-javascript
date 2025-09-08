// Given a string "wow", return true if it is a palindrome, false otherwise.

// explain the algorithm and the steps you're going to use to solve it in comments
// then code it out!

// two pointers

// first we're going to define a function called checkIfPalindrome, that takes an argument of a string
// then we're going to initialize two pointers, start at the first index, end at the last index
// then we're going to write a while loop that runs until the pointers meet each other
// at each iteration, we're checking a pair of characters
// if the check if sucessful (if the start and end are equal), we'll iterate the start and decrement the right and move onto the next pair
// if the check is unsucessful (if the start and end are not equal), we return false.
// once the while loop ends, then return true since all of the pairs are equal!

function checkIfPalindrome(string) {
  // initialize two pointers, start at the first index, end at the last index
  let start = 0;
  let end = string.length - 1;

  // runs until the pointers meet each other
  while (start < end) {
    // check each pair of characters
    if (string[start] != string[end]) {
      // if they are not equal, it's not a palindrome, return false
      return false;
    }
    // otherwise, move the pointers towords each other
    // (if they are equal, move onto the next pair)
    start++;
    end--;
  }
  // when the pointers meet each other, then that value is equal to itself
  // since all of the paurs have equalled each other up to this point, return true!
  return true;
}
console.log(checkPalindrome("wow"));

//
//
//
// alternative solution
//
//
//

function checkPalindrome(string) {
  let reversedString = string.split("").reverse().join("");
  if (string === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(checkPalindrome("wow"));

//
//
//
// alternative solution
//
//
//

// recursion

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("wow"));
