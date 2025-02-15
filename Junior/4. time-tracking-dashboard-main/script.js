const timeframes = document.getElementById("timeframes");
const cards = document.getElementById("cards");

let cardData = []; // Fetch data.json only once and store it

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Oops! Something went wrong.");
    }
    return response.json();
  })
  .then((data) => {
    cardData = data;
    renderCards("weekly");
  });

const renderCards = (displayStat) => {
  cards.innerHTML = ""; // Clear previous cards

  const labels = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month",
  };
  let label = labels[displayStat] || "Last Week"; // Default if undefined

  cardData.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    //for adding background image in CSS
    cardElement.dataset.category = card.title;

    let timeframe = card.timeframes[displayStat];
    let hours = timeframe.current;
    let previousDate = timeframe.previous;

    cardElement.innerHTML = `
            <div class="container">
              <div class="title">
                <span>${card.title}</span>
                <img src="/images/icon-ellipsis.svg" alt="" />
              </div>
              <div class="stats">
                <span class="hours">${hours}hrs</span>
                <span class="previousDate">${label} - ${previousDate}hrs</span>
              </div>
            </div>
            `;

    cards.appendChild(cardElement);
  });
};

timeframes.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    document
      .querySelectorAll(".timeframes li")
      .forEach((li) => li.classList.remove("active"));
    e.target.classList.add("active");

    let displayStat = e.target.id; 
    timeframes.dataset.focused = displayStat;
    renderCards(displayStat);
  }
});
