const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    logo: { type: String, required: true },
    code: { type: String, required: true },
    symbol: { type: String, required: true },
    country: { type: String },
    decimalPlaces: { type: String },
    status: { type: String, enum: ['active', 'inactive', 'blocked', 'deleted'], default: 'active' },
    exchangeRate: { type: Number, required: true },
    isBaseCurrency: { type: Boolean, default: false },

    minimumBuyAmount: { type: Number, required: true },
    maximumBuyAmount: { type: Number, required: true },
    minimumSellAmount: { type: Number, required: true },
    maximumSellAmount: { type: Number, required: true },

    availableForBuy: { type: Boolean, default: true },
    availableForSell: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Currency', currencySchema);