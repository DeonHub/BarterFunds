const mongoose = require('mongoose');

const currencySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    logo: { type: String, required: true },
    code: { type: String, required: true },
    symbol: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive', 'blocked', 'deleted'], default: 'active' },
    reserveAmount: { type: Number, required: true },
    exchangeRate: { type: Number, required: true },
    isBaseCurrency: { type: Boolean, default: false },
    rateShow: { type: Boolean, default: true },

    limitAndCharge: {
        buy: {
            buyAt: { type: Number, required: true },
            availableForBuy: { type: Boolean, default: true },
            minimumBuyAmount: { type: Number, required: true },
            maximumBuyAmount: { type: Number, required: true },
            buyFixedCharge: { type: Number, required: true, default: 0 },
            buyPercentCharge: { type: Number, required: true },
        },
        sell: {
            sellAt: { type: Number, required: true },
            availableForSell: { type: Boolean, default: true },
            minimumSellAmount: { type: Number, required: true },
            maximumSellAmount: { type: Number, required: true },
            sellFixedCharge: { type: Number, required: true, default: 0 },
            sellPercentCharge: { type: Number, required: true },
        },
        send: {
            sendAt: { type: Number, required: true },
            availableForSend: { type: Boolean, default: true },
            minimumSendAmount: { type: Number, required: true },
            maximumSendAmount: { type: Number, required: true },
            sendFixedCharge: { type: Number, required: true, default: 0 },
            sendPercentCharge: { type: Number, required: true },
        },
        receive: {
            receiveAt: { type: Number, required: true },
            availableForReceive: { type: Boolean, default: true },
            minimumReceiveAmount: { type: Number, required: true },
            maximumReceiveAmount: { type: Number, required: true },
            receiveFixedCharge: { type: Number, required: true, default: 0 },
            receivePercentCharge: { type: Number, required: true },
        },
    },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
    
});

module.exports = mongoose.model('Currency', currencySchema);