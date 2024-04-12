//BUY THRESHOLD
document.getElementById('buy-currency-option').addEventListener('change', function() {
    var currencyOption = this.value;
    var thresholdElement = document.getElementById('threshold');
  
    // Define the minimum and maximum values for each currency
    var thresholds = {
      paypal: { min: 10, max: 1000 },
      btc: { min: 50, max: 5000 },
      usdt: { min: 50, max: 5000 },
      rmb: { min: 200, max: 2000 }
    };
  
    // Retrieve the minimum and maximum values for the selected currency
    var currencyThreshold = thresholds[currencyOption];
  
    // Update the threshold element with the new values
    thresholdElement.textContent = currencyThreshold.min + ' - ' + currencyThreshold.max;
  });
  
  //SELL THRESHOLD
  document.getElementById('sell-currency-option').addEventListener('change', function() {
    var currencyOption = this.value;
    var thresholdElement = document.getElementById('threshold');
  
    // Define the minimum and maximum values for each currency
    var thresholds = {
      paypal: { min: 10, max: 1000 },
      btc: { min: 50, max: 5000 },
      usdt: { min: 50, max: 5000 },
      rmb: { min: 200, max: 2000 }
    };
  
    // Retrieve the minimum and maximum values for the selected currency
    var currencyThreshold = thresholds[currencyOption];
  
    // Update the threshold element with the new values
    thresholdElement.textContent = currencyThreshold.min + ' - ' + currencyThreshold.max;
  });
  
  //BUY THRESHOLD
  document.getElementById('pay-currency-option').addEventListener('change', function() {
    var currencyOption = this.value;
    var thresholdElement = document.getElementById('threshold');
  
    // Define the minimum and maximum values for each currency
    var thresholds = {
      paypal: { min: 10, max: 1000 },
      btc: { min: 50, max: 5000 },
      usdt: { min: 50, max: 5000 },
      rmb: { min: 200, max: 2000 }
    };
  
    // Retrieve the minimum and maximum values for the selected currency
    var currencyThreshold = thresholds[currencyOption];
  
    // Update the threshold element with the new values
    thresholdElement.textContent = currencyThreshold.min + ' - ' + currencyThreshold.max;
  });
  
  
  