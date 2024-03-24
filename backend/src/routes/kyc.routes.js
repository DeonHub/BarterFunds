const express = require("express");
const router = express.Router();
const { upload } = require('../utils/fileUpload');
const checkAuth = require('../middleware/check-auth');

const { 
    addKYC,
    updateKYC,
    deleteKYC,
    getAllKYC,
    getKYCByUserId,
    updateKYCStatus,
    getKYCById
   } = require('../controllers/kyc.controllers');


router.get("/", checkAuth, getAllKYC);
router.post("/", upload.fields([ { name: 'frontImage', maxCount: 1 },  { name: 'backImage', maxCount: 1 }, { name: 'photograph', maxCount: 1 } ]), checkAuth, addKYC);
router.get("/:kycId", checkAuth, getKYCById);
router.get("/:userId", checkAuth, getKYCByUserId);
router.patch("/:kycId", upload.fields([ { name: 'frontImage', maxCount: 1 },  { name: 'backImage', maxCount: 1 }, { name: 'photograph', maxCount: 1 } ]), checkAuth, updateKYC);
router.delete("/:kycId", checkAuth, deleteKYC);
router.patch("/:kycId", checkAuth, updateKYCStatus);

module.exports = router;
