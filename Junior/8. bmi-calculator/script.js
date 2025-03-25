const radios = document.querySelectorAll('input[name="unit"]');
const metricContainer = document.querySelector(".bmi__matric-container");
const imperialContainer = document.querySelector(".bmi__imperial-container");

function toggleUnits() {
  if (radios[0].checked) {
    metricContainer.classList.add("active");
    imperialContainer.classList.remove("active");
    console.log("metric");
  } else {
    metricContainer.classList.remove("active");
    imperialContainer.classList.add("active");
    console.log("imperial");
  }
}

/* event listeners */
radios.forEach((radio) => {
  radio.addEventListener("change", toggleUnits);
});

/* initialize the page */
toggleUnits();
