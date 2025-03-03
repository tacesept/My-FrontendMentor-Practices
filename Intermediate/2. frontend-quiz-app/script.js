// Constants and configurations
const CONFIG = {
  MAX_QUESTIONS: 10,
  ALPHABET: ['A', 'B', 'C', 'D'],
  ICONS: {
    CORRECT: './assets/images/icon-correct.svg',
    INCORRECT: './assets/images/icon-incorrect.svg'
  }
};

// Theme management
const ThemeManager = {
  init() {
    this.themeToggle = document.getElementById('theme-toggle');
    this.themeIcons = document.querySelectorAll('.theme-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      this.themeToggle.checked = true;
      this.updateThemeIcons(true);
    }
    
    // Add event listener for theme toggle
    this.themeToggle.addEventListener('change', () => {
      const isDark = this.themeToggle.checked;
      this.toggleTheme(isDark);
    });
  },
  
  toggleTheme(isDark) {
    document.body.classList.toggle('dark-theme', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    this.updateThemeIcons(isDark);
  },
  
  updateThemeIcons(isDark) {
    this.themeIcons.forEach(icon => {
      const isDarkIcon = icon.getAttribute('alt') === 'moon';
      const newSrc = isDarkIcon
        ? `./assets/images/icon-moon-${isDark ? 'light' : 'dark'}.svg`
        : `./assets/images/icon-sun-${isDark ? 'light' : 'dark'}.svg`;
      icon.src = newSrc;
    });
  }
};

// State management
const QuizState = {
  data: [],
  currentQuestionIndex: 0,
  currentSubjectIndex: 0,
  score: 0,
  selectedAnswer: null,
  
  reset() {
    this.currentQuestionIndex = 0;
    this.currentSubjectIndex = 0;
    this.score = 0;
    this.selectedAnswer = null;
  }
};

// DOM Elements
const elements = {
  headerLeft: document.querySelector('.header-left'),
  main: document.querySelector('.main')
};

// Data fetching
async function initializeQuiz() {
  try {
    const response = await fetch('data.json');
    const jsonData = await response.json();
    QuizState.data = jsonData.quizzes;
    loadStartScreen();
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    renderError('Error loading quiz data. Please try again later.');
  }
}

// Error handling
function renderError(message) {
  elements.main.innerHTML = `
    <section>
      <h1>Error</h1>
      <p>${message}</p>
    </section>`;
}

// Screen rendering functions
function loadStartScreen() {
  if (!QuizState.data?.length) {
    renderError('No quiz data available');
    return;
  }

  const subjectsHTML = QuizState.data
    .map((subject, index) => `
      <button class="subject-btn" data-index="${index}">
        <div class="icon" data-subject="${subject.title}">
          <img src="${subject.icon}" alt="${subject.title}" />
        </div>
        <span class="text">${subject.title}</span>
      </button>
    `)
    .join('');

  elements.main.innerHTML = `
    <section class="hero first-section">
      <h1>
        <span class="light">Welcome to the</span>
        <span>Frontend Quiz!</span>
      </h1>
      <p>Pick a subject to get started.</p>
    </section> 
    <section class="list second-section">
      ${subjectsHTML} 
    </section>
  `;
}

function loadQuizScreen(index) {
  const currentQuizData = QuizState.data[index];
  if (!currentQuizData?.questions) {
    renderError('Invalid quiz data');
    return;
  }

  const { questions } = currentQuizData;
  const currentQuestion = questions[QuizState.currentQuestionIndex];
  
  const answersHTML = currentQuestion.options
    .map((option, index) => `
      <button class="answer-btn" data-index="${index}">
        <div class="icon" data-subject="Answer">
          ${CONFIG.ALPHABET[index]}
        </div>
        <span class="text">${escapeHtml(option)}</span>
        <img src="" alt="" id="correct-icon"/>
      </button>
    `)
    .join('');

  const progressPercentage = ((QuizState.currentQuestionIndex + 1) / questions.length) * 100;

  elements.main.innerHTML = `
    <section class="question first-section">
      <div class="question-header">
        <p>Question ${QuizState.currentQuestionIndex + 1} of ${questions.length}</p>
        <p class="question-text">${currentQuestion.question}</p>
      </div>
      <div class="progress-bar">
        <div class="progress" style="width: ${progressPercentage}%"></div>
      </div>
    </section> 
    <section class="list second-section">
      ${answersHTML}
      <button class="purple-btn submit-btn" disabled>Submit</button>
    </section>
  `;
}

function loadResultScreen() {
  const currentSubject = QuizState.data[QuizState.currentSubjectIndex];
  const totalQuestions = currentSubject.questions.length;

  elements.main.innerHTML = `
    <section class="hero first-section">
      <h1>
        <span class="light">Quiz completed</span>
        <span>You scored...</span>
      </h1> 
    </section> 
    <section class="result-container second-section">
      <div class="result" data-subject="Score">
        <div class="subject-label">
          <div class="icon" data-subject="${currentSubject.title}">
            <img src="${currentSubject.icon}" alt="${currentSubject.title}" />
          </div>
          <span class="text">${currentSubject.title}</span>
        </div>
        <div class="score">
          <span>${QuizState.score}</span>
          <span>out of ${totalQuestions}</span>
        </div>
      </div>
      <button class="purple-btn start-btn">Play Again</button>
    </section>
  `;
}

// Utility functions
function escapeHtml(text) {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function updateHeaderSubject() {
  const currentSubject = QuizState.data[QuizState.currentSubjectIndex];
  elements.headerLeft.innerHTML = `
    <div class="icon" data-subject="${currentSubject.title}">
      <img src="${currentSubject.icon}" alt="${currentSubject.title}" />
    </div>
    <span class="text">${currentSubject.title}</span>
  `;
}

function checkAnswer(selectedIndex) {
  const currentQuestion = QuizState.data[QuizState.currentSubjectIndex]
    .questions[QuizState.currentQuestionIndex];
  const correctAnswer = currentQuestion.answer;
  const pickedAnswer = currentQuestion.options[selectedIndex];
  
  const selectedButton = document.querySelector('.answer-btn.selected');
  const correctAnswerIndex = currentQuestion.options.indexOf(correctAnswer);
  const correctButton = document.querySelector(`.answer-btn[data-index='${correctAnswerIndex}']`);
  
  const selectedIcon = selectedButton.querySelector('#correct-icon');
  const correctIcon = correctButton.querySelector('#correct-icon');

  if (correctAnswer === pickedAnswer) {
    QuizState.score++;
    selectedIcon.src = CONFIG.ICONS.CORRECT;
    correctButton.classList.add('correct');
  } else {
    selectedIcon.src = CONFIG.ICONS.INCORRECT;
    correctIcon.src = CONFIG.ICONS.CORRECT;
    correctButton.classList.add('correct');
    selectedButton.classList.add('incorrect');
  }
}

// Event handlers
function handleSubjectSelection(button) {
  QuizState.currentSubjectIndex = parseInt(button.dataset.index);
  QuizState.reset();
  loadQuizScreen(QuizState.currentSubjectIndex);
  updateHeaderSubject();
}

function handleAnswerSelection(button) {
  const answerButtons = document.querySelectorAll('.answer-btn');
  answerButtons.forEach(btn => btn.classList.remove('selected'));
  
  button.classList.add('selected');
  QuizState.selectedAnswer = parseInt(button.dataset.index);
  
  document.querySelector('.submit-btn').disabled = false;
}

function handleSubmitAnswer(button) {
  const selectedButton = document.querySelector('.answer-btn.selected');
  const selectedIndex = parseInt(selectedButton.dataset.index);
  
  document.querySelectorAll('.answer-btn').forEach(btn => btn.disabled = true);
  
  button.classList.replace('submit-btn', 'next-btn');
  button.textContent = 'Next';
  
  checkAnswer(selectedIndex);
}

function handleNextQuestion() {
  QuizState.currentQuestionIndex++;
  if (QuizState.currentQuestionIndex === CONFIG.MAX_QUESTIONS) {
    loadResultScreen();
    return;
  }
  loadQuizScreen(QuizState.currentSubjectIndex);
}

// Event listeners
document.body.addEventListener('click', (e) => {
  const target = e.target.closest('button');
  if (!target) return;

  if (target.classList.contains('subject-btn')) {
    handleSubjectSelection(target);
  } else if (target.classList.contains('answer-btn')) {
    handleAnswerSelection(target);
  } else if (target.classList.contains('submit-btn')) {
    handleSubmitAnswer(target);
  } else if (target.classList.contains('next-btn')) {
    handleNextQuestion();
  } else if (target.classList.contains('start-btn')) {
    QuizState.reset();
    elements.headerLeft.innerHTML = '';
    loadStartScreen();
  }
});

// Initialize theme manager and quiz
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  initializeQuiz();
});
