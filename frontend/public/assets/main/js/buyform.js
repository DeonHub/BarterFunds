// Define currency exchange rates
const exchangeRates = {
  PAYPAL: 11.00,
  BTC: 12.50,
  USDT: 12.00
};

// Get input and output elements
const currencyElement = document.getElementById("currency");
const amountToBuyElement = document.getElementById("amount-to-buy");
const buyExchangeRateElement = document.getElementById("buy-exchange-rate");
const amountToPayGHSElement = document.getElementById("amount-to-pay-ghs");
const transactionFeeElement = document.getElementById("transaction-fee");
const totalToPayElement = document.getElementById("total-to-pay");
const bitcoinWalletElement = document.getElementById("bitcoin-wallet");
const paymentOptionElement = document.getElementById("payment-option");
const agreeToTermsElement = document.getElementById("agree-to-terms");

// Add event listeners to update output values
currencyElement.addEventListener("change", updateOutputValues);
amountToBuyElement.addEventListener("input", updateOutputValues);

function updateOutputValues() {
  // Get selected currency and exchange rate
  const currency = currencyElement.value;
  const exchangeRate = exchangeRates[currency];
  
  // Calculate output values
  const amountToBuy = parseFloat(amountToBuyElement.value);
  const amountToPayGHS = amountToBuy * exchangeRate;
  const transactionFee = amountToPayGHS * 0.03;
  const totalToPay = amountToPayGHS + transactionFee;
  
  // Update output elements
  buyExchangeRateElement.value = exchangeRate.toFixed(2);
  amountToPayGHSElement.value = amountToPayGHS.toFixed(2);
  transactionFeeElement.value = transactionFee.toFixed(2);
  totalToPayElement.value = totalToPay.toFixed(2);
}

// Add event listener to submit button
const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", sendDataToServer);

function sendDataToServer(event) {
  event.preventDefault();
  
  // Get input values
  const currency = currencyElement.value;
  const amountToBuy = parseFloat(amountToBuyElement.value);
  const bitcoinWallet = bitcoinWalletElement.value;
  const paymentOption = paymentOptionElement.value;
  const agreeToTerms = agreeToTermsElement.checked;
  
  // Get output values
  const exchangeRate = parseFloat(buyExchangeRateElement.value);
  const amountToPayGHS = parseFloat(amountToPayGHSElement.value);
  const transactionFee = parseFloat(transactionFeeElement.value);
  const totalToPay = parseFloat(totalToPayElement.value);
  
  // Send data to server
  const data = {
    currency,
    amountToBuy,
    exchangeRate,
    amountToPayGHS,
    transactionFee,
    totalToPay,
    bitcoinWallet,
    paymentOption,
    agreeToTerms
  };
  
  fetch("https://example.com/api/buy", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    alert("Data sent to server successfully");
  })
  .catch(error => {
    console.error("Error sending data to server:", error);
    alert("An error occurred while sending data to server");
  });
}

//Bitcoin address validator
function isBitcoinAddressValid(address) {
  if (address.length !== 34) {
    return false;
  }
  if (!address.match(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/)) {
    return false;
  }
  return true;
}

//Paypal email validator
function isPayPalEmailValid(email) {
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    return false;
  }
  if (!email.endsWith('@paypal.com')) {
    return false;
  }
  return true;
}

//USDT address validator
function isUsdtAddressValid(address) {
  if (address.length !== 34) {
    return false;
  }
  if (!address.match(/^0x[0-9a-fA-F]{40}$/)) {
    return false;
  }
  return true;
}
