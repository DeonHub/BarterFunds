// Assuming you have the buying and selling rates available in variables

// Example rates for PayPal
const paypalBuyingRate = 9.0;
const paypalSellingRate = 11.5;

// Example rates for BTC (Bitcoin)
const btcBuyingRate = 11.8;
const btcSellingRate = 12.5;

// Example rates for USDT (Tether)
const usdtBuyingRate = 11.7;
const usdtSellingRate = 12.3;

// Example rates for RMB (Chinese Yuan)
const rmbBuyingRate = 0.57;
const rmbSellingRate = 0.55;

// Update the rates in the HTML
document.getElementById('paypalBuyingRate').textContent = paypalBuyingRate;
document.getElementById('paypalSellingRate').textContent = paypalSellingRate;

document.getElementById('btcBuyingRate').textContent = btcBuyingRate;
document.getElementById('btcSellingRate').textContent = btcSellingRate;

document.getElementById('usdtBuyingRate').textContent = usdtBuyingRate;
document.getElementById('usdtSellingRate').textContent = usdtSellingRate;

document.getElementById('rmbBuyingRate').textContent = rmbBuyingRate;
document.getElementById('rmbSellingRate').textContent = rmbSellingRate;
