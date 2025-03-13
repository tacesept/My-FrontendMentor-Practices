const menuButton = document.querySelector('.menu-button');
const navLinksMobile = document.querySelector('.nav-links-mobile');

window.addEventListener('resize', addActiveClass);

function addActiveClass() {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');
  
  if (window.innerWidth > 600) {
    menuButton.style.display = 'none';
    navLinks.classList.add('active');
  } else {
    menuButton.style.display = 'block';
    navLinks.classList.remove('active');
  }
}

addActiveClass();

menuButton.addEventListener('click', () => {
  navLinksMobile.classList.toggle('active');
});
