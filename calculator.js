// mini in terminal calculator

const prompt = require("prompt-sync")();

const num1 = Number(prompt("Enter the first number: "));
const operator = prompt("Enter the operator: ");
const num2 = Number(prompt("Enter the second number: "));

switch (operator) {
  case "+":
    solution = num1 + num2;
    break;
  case "=":
    solution = num1 - num2;
    break;
  case "*":
  case x:
    solution = num1 * num2;
    break;
  case "/":
    solution = num1 / num2;
    break;
  default:
    console.log("Invalid operator!");
}

console.log("The answer is: ", solution);
