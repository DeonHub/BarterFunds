function submitForm() {
    // Get the form element
    const form = document.getElementById('signup-form');
    
    // Get the input fields
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const emailInput = document.getElementById('floatingInput');
    const phoneInput = document.getElementById('phoneno');
    const passwordInput = document.getElementById('Password');
    const confirmPasswordInput = document.getElementById('confirmpassword');
    
    // Get the checkbox element
    const agreeCheckbox = document.getElementById('agree');
    
    // Get the submit button element
    const submitButton = document.querySelector('button[type="submit"]');
    
    // Add an event listener to the form for the "submit" event
    form.addEventListener('submit', function(event) {
      // Prevent the form from submitting normally
      event.preventDefault();
      
      // Validate the input fields
      let valid = true;
      if (!firstNameInput.value.trim()) {
        valid = false;
        firstNameInput.classList.add('is-invalid');
      } else {
        firstNameInput.classList.remove('is-invalid');
      }
      
      if (!lastNameInput.value.trim()) {
        valid = false;
        lastNameInput.classList.add('is-invalid');
      } else {
        lastNameInput.classList.remove('is-invalid');
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        valid = false;
        emailInput.classList.add('is-invalid');
      } else {
        emailInput.classList.remove('is-invalid');
      }
      
      if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value.trim())) {
        valid = false;
        phoneInput.classList.add('is-invalid');
      } else {
        phoneInput.classList.remove('is-invalid');
      }
      
      if (!passwordInput.value.trim()) {
        valid = false;
        passwordInput.classList.add('is-invalid');
      } else {
        passwordInput.classList.remove('is-invalid');
      }
      
      if (!confirmPasswordInput.value.trim() || confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
        valid = false;
        confirmPasswordInput.classList.add('is-invalid');
      } else {
        confirmPasswordInput.classList.remove('is-invalid');
      }
      
      if (!agreeCheckbox.checked) {
        valid = false;
        agreeCheckbox.classList.add('is-invalid');
      } else {
        agreeCheckbox.classList.remove('is-invalid');
      }
      
      // If the form is valid, submit it
      if (valid) {
        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        
        // Send the form data to the server using fetch or XHR
        fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            email: emailInput.value.trim(),
            phone: phoneInput.value.trim(),
            password: passwordInput.value.trim()
          })
        })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the server
          console.log(data);
          submitButton.disabled = false;
          submitButton.textContent = 'Sign Up';
        })
        .catch(error => {
          // Handle any errors that occurred while sending the form data
          console.error(error);
          submitButton.disabled = false;
          submitButton.textContent = 'Sign Up';
        });
      }
    });
  }
  
  // Helper function to validate an email address
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+
  