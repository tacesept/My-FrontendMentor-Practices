// DOM Elements
const copyButton = document.querySelector(".password-container-copied button");
const copiedText = document.querySelector(".password-container-copied span");
const passwordInput = document.querySelector(".password-container input");
const strengthText = document.querySelector(".strength-text");
const strengthBars = document.querySelectorAll(".strength-bar .bar");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const rangeInput = document.querySelector("#length");
const lengthValue = document.querySelector("#length-value");
const generateButton = document.querySelector(".password-generator button");

// Character sets for password generation
const characters = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

// Password Generation Functions
function generatePassword() {
  let charset = "";
  let password = "";
  const length = parseInt(rangeInput.value);

  // Build character set based on checked options
  if (document.getElementById("uppercase").checked) charset += characters.uppercase;
  if (document.getElementById("lowercase").checked) charset += characters.lowercase;
  if (document.getElementById("numbers").checked) charset += characters.numbers;
  if (document.getElementById("symbols").checked) charset += characters.symbols;

  if (!charset) { 
    return "";
  }

  // Generate password using crypto.getRandomValues for better security
  const array = new Uint32Array(length);
  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    password += charset[array[i] % charset.length];
  }

  return password;
}

// Strength Indicator Functions
function updateStrength() {
  const checkedCount = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;
  const passwordLength = parseInt(rangeInput.value);

  // Reset all bars
  strengthBars.forEach(bar => {
    bar.style.backgroundColor = "transparent";
    bar.style.borderColor = "#E6E5EA";
  });

  // Early return for too short passwords
  if (passwordLength < 8) {
    strengthText.textContent = "TOO WEAK!";
    return;
  }

  // Update strength indicators based on complexity
  switch (checkedCount) {
    case 1:
      strengthText.textContent = "TOO WEAK!";
      strengthBars[0].style.backgroundColor = "#F64A4A";
      strengthBars[0].style.borderColor = "#F64A4A";
      break;
    case 2:
      strengthText.textContent = "WEAK";
      strengthBars[0].style.backgroundColor = "#FB7C58";
      strengthBars[0].style.borderColor = "#FB7C58";
      strengthBars[1].style.backgroundColor = "#FB7C58";
      strengthBars[1].style.borderColor = "#FB7C58";
      break;
    case 3:
      strengthText.textContent = "MEDIUM";
      for (let i = 0; i < 3; i++) {
        strengthBars[i].style.backgroundColor = "#F8CD65";
        strengthBars[i].style.borderColor = "#F8CD65";
      }
      break;
    case 4:
      strengthText.textContent = "STRONG";
      strengthBars.forEach(bar => {
        bar.style.backgroundColor = "#A4FFAF";
        bar.style.borderColor = "#A4FFAF";
      });
      break;
  }
}

// Event Listeners
generateButton.addEventListener("click", () => {
  const password = generatePassword();
  passwordInput.value = password;
});

rangeInput.addEventListener("input", () => {
  lengthValue.textContent = rangeInput.value;
  updateStrength();
});

checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", updateStrength);
});

copyButton.addEventListener("click", async () => {
  const password = passwordInput.value.trim();
  if (!password) return;

  try {
    if (!navigator.clipboard) {
      throw new Error("Clipboard API not supported");
    }

    await navigator.clipboard.writeText(password);
    copiedText.classList.add("visible");

    setTimeout(() => {
      copiedText.classList.remove("visible");
    }, 1500);
  } catch (err) {
    console.error("Failed to copy: ", err);
    alert("Unable to copy password to clipboard");
  }
});

// Initialize
updateStrength();
