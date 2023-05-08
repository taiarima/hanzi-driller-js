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
const introText = document.querySelector(".intro-text");

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

// Coding Modal windows
// Get the modal
const modalChooseList = document.querySelector(".modal-choose-list");
const modalSettings = document.querySelector(".modal-settings");
const modalAbout = document.querySelector(".modal-about");
const modalHelp = document.querySelector(".modal-help");

// Get the <span> element that closes the modal
const closeListModal = document.querySelector(".close-list-modal");
const closeSettingsModal = document.querySelector(".close-settings-btn");
const closeAboutModal = document.querySelector(".close-about-btn");
const closeHelpModal = document.querySelector(".close-help-btn");

// When the user clicks the link, open the modal
chooseListLink.onclick = function () {
  modalChooseList.style.display = "block";
};

settingsLink.onclick = function () {
  modalSettings.style.display = "block";
};

aboutLink.onclick = function () {
  modalAbout.style.display = "block";
};

helpLink.onclick = function () {
  modalHelp.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeListModal.onclick = function () {
  modalChooseList.style.display = "none";
};

closeSettingsModal.onclick = function () {
  modalSettings.style.display = "none";
};

closeAboutModal.onclick = function () {
  modalAbout.style.display = "none";
};

closeHelpModal.onclick = function () {
  modalHelp.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (
    event.target == modalChooseList ||
    event.target == modalSettings ||
    event.target == modalAbout ||
    event.target == modalHelp
  ) {
    modalChooseList.style.display = "none";
    modalSettings.style.display = "none";
    modalAbout.style.display = "none";
    modalHelp.style.display = "none";
  }
};

submitListBtn.onclick = function () {
  appContainer.classList.remove("hidden");
  introText.classList.add("hidden");
  modalChooseList.style.display = "none";
};
