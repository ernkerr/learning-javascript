const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "eleven", "twelve"];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

// so what's going on?
// we have an array called numbers and we want to get all of the even numbers
// we'll use filter to check if each item in the array to see if it's an even number

// Filter is not going to change the original array !

// as opposed to using a for loop

// let evenNumbers = [];
// for (const num of numbers) {
//   if (num % 2 === 0) {
//     evenNumbers.push(num);
//   }
// }
