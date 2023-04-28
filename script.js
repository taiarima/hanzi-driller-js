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

// Handling of Excel file with SheetJS
// Load the Excel file using SheetJS
// const hanziList6000 = XLSX.readFile("hanzi6000.xlsx");

// // Get the first worksheet
// const hanziList6000Sheet = workbook.Sheets[workbook.SheetNames[0]];

// // Extract data from the worksheet
// const data = XLSX.utils.sheet_to_json(worksheet);

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
