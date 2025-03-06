const ratingList = document.querySelector('.rating-state__rating-list');
const submitButton = document.querySelector('.rating-state__submit-button');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const thankYouRating = document.querySelector('.thank-you-state__rating');

let rating = null;

ratingList.addEventListener('click', (event) => { 
  ratingList.querySelectorAll('button').forEach(button => {
    button.classList.remove('selected');
  });
  event.target.classList.add('selected');
});

submitButton.addEventListener('click', () => {
  const selectedRating = ratingList.querySelector('button.selected');
  console.log(selectedRating.textContent);
  rating = selectedRating.textContent;
  ratingState.classList.add('hidden');
  thankYouState.classList.remove('hidden');
  thankYouRating.textContent = rating;
});