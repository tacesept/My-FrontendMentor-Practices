const shareBtn = document.querySelector(".share-btn");
const closeBtn = document.querySelector(".close-btn");
const main = document.querySelector(".main");
const shareContainer = document.querySelector(".share-container");

shareBtn.addEventListener("click", function (event) {
  main.classList.toggle("active"); 
  event.stopPropagation(); // Prevents the document event from running
});

closeBtn.addEventListener("click", function () {
  main.classList.remove("active");
  console.log("close btn");
});

document.addEventListener("click", function (event) {
  if (!shareContainer.contains(event.target)) {
    main.classList.remove("active");
  }
});
