"use strict";

/*
// just messing around with query selectors...

document.querySelector(".message").textContent = "🎉 Correct Number";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔️ No Number Entered...";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "📈 Too High!";
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "📉 Too Low!";
  }
});
