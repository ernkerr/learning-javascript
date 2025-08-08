// node test.js

// A "cake factory" that can create specialized topping functions
function createToppingMachine(toppingName) {
  console.log(`Setting up the machine to add ${toppingName}...`);
  return function (cake) {
    // This is the function that gets returned!
    console.log(`Adding ${toppingName} to the ${cake}.`);
    return `${toppingName} ${cake}`;
  };
}

// Create specialized topping functions (our "specialized tools")
const addChocolateShavings = createToppingMachine("chocolate shavings");
const addStrawberries = createToppingMachine("strawberries");

// Now we can use these specialized topping functions whenever we need them
const baseCake = "Plain Vanilla Cake";

const chocolateShavingCake = addChocolateShavings(baseCake);
console.log(`\nBaked a: ${chocolateShavingCake}`);

const chocolateShavingCake2 = addChocolateShavings(baseCake);
console.log(`\nBaked a: ${chocolateShavingCake}`);

const chocolateShavingCake3 = addChocolateShavings(baseCake);
console.log(`\nBaked a: ${chocolateShavingCake}`);

// const strawberryCake = addStrawberries(baseCake);
// console.log(`Baked a: ${strawberryCake}`);

// // We could even combine them!
// const fancyCake = addStrawberries(addChocolateShavings(baseCake));
// console.log(`Baked a: ${fancyCake}`);
