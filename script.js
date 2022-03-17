// Getting all out elements/variables
const innerEl = document.querySelector(".inner");
const input1El = document.querySelector("#value1");
const input2El = document.querySelector("#value2");
const input3El = document.querySelector("#value3");
const input4El = document.querySelector("#value4");
const displayEl = document.getElementById("display");
const buttonEl = document.querySelector("#button");
const topLeftEl = document.querySelector("#prop1");
const topRightEl = document.querySelector("#prop2");
const bottomRightEl = document.querySelector("#prop3");
const bottomLeftEl = document.querySelector("#prop4");
const modalEl = document.querySelector("#modal");

// Triggers (addEventListeners)
buttonEl.addEventListener("click", () => {
  navigator.clipboard.writeText(displayEl.innerText);
});

buttonEl.addEventListener("click", () => {
  modalEl.style.display = "flex";
  modalEl.style.background = "red";
  modalEl.style.cursor = "pointer"
});

modalEl.addEventListener("mouseout", () => {
  modalEl.style.display = "none";
});
//Top Left
input1El.addEventListener("input", () => {
  let topLeft;
  topLeft = `${input1El.value}px`;
  innerEl.style.borderTopLeftRadius = topLeft;
  topLeftEl.textContent = topLeft;
});

input2El.addEventListener("input", () => {
  let topRight;
  topRight = `${input2El.value}px`;
  innerEl.style.borderTopRightRadius = topRight;
  topRightEl.textContent = topRight;
});

input3El.addEventListener("input", () => {
  let bottomRight;
  bottomRight = `${input3El.value}px`;
  innerEl.style.borderBottomRightRadius = bottomRight;
  bottomRightEl.textContent = bottomRight;
});

input4El.addEventListener("input", () => {
  let bottomLeft;
  bottomLeft = `${input4El.value}px`;
  innerEl.style.borderBottomLeftRadius = bottomLeft;
  bottomLeftEl.textContent = bottomLeft;
});
