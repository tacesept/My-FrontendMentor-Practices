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

// Event Listeners
menuElements.button.addEventListener("click", toggleMenu);
background.addEventListener("click", closeMenu);
cartElements.button.addEventListener("click", toggleCart);
