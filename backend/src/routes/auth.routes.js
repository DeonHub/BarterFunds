const express = require("express");
const router = express.Router();

const { Signup, Login, updatePassword } = require('../controllers/auth.controllers');
const checkAuth = require('../middleware/check-auth');


router.post("/signup", Signup);
router.post("/login", Login);
router.post("/verify-email", verifyEmail);
router.post("/update-password", checkAuth, updatePassword);


module.exports = router;
