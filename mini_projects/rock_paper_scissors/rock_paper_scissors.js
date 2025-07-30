// Rock Paper Scissors
// run this command in your terminal: open rock_paper_scissors.html

let userChoice;
let computerChoice;
const emojiChoices = ["✊", "🤚", "✌️"];

// let the user pick an emoji

// add event listeners to the buttons
// assign the user's choice to a variable
// call the computersTurn function
document.getElementById("rock").addEventListener("click", () => {
  userChoice = emojiChoices[0];
  computersTurn();
});

document.getElementById("paper").addEventListener("click", () => {
  userChoice = emojiChoices[1];
  computersTurn();
});

document.getElementById("scissors").addEventListener("click", () => {
  userChoice = emojiChoices[2];
  computersTurn();
});

// let the computer pick an emoji
function computersTurn() {
  computerChoice =
    emojiChoices[Math.floor(Math.random() * emojiChoices.length)];

  console.log(computerChoice);

  // display the computer's choice
  document.getElementById("computer-choice").textContent = computerChoice;

  // call the determineWinner function
  determineWinner();
}

function determineWinner() {
  const resultMessage = document.getElementById("results");
  console.log("computer's choice: ", computerChoice);
  console.log("user's choice", userChoice);
  // compare them to see who wins
  if (userChoice === computerChoice) {
    resultMessage.textContent = "Draw";
  } else if (
    (userChoice === "✊" && computerChoice === "🤚") ||
    (userChoice === "🤚" && computerChoice === "✌️") ||
    (userChoice === "✌️" && computerChoice === "✊")
  ) {
    resultMessage.textContent = "You loose";
  } else {
    resultMessage.textContent = "You Win!";
  }
}

// for something without a browser,
// you could run it directly in the terminal using Node.js
// node rock_paper_scissors.js
