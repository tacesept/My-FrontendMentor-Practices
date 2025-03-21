// DOM Elements
const menuElements = {
  button: document.querySelector(".header__left-menu"),
  sidebar: document.querySelector(".sidebar-menu"),
  icon: document.querySelector(".header__left-menu img"),
};

const cartElements = {
  button: document.querySelector(".header__right-cart"),
  container: document.querySelector(".cart"),
  count: document.querySelector(".header__cart-count"),
};

const mainElements = {
  productImagesList: document.querySelector(".product-images__list"),
  productImagesListItems: document.querySelectorAll(".product-images__list-item"),
  previousButton: document.querySelector(".product-images__controls-button.previous"),
  nextButton: document.querySelector(".product-images__controls-button.next"), 
  thumbnailsItems: document.querySelectorAll(".product-images__thumbnails-item"),
  previewsItems: document.querySelectorAll(".product-images__previews-item"),
  plusButton: document.querySelector(".product-details__cart-counter-button.plus"),
  minusButton: document.querySelector(".product-details__cart-counter-button.minus"),
  cartCounter: document.querySelector(".product-details__cart-counter-count"),
  cartButton: document.querySelector(".product-details__cart-button"),
};

const addToCartElements = {
  cartBodyEmpty: document.querySelector(".cart__body-empty"),
  cartBodyItems: document.querySelector(".cart__body-items"),
  cartBodyItemImage: document.querySelector(".cart__body-items-item img"),  
  cartBodyItemPrice: document.querySelector(".cart__body-items-item-price"),
  cartBodyItemTotal: document.querySelector(".cart__body-items-item-total"),
  cartBodyItemRemove: document.querySelector(".cart__body-items-item-remove"),

};

const accessibilityElements = {
  sidebarMenu: document.querySelector(".sidebar-menu"),
  cart: document.querySelector(".cart"),
}

let currentIndex = 0;
let cartCounter = 0;

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
  accessibilityElements.sidebarMenu.setAttribute("aria-hidden", !menuElements.sidebar.classList.contains("active"));
};

const closeMenu = () => {
  menuElements.sidebar.classList.remove("active");
  background.classList.remove("active");
  menuElements.icon.src = "./images/icon-menu.svg";
  accessibilityElements.sidebarMenu.setAttribute("aria-hidden", !menuElements.sidebar.classList.contains("active"));
};

const toggleCart = () => {
  cartElements.container.classList.toggle("active");
  accessibilityElements.cart.setAttribute("aria-hidden", !cartElements.container.classList.contains("active"));
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
mainElements.thumbnailsItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index; 
    mainElements.thumbnailsItems.forEach((item) => {
      item.classList.remove("active");
    });
    item.classList.add("active");
    mainElements.previewsItems.forEach((item) => {
      item.classList.remove("active");
    });
    mainElements.previewsItems[currentIndex].classList.add("active");
  });
});

mainElements.plusButton.addEventListener("click", () => {
  cartCounter++;
  mainElements.cartCounter.textContent = cartCounter; 
  
});

mainElements.minusButton.addEventListener("click", () => {
  if (cartCounter > 0) {
    cartCounter--;
    mainElements.cartCounter.textContent = cartCounter; 
    
  }
});

mainElements.cartButton.addEventListener("click", () => {
  if (cartCounter > 0) {
    addToCartElements.cartBodyEmpty.classList.add("active");
    addToCartElements.cartBodyItems.classList.add("active");
    addToCartElements.cartBodyItemImage.src = mainElements.productImagesListItems[currentIndex].querySelector("img").src;
    addToCartElements.cartBodyItemPrice.textContent = `$150.00 x ${cartCounter}`;
    addToCartElements.cartBodyItemTotal.textContent = `$${150 * cartCounter}`;
    cartElements.count.textContent = cartCounter;
    cartElements.count.classList.add("active");
  }else {
    cartElements.count.classList.remove("active");
  }
});

addToCartElements.cartBodyItemRemove.addEventListener("click", () => {
  addToCartElements.cartBodyEmpty.classList.remove("active");
  addToCartElements.cartBodyItems.classList.remove("active");
  cartCounter = 0;
  mainElements.cartCounter.textContent = cartCounter;
  cartElements.count.textContent = cartCounter;
  cartElements.count.classList.remove("active");
});

