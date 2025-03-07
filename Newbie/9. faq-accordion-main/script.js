const accordionBtns = document.querySelectorAll(".accordion-item-btn");
const accordionBodies = document.querySelectorAll(".accordion-item-body");

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let img = this.querySelector(".accordion-item-btn-img");
    img.src =
      img.src.includes("icon-plus.svg")
        ? "/assets/images/icon-minus.svg"
        : "/assets/images/icon-plus.svg";
  });
});

