// Get references to form elements
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("floatingInput");
const phoneNo = document.getElementById("phoneno");
const password = document.getElementById("Password");
const confirmPassword = document.getElementById("confirmpassword");
const agree = document.getElementById("agree");
const form = document.querySelector("form");
const errorElement = document.getElementById("error");

// Add event listener to form submit event
form.addEventListener("submit", (e) => {
  // Initialize error messages array
  let messages = [];

  // Check if first name field is empty
  if (firstName.value === "" || firstName.value == null) {
    messages.push("First name is required");
  }

  // Check if last name field is empty
  if (lastName.value === "" || lastName.value == null) {
    messages.push("Last name is required");
  }

  // Check if email field is empty
  if (email.value === "" || email.value == null) {
    messages.push("Email is required");
  }

  // Check if phone number field is empty
  if (phoneNo.value === "" || phoneNo.value == null) {
    messages.push("Phone number is required");
  }

  // Check if password field is empty
  if (password.value === "" || password.value == null) {
    messages.push("Password is required");
  }

  // Check if confirm password field is empty
  if (confirmPassword.value === "" || confirmPassword.value == null) {
    messages.push("Confirm password is required");
  }

  // Check if password and confirm password fields match
  if (password.value !== confirmPassword.value) {
    messages.push("Passwords do not match");
  }

  // Check if agree checkbox is checked
  if (!agree.checked) {
    messages.push("You must agree to the terms of use");
  }

  // Display error messages if any
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
