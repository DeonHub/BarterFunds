const express = require("express");
const router = express.Router();

const { 
    Signup, 
    Login, 
    updatePassword,
    accountActivation,
    forgotPassword,
    resetPassword
     } = require('../controllers/auth.controllers');
const checkAuth = require('../middleware/check-auth');


router.post("/signup", Signup);
router.post("/login", Login);
router.get("/account-activation", accountActivation);
router.post("/update-password", checkAuth, updatePassword);

router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


module.exports = router;
