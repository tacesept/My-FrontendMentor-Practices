const menuButton = document.querySelector('.header__left-menu');
const menuLinks = document.querySelector('.header__menu-links');
const background = document.querySelector('.background');
const menuImg = document.querySelector('.header__left-menu img');
const cartButton = document.querySelector('.header__right-cart');
const cart = document.querySelector('.cart');  

/* event listeners */
menuButton.addEventListener('click', () => {
    menuImg.src = menuImg.src.includes("icon-menu")
      ? "./images/icon-close.svg"
      : "./images/icon-menu.svg"; 
    menuLinks.classList.toggle('active');
    background.classList.toggle('active');
    cart.classList.remove('active'); 
});

background.addEventListener('click', () => {
    menuLinks.classList.remove('active');
    background.classList.remove('active');
    menuImg.src = "./images/icon-menu.svg"; 
});

cartButton.addEventListener('click', () => {
    cart.classList.toggle('active'); 
});
