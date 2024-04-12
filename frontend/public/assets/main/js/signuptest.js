// Select the form element and add an event listener for submission
const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', submitForm);

// Define the submitForm function to handle form submission
function submitForm(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Select the form input fields
  const firstNameInput = document.getElementById('firstName');
  const lastNameInput = document.getElementById('lastName');
  const emailInput = document.getElementById('floatingInput');
  const phoneInput = document.getElementById('phoneno');
  const passwordInput = document.getElementById('Password');
  const confirmPasswordInput = document.getElementById('confirmpassword');
  const agreeCheckbox = document.getElementById('agree');

  const firstNameError = document.getElementById('firstNameError');
const lastNameError = document.getElementById('lastNameError');
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const agreeError = document.getElementById('agreeError');

  // Validate the input fields with regular expressions
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^[0-9]{10}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/; // Password should contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number

  let validForm = true; // Set a flag to keep track of form validation

  if (!nameRegex.test(firstNameInput.value)) {
    validForm = false;
    firstNameInput.classList.add('is-invalid');
  } else {
    firstNameInput.classList.remove('is-invalid');
  }

  if (!nameRegex.test(lastNameInput.value)) {
    validForm = false;
    lastNameInput.classList.add('is-invalid');
  } else {
    lastNameInput.classList.remove('is-invalid');
  }

  if (!emailRegex.test(emailInput.value)) {
    validForm = false;
    emailInput.classList.add('is-invalid');
  } else {
    emailInput.classList.remove('is-invalid');
  }

  if (!phoneRegex.test(phoneInput.value)) {
    validForm = false;
    phoneInput.classList.add('is-invalid');
  } else {
    phoneInput.classList.remove('is-invalid');
  }

  if (!passwordRegex.test(passwordInput.value)) {
    validForm = false;
    passwordInput.classList.add('is-invalid');
  } else {
    passwordInput.classList.remove('is-invalid');
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    validForm = false;
    confirmPasswordInput.classList.add('is-invalid');
  } else {
    confirmPasswordInput.classList.remove('is-invalid');
  }

  if (!agreeCheckbox.checked) {
    validForm = false;
    agreeCheckbox.classList.add('is-invalid');
  } else {
    agreeCheckbox.classList.remove('is-invalid');
  }

  if (validForm) {
    // If the form is valid, send the data to the server
    const formData = new FormData(signupForm); // Create a new FormData object with the form data
    fetch('/signup', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json()) // Parse the response as JSON
      .then(data => {
        console.log(data); // Log the response data
      })
      .catch(error => {
        console.error(error); // Log any errors that occur
      });
  }
}


