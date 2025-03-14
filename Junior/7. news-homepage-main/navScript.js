/**
 * Constants for DOM elements and image paths
 */
const IMAGE_PATHS = {
  menu: './assets/images/icon-menu.svg',
  close: './assets/images/icon-menu-close.svg'
};

const BREAKPOINTS = {
  desktop: 600
};

/**
 * DOM Elements
 */
const elements = {
  menuButton: document.querySelector('.menu-button'),
  navLinksMobile: document.querySelector('.nav-links-mobile'),
  background: document.querySelector('.background'),
  navLinks: document.querySelector('.nav-links'),
  menuButtonIcon: document.querySelector('.menu-button img')
};

/**
 * Toggles the mobile menu state
 * @param {boolean} isExpanded - Whether the menu should be expanded
 */
const toggleMobileMenu = (isExpanded) => {
  const { background, navLinksMobile, menuButton, menuButtonIcon } = elements;
  
  // Toggle classes and attributes
  background.classList.toggle('active', isExpanded);
  navLinksMobile.classList.toggle('active', isExpanded);
  menuButton.setAttribute('aria-expanded', isExpanded);
  
  // Update menu icon
  try {
    menuButtonIcon.src = isExpanded ? IMAGE_PATHS.close : IMAGE_PATHS.menu;
  } catch (error) {
    console.error('Failed to update menu icon:', error);
  }
  
  // Update tabindex for accessibility
  document.querySelectorAll('.nav-links-mobile li a').forEach(link => 
    link.setAttribute('tabindex', isExpanded ? '0' : '-1')
  );
};

/**
 * Handles window resize events
 */
const handleResize = () => {
  const { menuButton, navLinks, navLinksMobile, background, menuButtonIcon } = elements;
  const isDesktop = window.innerWidth > BREAKPOINTS.desktop;
  
  // Update visibility and state
  menuButton.style.display = isDesktop ? 'none' : 'block';
  navLinks.classList.toggle('active', isDesktop);
  if (isDesktop) {
    navLinksMobile.classList.remove('active');
    background.classList.remove('active');
    menuButton.setAttribute('aria-expanded', 'false');

    // Reset menu icon
    menuButtonIcon.src = IMAGE_PATHS.menu;
  }

};

/**
 * Closes the mobile menu
 */
const closeMobileMenu = () => {
  const { background, navLinksMobile, menuButton, menuButtonIcon } = elements;
  
  background.classList.remove('active');
  menuButton.setAttribute('aria-expanded', 'false');
  navLinksMobile.classList.remove('active');
  
  try {
    menuButtonIcon.src = IMAGE_PATHS.menu;
  } catch (error) {
    console.error('Failed to close menu icon:', error);
  }
};

// Event Listeners
window.addEventListener('resize', handleResize);

elements.menuButton.addEventListener('click', () => {
  const currentState = elements.menuButton.getAttribute('aria-expanded') === 'true';
  toggleMobileMenu(!currentState);
});

elements.background.addEventListener('click', closeMobileMenu);

// Initialize
handleResize();
