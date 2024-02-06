const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    shortCode: { type: String, required: true },
    currencyImage: { type: String, required: true },
    exchangeRate: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Currency', currencySchema);