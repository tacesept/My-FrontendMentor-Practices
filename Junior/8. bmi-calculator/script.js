// Constants
const BMI_RANGES = {
  UNDERWEIGHT: 18.5,
  NORMAL: 24.9,
};

const CONVERSION_RATES = {
  FEET_TO_METERS: 0.3048,
  INCHES_TO_METERS: 0.0254,
  STONES_TO_KG: 6.35,
  POUNDS_TO_KG: 0.453592,
  KG_TO_POUNDS: 14,
};

// DOM Elements
const elements = {
  radios: document.querySelectorAll('input[name="unit"]'),
  metricContainer: document.querySelector(".bmi__matric-container"),
  imperialContainer: document.querySelector(".bmi__imperial-container"),
  bmiWelcome: document.querySelector(".bmi-welcome"),
  bmiResult: document.querySelector(".bmi-result"),
  matricInputs: document.querySelectorAll(".bmi__matric-input input"),
  imperialInputs: document.querySelectorAll(".bmi__imperial-input input"),
  numberInputs: document.querySelectorAll("input[type='text']"),
  bmiClassification: document.querySelector("#bmi-classification"),
  bmiRange: document.querySelector("#bmi-range"),
  bmiResultValue: document.querySelector(".bmi-result__value-number"),
};

let allInputsFilled = false;

/**
 * Toggles between metric and imperial units
 */
function toggleUnits() {
  const isMetric = elements.radios[0].checked;

  elements.metricContainer.classList.toggle("active", isMetric);
  elements.imperialContainer.classList.toggle("active", !isMetric);

  // Clear all inputs
  [...elements.matricInputs, ...elements.imperialInputs].forEach((input) => {
    input.value = "";
  });

  allInputsFilled = false;
  checkInputs();
}

/**
 * Validates input to allow only numbers
 * @param {Event} event - The input event
 */
function allowNumbersOnly(event) {
  const input = event.target;
  input.value = input.value.replace(/[^0-9]/g, "");
}

/**
 * Checks if all required inputs are filled
 */
function checkInputs() {
  const activeInputs = elements.radios[0].checked
    ? elements.matricInputs
    : elements.imperialInputs;
  allInputsFilled = [...activeInputs].every((input) => input.value !== "");

  elements.bmiWelcome.classList.toggle("active", !allInputsFilled);
  elements.bmiResult.classList.toggle("active", allInputsFilled);
}

/**
 * Calculates BMI for metric units
 * @returns {Object} BMI calculation results
 */
function calculateMetricBMI() {
  const height = parseFloat(elements.matricInputs[0].value);
  const weight = parseFloat(elements.matricInputs[1].value);

  if (!height || !weight) return null;

  const bmi = (weight / (height / 100) ** 2).toFixed(1);
  const lowerWeight = (BMI_RANGES.UNDERWEIGHT * (height / 100) ** 2).toFixed(1);
  const upperWeight = (BMI_RANGES.NORMAL * (height / 100) ** 2).toFixed(1);

  return {
    bmi,
    range: `${lowerWeight}kgs - ${upperWeight}kgs`,
  };
}

/**
 * Converts kilograms to stones and pounds
 * @param {number} kg - Weight in kilograms
 * @returns {string} Weight in stones and pounds format
 */
function kgToStonesAndPounds(kg) {
  const stones = Math.floor(kg / CONVERSION_RATES.STONES_TO_KG);
  const pounds = Math.round(
    (kg % CONVERSION_RATES.STONES_TO_KG) * CONVERSION_RATES.KG_TO_POUNDS
  );
  return `${stones}st ${pounds}lbs`;
}

/**
 * Calculates BMI for imperial units
 * @returns {Object} BMI calculation results
 */
function calculateImperialBMI() {
  const feet = parseFloat(elements.imperialInputs[0].value);
  const inches = parseFloat(elements.imperialInputs[1].value);
  const stones = parseFloat(elements.imperialInputs[2].value);
  const pounds = parseFloat(elements.imperialInputs[3].value);

  if (!feet || !inches || !stones || !pounds) return null;

  const heightInMeters =
    feet * CONVERSION_RATES.FEET_TO_METERS +
    inches * CONVERSION_RATES.INCHES_TO_METERS;
  const weightInKg =
    stones * CONVERSION_RATES.STONES_TO_KG +
    pounds * CONVERSION_RATES.POUNDS_TO_KG;

  const bmi = (weightInKg / heightInMeters ** 2).toFixed(1);
  const lowerWeightKg = (BMI_RANGES.UNDERWEIGHT * heightInMeters ** 2).toFixed(
    1
  );
  const upperWeightKg = (BMI_RANGES.NORMAL * heightInMeters ** 2).toFixed(1);

  return {
    bmi,
    range: `${kgToStonesAndPounds(lowerWeightKg)} - ${kgToStonesAndPounds(
      upperWeightKg
    )}`,
  };
}

/**
 * Main BMI calculation function
 */
function calculateBMI() {
  checkInputs();

  if (!allInputsFilled) return;

  const result = elements.radios[0].checked
    ? calculateMetricBMI()
    : calculateImperialBMI();

  if (result) {
    elements.bmiResultValue.textContent = result.bmi;
    elements.bmiRange.textContent = result.range;

    // Set BMI classification based on value
    const bmiValue = parseFloat(result.bmi);
    if (bmiValue < 18.5) {
      elements.bmiClassification.textContent = "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      elements.bmiClassification.textContent = "Healthy weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      elements.bmiClassification.textContent = "Overweight";
    } else {
      elements.bmiClassification.textContent = "Obese";
    }
  }
}

// Event Listeners
function initializeEventListeners() {
  elements.radios.forEach((radio) => {
    radio.addEventListener("change", toggleUnits);
  });

  elements.numberInputs.forEach((input) => {
    input.addEventListener("input", allowNumbersOnly);
  });

  [...elements.matricInputs, ...elements.imperialInputs].forEach((input) => {
    input.addEventListener("input", calculateBMI);
  });
}

// Initialize the page
initializeEventListeners();
toggleUnits();
