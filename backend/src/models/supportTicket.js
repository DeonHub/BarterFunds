const mongoose = require('mongoose');

const supportTicketSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ticketId: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    comments: { type: String, default: '' },
    feedback: { type: String, default: '' },
    rating: { type: Number, default: 0 },
    status: { type: String, enum: ['open', 'closed', 'pending', 'resolved', 'deleted'], default: 'open' },
    files: [{ 
        description: String,
        originalName: String,
        path: String,
    }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});


supportTicketSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

supportTicketSchema.pre('update', function(next) {
    this.updatedAt = new Date();
    next();
});


supportTicketSchema.pre('find', function(next) {
    this.populate('userId', '');
    next();
});


module.exports = mongoose.model('SupportTicket', supportTicketSchema);
