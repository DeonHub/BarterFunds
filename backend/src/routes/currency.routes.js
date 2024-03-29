const express = require("express");
const router = express.Router();
const { upload } = require('../utils/fileUpload');
const checkAuth = require('../middleware/check-auth');

const { 
  getCurrencies,
  createCurrency,
  getCurrencyById,
  editCurrency,
  deleteCurrency,
  deactivateCurrency
   } = require('../controllers/currency.controllers');


router.get("/", checkAuth, getCurrencies);
router.post("/", upload.single('logo'), checkAuth, createCurrency);
router.get("/:currencyId", checkAuth, getCurrencyById);
router.patch("/:currencyId", upload.single('logo'), checkAuth, editCurrency);
router.delete("/:currencyId", checkAuth, deleteCurrency);
router.patch("/:currencyId", checkAuth, deactivateCurrency);

module.exports = router;
