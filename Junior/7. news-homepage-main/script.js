const heroImage = document.querySelector(".hero-section img");

window.addEventListener("resize", () => {
  if (window.innerWidth > 1110) {
    heroImage.src = "./assets/images/image-web-3-desktop.jpg";
  } else {
    heroImage.src = "./assets/images/image-web-3-mobile.jpg";
  }
});