const express = require("express");
const router = express.Router();
const multer = require('multer');
const checkAuth = require('../middleware/check-auth');
const currencyController = require('../controllers/currency.controller');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

router.get("/", currencyController.getCurrencies);

router.post("/", upload.single('currencyImage'), currencyController.createCurrency);

router.get("/:currencyId", currencyController.getCurrencyById);

router.patch("/:currencyId", checkAuth, currencyController.editCurrency);

router.delete("/:currencyId", checkAuth, currencyController.deleteCurrency);

module.exports = router;
