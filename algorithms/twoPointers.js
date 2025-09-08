// two pointers

// Example 1
// start the pointers at the first and last indices and move them towards each other

// check if palindrome

function checkIfPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(checkIfPalindrome("wow"));

// Example 2
// create two pointers, one for each iterable (array)

// Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted

arr1 = [1, 4, 7, 20];
arr2 = [3, 5, 6];

function combine(arr1, arr2) {
  // build answer one element at a time
  let ans = [];
  // initialize two pointers
  let pointer1 = 0;
  let pointer2 = 0;

  // while loop that runs until one of the pointers reaches the end of their respective array
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    // if the element in array 1 is less than the element in array 2,
    if (arr1[pointer1] < arr2[pointer2]) {
      // then we'll add it to the answer
      ans.push(arr1[pointer1]);
      // and move forward in the array
      pointer1++;
    } else {
      // else we'll add the element from array 2, and move forward in that array
      ans.push(arr2[pointer2]);
      pointer2++;
    }
  }

  // when this is not true anymore, find out why (which one is longer!), and append the remaining elements to the answer

  // after this while loop, one of these arrays will be "exhausted"
  // since the arrays are sorted, we just have to add the remaining elements from the other array
  // to make sure we exhaust both lists

  while (pointer1 < arr1.length) {
    // while the pointer is less than the length of the array
    // push the element that pointer is pointing to, to the answer
    ans.push(arr1[pointer1]);
    // and increment the pointer
    pointer1++;
  }

  // same for the second array

  while (pointer2 < arr2.length) {
    ans.push(arr2[pointer2]);
    pointer2++;
  }

  return ans;
}

console.log(combine(arr1, arr2));
