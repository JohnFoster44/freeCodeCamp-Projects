const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const bang = document.querySelectorAll(".bang");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
    className.classList.remove("bang");
  });

  let randomPosition = square[Math.floor(Math.random() * 9)];

  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;

      id.classList.add("bang");
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    clearInterval(timerId);
    alert("game over - ur score was " + result);
  }
}

let timerId = setInterval(countDown, 1000);
