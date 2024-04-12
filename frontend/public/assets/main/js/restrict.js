window.addEventListener('DOMContentLoaded', function() {
  var footerContainer = document.querySelector('#footer .container');
  
  function alignColumns() {
    if (window.innerWidth < 768) {
      footerContainer.classList.add('align-horizontal');
    } else {
      footerContainer.classList.remove('align-horizontal');
    }
  }
  
  // Initial alignment check
  alignColumns();
  
  // Realign columns on window resize
  window.addEventListener('resize', alignColumns);
});
