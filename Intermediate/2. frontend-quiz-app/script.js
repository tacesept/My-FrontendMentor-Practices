const main = document.querySelector(".main");
let data = [];
let currentQuestion = 0;
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
  data.forEach((subject) => {
    renderSubjects += `
      <button>
        <div class="subject-icon" data-subject="${subject.title}">
          <img src="${subject.icon}" alt="${subject.title}" />
        </div>
        <span class="subject-text">${subject.title}</span>
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
