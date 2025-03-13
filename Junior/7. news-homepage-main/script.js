const menuButton = document.querySelector(".menu-button");
const navLinksMobile = document.querySelector(".nav-links-mobile");
const background = document.querySelector(".background");
const navLinks = document.querySelector(".nav-links");
const menuButtonIcon = menuButton.querySelector("img");

const toggleMobileMenu = (isExpanded) => {
  background.classList.toggle("active", isExpanded);
  navLinksMobile.classList.toggle("active", isExpanded);
  menuButton.setAttribute("aria-expanded", isExpanded);
  menuButtonIcon.src = isExpanded ? "./assets/images/icon-menu-close.svg" : "./assets/images/icon-menu.svg";
  
  document.querySelectorAll(".nav-links-mobile li a").forEach(link => 
    link.setAttribute("tabindex", isExpanded ? "0" : "-1")
  );
};

const handleResize = () => {
  const isDesktop = window.innerWidth > 600;
  menuButton.style.display = isDesktop ? "none" : "block";
  navLinks.classList.toggle("active", isDesktop);
  navLinksMobile.classList.remove("active");
  background.classList.remove("active");
  menuButton.setAttribute("aria-expanded", "false");
};

// Add event listeners
window.addEventListener("resize", handleResize);
menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  toggleMobileMenu(!isExpanded);
});

handleResize();
