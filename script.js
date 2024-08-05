"use strict";

/*
// just messing around with query selectors...

document.querySelector(".message").textContent = "🎉 Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number Entered...";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (score > 1 && guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too High!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (score > 1 && guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
  } else if (score === 0) {
    document.querySelector(".message").textContent = "💥 You Lost The Game!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = null;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
});
