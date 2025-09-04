let arr = [1, 2, 3, 4, 8, 10, 11, 15, 17, 25];

const search = (num) => {
  let start = 0;
  let end = arr.length - 1;

  // while loop
  while (start <= end) {
    // find the mid index
    let mid = Math.floor((start + end) / 2);

    // if element is present at mid, return true
    if (num === arr[mid]) {
      return mid; // Return the index of the found number
      // else look in right or left half accordingly
    } else if (num > arr[mid]) {
      // else set the start of the search interval to one number higher than the mid
      start = mid + 1;
    } else {
      // else set the end of the search interval to one number lower than the mid
      end = mid - 1;
    }
  }
  // if not found, return false;
  return -1;
};

console.log(search(8)); // Output: 4
console.log(search(6)); // Output: -1
