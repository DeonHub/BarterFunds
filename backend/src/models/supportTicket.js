const mongoose = require('mongoose');

const supportTicketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ticketId: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    comments: { type: String },
    status: { type: String, enum: ['open', 'closed', 'pending', 'resolved'], default: 'open' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SupportTicket', supportTicketSchema);
