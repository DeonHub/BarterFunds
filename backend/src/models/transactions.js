const mongoose = require('mongoose');

const transactionsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    currencyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Currency', required: true },
    transactionId: { type: String, required: true },
    referenceId: { type: String },
    transactionType: {
        type: String,
        enum: ['buy', 'sell', 'send', 'receive'],
        required: true
      },
    amountGhs: { type: Number, required: true },  
    amountUsd: { type: Number, required: true },
    walletAddress: { type: String },
    sender: { type: String },
    receiver: { type: String },

    paymentSuccess: { type: Boolean, default: false },
    confirmedPayment: { type: Boolean, default: false },

    paymentMethod: {
        type: String,
        enum: ['momo', 'credit-card', 'wallet', 'bank', '']
    },

    receipientMethod: {
        type: String,
        enum: ['momo', 'credit-card', 'wallet', 'bank', '']
    },

    receipientNumber: { type: String },

    status: { type: String, enum: ['active', 'pending', 'success', 'cancelled', 'failed', 'deleted'], default: 'active' },

    action: { type: String },
    paymentProof: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


transactionsSchema.pre('find', function(next) {
    this.populate('userId', '');
    this.populate('currencyId', '')
    next();
});

transactionsSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

transactionsSchema.pre('update', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('Transactions', transactionsSchema);