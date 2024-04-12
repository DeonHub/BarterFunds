

    // Function to update the logo display based on the selected currency
    function updateCurrencyLogo() {
      const currencyOption = document.getElementById("sell-currency-option");
      const currencyLogo = document.getElementById("currency-logo");
  
      // Get the selected option value
      const selectedCurrency = currencyOption.value;
  
      // Get the data-logo attribute of the selected option
      const logoPath = currencyOption.options[currencyOption.selectedIndex].getAttribute("data-logo");
  
      // Update the src attribute of the currency-logo element
      currencyLogo.src = logoPath;
      currencyLogo.alt = selectedCurrency + ".png";
    }
  
    // Add an event listener to the currency-option dropdown
    document.getElementById("sell-currency-option").addEventListener("change", updateCurrencyLogo);
  
    // Initial call to set the logo based on the default selected currency
    updateCurrencyLogo();
