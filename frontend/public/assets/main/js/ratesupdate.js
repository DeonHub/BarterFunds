
  // Function to update exchange rates in the buy form
  function updateExchangeRatesBuy() {
    const usdAmountBuy = parseFloat(document.getElementById("usd-amount-buy").value);
    const exchangeRateBuy = 11.5; // Replace this with the actual exchange rate for buying currency
    const amountToPayBuy = usdAmountBuy * exchangeRateBuy;

    document.getElementById("amount-to-pay-buy").value = amountToPayBuy.toFixed(2);
  }

  // Function to update exchange rates in the sell form
  function updateExchangeRatesSell() {
    const usdAmountSell = parseFloat(document.getElementById("usd-amount-sell").value);
    const exchangeRateSell = 11.8; // Replace this with the actual exchange rate for selling currency
    const amountToGetSell = usdAmountSell * exchangeRateSell;

    document.getElementById("amount-to-get-sell").value = amountToGetSell.toFixed(2);
  }

  // Function to update exchange rates in the pay form
  function updateExchangeRatesPay() {
    const usdAmountPay = parseFloat(document.getElementById("usd-amount-pay").value);
    const exchangeRatePay = 11.7; // Replace this with the actual exchange rate for paying currency
    const amountToPayPay = usdAmountPay * exchangeRatePay;

    document.getElementById("amount-to-pay-pay").value = amountToPayPay.toFixed(2);
  }

  // Add event listeners to the input fields to trigger exchange rate updates
  document.getElementById("usd-amount-buy").addEventListener("input", updateExchangeRatesBuy);
  document.getElementById("usd-amount-sell").addEventListener("input", updateExchangeRatesSell);
  document.getElementById("usd-amount-pay").addEventListener("input", updateExchangeRatesPay);

  // Initial call to set the exchange rates for the buy form
  updateExchangeRatesBuy();
  updateExchangeRatesSell();
  updateExchangeRatesPay();

