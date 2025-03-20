// DOM Elements
const menuElements = {
  button: document.querySelector(".header__left-menu"),
  sidebar: document.querySelector(".sidebar-menu"),
  icon: document.querySelector(".header__left-menu img"),
};

const cartElements = {
  button: document.querySelector(".header__right-cart"),
  container: document.querySelector(".cart"),
};

const mainElements = {
  productImagesList: document.querySelector(".product-images__list"),
  productImagesListItems: document.querySelectorAll(".product-images__list-item"),
  previousButton: document.querySelector(".product-images__controls-button.previous"),
  nextButton: document.querySelector(".product-images__controls-button.next"),
};

let currentIndex = 0;

const background = document.querySelector(".background");

// Helper Functions
const toggleMenu = () => {
  const isMenuOpen = menuElements.icon.src.includes("icon-menu");
  menuElements.icon.src = isMenuOpen
    ? "./images/icon-close.svg"
    : "./images/icon-menu.svg";
  menuElements.sidebar.classList.toggle("active");
  background.classList.toggle("active");
  cartElements.container.classList.remove("active");
};

const closeMenu = () => {
  menuElements.sidebar.classList.remove("active");
  background.classList.remove("active");
  menuElements.icon.src = "./images/icon-menu.svg";
};

const toggleCart = () => {
  cartElements.container.classList.toggle("active");
};

const move = (direction) => {  
  if (direction === "left" && currentIndex > 0) {
    currentIndex--;
  } else if (direction === "right" && currentIndex < mainElements.productImagesListItems.length - 1) {
    currentIndex++;
  }

  mainElements.productImagesList.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// Event Listeners
menuElements.button.addEventListener("click", toggleMenu);
background.addEventListener("click", closeMenu);
cartElements.button.addEventListener("click", toggleCart);
mainElements.previousButton.addEventListener("click", () => move("left"));
mainElements.nextButton.addEventListener("click", () => move("right"));
