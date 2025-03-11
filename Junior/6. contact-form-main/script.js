const requiredInputs = document.querySelectorAll('.requiredInput'); 
const button = document.querySelector('button');

requiredInputs.forEach(input => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput(input); 
  }); 
}); 

function validateInput(input) {
  const errorMessageId = input.getAttribute('aria-describedby');
  const errorMessage = document.getElementById(errorMessageId);
  
  if (input.type === 'radio') {
    const radioGroup = document.getElementsByName(input.name);
    const isChecked = Array.from(radioGroup).some(radio => radio.checked);
    errorMessage.style.display = isChecked ? 'none' : 'block';
  }
  else if (input.type === 'checkbox') {
    errorMessage.style.display = input.checked ? 'none' : 'block';
  }
  else {
    if (!input.value.trim() || !input.checkValidity()) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
    }
  }
}