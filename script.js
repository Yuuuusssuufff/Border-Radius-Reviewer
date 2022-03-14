// Getting all out elements
const innerEl = document.querySelector(".inner")
const input1El = document.querySelector("#value1")
const input2El = document.querySelector("#value2")
const input3El = document.querySelector("#value3")
const input4El = document.querySelector("#value4")
const displayEl = document.getElementById("display")
const buttonEl = document.querySelector("#button")


// Triggers (addEventListeners)
buttonEl.addEventListener("click", () => alert("You're Welcome to JS"))

//Top Left
input1El.addEventListener("input", () => {
    let topLeft
    topLeft = `${(parseInt(input1El.value))}px`
    innerEl.style.borderTopLeftRadius = topLeft
    })

input2El.addEventListener("input", () => {
let topRight
topRight = `${(parseInt(input2El.value))}px`
innerEl.style.borderTopRightRadius = topRight
    })
    
input3El.addEventListener("input", () => {
let bottomRight
bottomRight = `${(parseInt(input3El.value))}px`
innerEl.style.borderBottomRightRadius = bottomRight
})

input4El.addEventListener("input", () => {
    let bottomLeft
    bottomLeft = `${(parseInt(input4El.value))}px`
    innerEl.style.borderBottomLeftRadius = bottomLeft
    })











