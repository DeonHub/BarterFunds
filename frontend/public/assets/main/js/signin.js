// Access the form fields
const form = document.querySelector('form');
const emailInput = document.getElementById('floatingInput');
const passwordInput = document.getElementById('Password');

// Add event listener to the form's submit button
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Call the validation function
  if (validateForm()) {
    form.submit();
  }
});

// Define the validation function
function validateForm() {
  if (emailInput.value.trim() === '') {
    alert('Email field is required');
    emailInput.focus();
    return false;
  }

  if (passwordInput.value.trim() === '') {
    alert('Password field is required');
    passwordInput.focus();
    return false;
  }

  return true;
}





        function init() {
          // Load the Google Sign-In API library
          gapi.load('auth2', function() {
            // Initialize the API with your Google client ID
            gapi.auth2.init({
              client_id: '291882936081-44r9mrgebgvl0rrai2vk58prdgfn5p69.apps.googleusercontent.com',
            });
      
            // Get the current user
            var user = gapi.auth2.getAuthInstance().currentUser.get();
      
            // Check if the user is signed in
            if (user.isSignedIn()) {
              // User is authenticated, show the dashboard content
              document.getElementById('dashboard-content').classList.remove('hidden');
            } else {
              // User is not authenticated, show the login form
              document.getElementById('login-form').classList.remove('hidden');
      
              // Handle the login form submission
              document.getElementById('login-form').addEventListener('submit', function(event) {
                event.preventDefault();
      
                // Get the email and password from the form
                var email = document.getElementById('email').value;
                var password = document.getElementById('password').value;
      
                // Authenticate the user with your authentication API
                // Replace this with your own authentication API endpoint
                fetch('/authenticate', {
                  method: 'POST',
                  body: JSON.stringify({
                    email: email,
                    password: password,
                  }),
                  headers: {
                    'Content-Type': 'application/json',
                  },
                })
                .then(function(response) {
                  // Handle the authentication response
                  if (response.status === 200) {
                    // Authentication successful, show the dashboard content
                    document.getElementById('dashboard-content').classList.remove('hidden');
                    document.getElementById('login-form').classList.add('hidden');
                  } else {
                    // Authentication failed, display an error message
                    alert('Authentication failed. Please try again.');
                  }
                })
                .catch(function(error) {
                  // Handle any errors that occur during the authentication process
                  console.error(error);
                  alert('An error occurred while authenticating. Please try again later.');
                });
              });
            }
          });
        }
      