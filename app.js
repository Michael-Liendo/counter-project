let counterDiv = document.querySelector("#counter");
let counter = 0;
let btDecrease = document.querySelector("#btDecrease");
let btIncrease = document.querySelector("#btIncrease");

// Add event listeners
btDecrease.addEventListener("click", decrease);
btIncrease.addEventListener("click", increase);

// Functions
function decrease() {
  counter--;
  counterDiv.innerHTML = counter;
}

function increase() {
  counter++;
  counterDiv.innerHTML = counter;
}

counterDiv.innerHTML = counter;
