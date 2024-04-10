const mongoose = require('mongoose');
const User = require("./users");

const kycSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    nationality: { type: String, required: true },
    residentialAddress: { type: String, required: true },
    postalAddress: { type: String, required: true },
    identityDocumentType: { type: String, required: true },
    identityDocumentNumber: { type: String, required: true },
    issueDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    issuingAuthority: { type: String, required: true },
    photograph: { type: String, required: true },
    frontImage: { type: String, required: true },
    backImage: { type: String, required: true },
    proofOfAddress: { type: String, required: true },
    kycReviewer: { type: String, default: "Admin" },
    status: { type: String, enum: ['pending', 'reviewing', 'approved', 'rejected'], default: 'pending' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('KYC', kycSchema);
