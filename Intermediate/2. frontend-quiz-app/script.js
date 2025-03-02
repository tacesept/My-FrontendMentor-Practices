const headerLeft = document.querySelector(".header-left");
const main = document.querySelector(".main");
const alphabet = ["A", "B", "C", "D"];
let data = [];
let currentQuestionIndex = 0;
let currentSubjectIndex = 0;
let score = 0;

fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData.quizzes;
    console.log(data);
    loadStartScreen();
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    main.innerHTML = `
      <section>
        <h1>Error loading quiz data</h1>
        <p>Please try again later.</p>
      </section>`;
  });

function loadStartScreen() {
  if (!data || data.length === 0) {
    console.error("No quiz data available");
    return;
  }

  let renderSubjects = "";
  data.forEach((subject, index) => {
    renderSubjects += `
      <button class="subject-btn" data-index="${index}">
        <div class="icon" data-subject="${subject.title}">
          <img src="${subject.icon}" alt="${subject.title}" />
        </div>
        <span class="text">${subject.title}</span>
      </button>
    `;
  });

  main.innerHTML = `
    <section class="hero">
      <h1>
        <span class="light">Welcome to the</span>
        <span>Frontend Quiz!</span>
      </h1>
      <p>Pick a subject to get started.</p>
    </section> 
    <section class="list">
      ${renderSubjects} 
    </section>
  `;
}

function loadQuizScreen(index) {
  const questions = data[index].questions;
  const options = questions[currentQuestionIndex].options;

  let renderAnswer = "";
  options.forEach((option, index) => {
    renderAnswer += `
      <button class="answer-btn" data-index="${index}">
        <div class="icon" data-subject="Answer">
          ${alphabet[index]}
        </div>
        <span class="text">${option
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")}</span>
      </button>
    `;
  });

  main.innerHTML = `
    <section class="question">
      <p>Question ${currentQuestionIndex + 1} of ${questions.length}</p>
      <h1>${questions[index].question}</h1>
      <div></div>
    </section> 
    <section class="list">
      ${renderAnswer}
      <button class="next-btn">Next</button>
    </section>
  `;
}

function loadNextQuestion() {
  loadQuizScreen(currentSubjectIndex);
}

function loadResultScreen() {
  main.innerHTML = `
    <section class="hero">
      <h1>
        <span class="light">Quiz completed</span>
        <span>You scored...</span>
      </h1> 
    </section> 
    <section class="list">
      <div class="icon" data-subject="Score">
        <div>
          <div class="icon" data-subject="${data[currentSubjectIndex].title}">
            <img src="${data[currentSubjectIndex].icon}" alt="${data[currentSubjectIndex].title}" />
          </div>
          <span class="text">${data[currentSubjectIndex].title}</span>
        </div>
        <span>${score}</span>
        <span>out of ${data[currentSubjectIndex].questions.length}</span>
      </div>
      <button class="start-btn">Play Again</button>
    </section>
  `;
}

/* event listeners */
document.body.addEventListener("click", (e) => {
  if (e.target.closest(".subject-btn")) {
    const button = e.target.closest(".subject-btn");
    currentSubjectIndex = parseInt(button.dataset.index);
    loadQuizScreen(currentSubjectIndex);

    headerLeft.innerHTML = `
      <div class="icon" data-subject="${data[currentSubjectIndex].title}">
          <img src="${data[currentSubjectIndex].icon}" alt="${data[currentSubjectIndex].title}" />
      </div>
      <span class="text">${data[currentSubjectIndex].title}</span>
    `;
  }

  if (e.target.matches(".next-btn")) {
    currentQuestionIndex++;
    if (currentQuestionIndex === 10) {
      loadResultScreen();
      return;
    }
    loadNextQuestion();
  }

  if (e.target.matches(".start-btn")) {
    currentQuestionIndex = 0;
    currentSubjectIndex = 0;
    loadStartScreen();
  }
});
