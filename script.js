// Getting all out elements
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
const body = document.body;
const modalEl = document.querySelector("#modal");

// Triggers (addEventListeners)
buttonEl.addEventListener("click", () => {
  navigator.clipboard.writeText(displayEl.innerText);
});

buttonEl.addEventListener("click", () => {
  modalEl.style.display = "flex";
});

modalEl.addEventListener("mouseover", () => {
  modalEl.style.display = "none";
});
//Top Left
input1El.addEventListener("input", () => {
  // topLeftEl.textContent = e.target.value

  let topLeft;
  topLeft = `${parseInt(input1El.value)}px`;
  console.log(topLeft);
  innerEl.style.borderTopLeftRadius = topLeft;
  topLeftEl.textContent = topLeft;
});

input2El.addEventListener("input", () => {
  // topRightEl.innerText = e.target.value

  let topRight;
  topRight = `${parseInt(input2El.value)}px`;
  innerEl.style.borderTopRightRadius = topRight;
  topRightEl.textContent = topRight;
});

input3El.addEventListener("input", () => {
  // bottomRightEl.innerText = e.target.value
  let bottomRight;
  bottomRight = `${parseInt(input3El.value)}px`;
  innerEl.style.borderBottomRightRadius = bottomRight;
  bottomRightEl.textContent = bottomRight;
});

input4El.addEventListener("input", () => {
  // bottomLeftEl.innerText = e.target.value
  let bottomLeft;
  bottomLeft = `${parseInt(input4El.value)}px`;
  console.log(bottomLeft);
  innerEl.style.borderBottomLeftRadius = bottomLeft;
  bottomLeftEl.textContent = bottomLeft;
});

// displayEl.textContent = `border-radius: ${topLeftEl} ${topRightEl}px ${bottomRightEl}px ${bottomLeftEl}px;`

// We need to create a modal

// A modal is a dialog box/popup window that is displayed on top of the current page:
