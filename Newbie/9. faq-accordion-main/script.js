// Get all accordion buttons
const accordionButtons = document.querySelectorAll(".accordion-item-btn");

// Add click event listener to each button
accordionButtons.forEach((button) => {
  button.addEventListener("click", () => { 
    const accordionItem = button.closest(".accordion-item"); 
    const accordionBody = accordionItem.querySelector(".accordion-item-body"); 
    const buttonImg = button.querySelector(".accordion-item-btn-img");

    // Toggle the active state
    const isExpanded = accordionBody.style.display === "block";

    // Change image source based on state
    buttonImg.src = isExpanded
      ? "/assets/images/icon-plus.svg"
      : "/assets/images/icon-minus.svg";

    // Toggle body display
    accordionBody.style.display = isExpanded ? "none" : "block";
  });
});
