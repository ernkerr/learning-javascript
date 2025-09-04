// basically a for loop
let arr = [1, 2, 3, 4, 15, 8, 10, 4, 25, 11, 17, 8];

function linearSearch(num, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    } else {
      return -1;
    }
  }
}

// function call

function searchArray(target) {
  let result = linearSearch(target);
  if (result === -1) {
    console.log("Element not present");
  } else {
    console.log("Element is present at index: " + result);
  }
}

searchArray(50);
