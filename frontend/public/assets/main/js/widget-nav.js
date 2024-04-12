// Get all navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove the 'active' class from all navigation links
    navLinks.forEach(navLink => {
      navLink.classList.remove('active');
    });

    // Add the 'active' class to the clicked navigation link
    this.classList.add('active');
  });
});

