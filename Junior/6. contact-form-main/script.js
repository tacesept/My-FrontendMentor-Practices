const requiredInputs = document.querySelectorAll('.requiredInput'); 
const button = document.querySelector('button');
const errorMessages = Array.from(document.querySelectorAll('.error-message'));
const requiredInputsArray = Array.from(requiredInputs);
// Reset form on page load/reload
window.addEventListener('load', () => {
  const form = document.querySelector('form');
  form.reset(); // Reset all form inputs
  
  // Hide all error messages
  document.querySelectorAll('.error-message').forEach(message => {
    message.style.display = 'none';
  });
});

requiredInputs.forEach(input => {
  const errorMessageId = input.getAttribute('aria-describedby');
  const errorMessage = document.getElementById(errorMessageId);
  
  // Add input event listener for text/email inputs and textarea
  if (input.type !== 'radio' && input.type !== 'checkbox') {
    input.addEventListener('input', () => {
      errorMessage.style.display = 'none';
      input.classList.remove('not-validated');
    });
  }
  
  // Add change event listener for checkbox and radio
  if (input.type === 'checkbox' || input.type === 'radio') {
    input.addEventListener('change', () => {
      errorMessage.style.display = 'none';
    });
  }
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    validateInput(input); 
    if(errorMessages.every(message => message.style.display === 'none') && requiredInputsArray.every(input => input.validity.valid)) {
      showSuccessMessage();
    }
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

  if(errorMessage.style.display === 'block') {
    input.classList.add('not-validated');
  } else {
    input.classList.remove('not-validated');
  }
}

function showSuccessMessage() {
  const successMessage = document.querySelector('.success-message');
  successMessage.classList.add('active-success-message');

  setTimeout(() => {
    successMessage.classList.remove('active-success-message');
  }, 3000);
}