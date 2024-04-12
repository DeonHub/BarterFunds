
// Add an event listener to the currency option select element
var currencyOptionSelect = document.getElementById('currency-option');
currencyOptionSelect.addEventListener('change', function() {
  // Get the selected currency option
  var selectedCurrencyOption = currencyOptionSelect.options[currencyOptionSelect.selectedIndex];
  
  // Get the image element in the logo-display
  var logoDisplayImage = document.getElementById('currency-logo');
  
  // Update the source of the image with the selected currency's logo
  logoDisplayImage.src = selectedCurrencyOption.getAttribute('data-logo');
});


// Add an event listener to the currency option select element
var currencyOptionSelect = document.getElementById('sell-currency-option');
currencyOptionSelect.addEventListener('change', function() {
  // Get the selected currency option
  var selectedCurrencyOption = currencyOptionSelect.options[currencyOptionSelect.selectedIndex];
  
  // Get the image element in the logo-display
  var logoDisplayImage = document.getElementById('sell-currency-logo');
  
  // Update the source of the image with the selected currency's logo
  logoDisplayImage.src = selectedCurrencyOption.getAttribute('data-logo');
});