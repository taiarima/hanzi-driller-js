`use strict`;

// Selecting Elements
const logo = document.querySelector(".logo");
const title = document.querySelector(".title");
const chooseListLink = document.querySelector(".choose-list-link");
const settingsLink = document.querySelector(".settings-link");
const aboutLink = document.querySelector(".about-link");
const helpLink = document.querySelector(".help-link");
const appContainer = document.querySelector(".app-container");
const hanziPrompt = document.querySelector(".hanzi-prompt");
const answerText = document.querySelector(".answer-text");
const checkAnsBtn = document.querySelector(".check-ans-btn");
const undoBtn = document.querySelector(".undo-btn");
const submitListBtn = document.querySelector(".submit-list-btn");
const listLowerRange = document.querySelector(".lower-range");
const listUpperRange = document.querySelector(".upper-range");
const listUserName = document.getElementById(".list-name");

// Plan
// 1. Have users choose whether they want simplified or traditional
// 2. Have users choose the range of Hanzi they want, e.g. 1-1000, also if they want to be tested on pronunciation, meaning, or both
// 3. Make them the stack of objects
// --> last seen, date correct, score, total views need to be added, rest can be parsed from JSON
// 4. Settings
// --> Same as HanziDriller in Swing
// 5. Build behavior for reviewing

// Experimenting with answer checking
const hanziReading = "han4";

checkAnsBtn.addEventListener("click", checkAnswer);
answerText.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
    console.log("Button works");
  }
});

function checkAnswer() {
  console.log("button work");
  const userAnswer = answerText.value;
  if (userAnswer === hanziReading) {
    // Correct answer
    hanziPrompt.classList.add("correct-answer");
    checkAnsBtn.innerText = "Next";
  } else {
    // Incorrect answer
    hanziPrompt.classList.add("incorrect-answer");
  }
}

const nextBtn = document.querySelector(".button-container button:last-of-type");
nextBtn.addEventListener("click", function () {
  // empty function for now
});

// Coding Modal window
// Get the modal
const modalWindow = document.getElementById("modal-window");

// Get the <span> element that closes the modal
const closeModalBtn = document.querySelector(".close-modal-btn");

// When the user clicks the link, open the modal
chooseListLink.onclick = function () {
  modalWindow.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModalBtn.onclick = function () {
  modalWindow.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
};

submitListBtn.onclick = function () {
  // take values
};
