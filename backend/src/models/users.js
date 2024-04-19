const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, default: 'user1234'},
    profilePicture: { type: String, default: '/uploads/profile.jpeg' },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    contact: { type: String, required: true },
    status: { type: String, enum: ['active', 'inactive', 'blocked', 'deleted'], default: 'inactive' },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String },
    isAdmin: { type: Boolean, default: false },
    twoFactorAuth: { type: Boolean, default: false },
    twoFactorAuthSecretKey: { type: String },
    twoFactorAuthQrcode: { type: String },
    kycApproved: { type: Boolean, default: false },
    activationToken: { type: String, default: "" },
    activationTokenExpires: { type: Date },
    resetToken: { type: String, default: "" },
    resetTokenExpires: { type: Date },
    createdAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model('User', userSchema);