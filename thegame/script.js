let computerNumber;
let computerChoice;
let userChoice;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const buttons = document.querySelectorAll("div button");

// This is where the game starts
// Firstly we add the class hidden to the text so it dissappers when you click the either of the buttons to play again.
// Secondly we remove the classes for either rock, paper or scissors on each button.
// Add an eventlistener to the different buttons and defines the user choice as either rock, paper or scissors and then runs the userChooses function.
rock.addEventListener("click", function () {
  userChoice = "rock";
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", userChooses);
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", randomNumber);
});
paper.addEventListener("click", function () {
  userChoice = "paper";
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", userChooses);
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", randomNumber);
});
scissors.addEventListener("click", function () {
  userChoice = "scissors";
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#player1").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player2").classList.remove("paper", "scissors", "rock");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player1").addEventListener("animationend", userChooses);
  document.querySelector("#player2").classList.add("shake");
  document.querySelector("#player2").addEventListener("animationend", randomNumber);
});

// Loads the DOM and runs the start function which generates a random number
window.addEventListener("load", function () {
  start();
});

// Shows that the site is loaded and generates a random number
function start() {
  console.log("start");
}

// Generates a random number and show it in the console.log
function randomNumber() {
  computerNumber = Math.floor(Math.random() * 3) + 1;
  console.log(computerNumber);
  computerChooses();
}

// When the function is run it converts userChoice to a number either 1, 2 or 3. This makes sense when the compare function is run in the computerChooses function.
function userChooses() {
  if (userChoice == "rock") {
    userNumber = "1";
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice == "paper") {
    userNumber = "2";
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("paper");
  } else if (userChoice == "scissors") {
    userNumber = "3";
    document.querySelector("#player1").classList.remove("shake");
    document.querySelector("#player1").classList.add("scissors");
  }
  console.log("user", userChoice);
}

// The computer chooses a random number and that number is associated to either rock, paper or scissors which is logged in the console.log
function computerChooses() {
  if (computerNumber == 1) {
    computerChoice = "rock";
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("rock");
  } else if (computerNumber == 2) {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("paper");
    computerChoice = "paper";
  } else {
    document.querySelector("#player2").classList.remove("shake");
    document.querySelector("#player2").classList.add("scissors");
    computerChoice = "scissors";
  }
  console.log("computer", computerChoice);
  compare();
}

// This compares the two choices and decides who is the winner.
// The "hidden" class is removed so the correct text shows.
function compare() {
  if ((userChoice == "rock") & (computerChoice == "scissors")) {
    console.log("You win!");
    document.querySelector("#win").classList.remove("hidden");
  }
  if ((userChoice == "paper") & (computerChoice == "rock")) {
    console.log("You win!");
    document.querySelector("#win").classList.remove("hidden");
  }
  if ((userChoice == "scissors") & (computerChoice == "paper")) {
    console.log("You win!");
    document.querySelector("#win").classList.remove("hidden");
  }
  if ((computerChoice == "rock") & (userChoice == "scissors")) {
    console.log("You Loose!");
    document.querySelector("#lose").classList.remove("hidden");
  }
  if ((computerChoice == "paper") & (userChoice == "rock")) {
    console.log("You loose!");
    document.querySelector("#lose").classList.remove("hidden");
  }
  if ((computerChoice == "scissors") & (userChoice == "paper")) {
    console.log("You loose!");
    document.querySelector("#lose").classList.remove("hidden");
  } else if (userChoice == computerChoice) {
    console.log("Draw!");
    document.querySelector("#draw").classList.remove("hidden");
  }
}
