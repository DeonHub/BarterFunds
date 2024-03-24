const mongoose = require("mongoose");
const Currency = require("../models/currency");
const baseUrl = process.env.BASE_URL;


const getCurrencies = (req, res, next) => {
  const filter = req.query;

  Currency.find(filter)
    .exec()
    .then(currencies => {
      res.status(200).json({
        success: true,
        currencies: currencies
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: false,
        error: err
      });
    });
};


const createCurrency = (req, res, next) => {
  const currency = new Currency({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    logo: req.file.path,
    code: req.body.code,
    symbol: req.body.symbol,
    country: req.body.country,
    decimalPlaces: req.body.decimalPlaces,
    exchangeRate: req.body.exchangeRate,
    minimumBuyAmount: req.body.minimumBuyAmount,
    maximumBuyAmount: req.body.maximumBuyAmount,
    minimumSellAmount: req.body.minimumSellAmount,
    maximumSellAmount: req.body.maximumSellAmount,
    availableForBuy: req.body.availableForBuy,
    availableForSell: req.body.availableForSell
  });
  currency
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        success: true,
        message: "Currency created successfully",
        createdCurrency: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: false,
        error: err
      });
    });
};


const getCurrencyById = (req, res, next) => {
  const id = req.params.currencyId;
  Currency.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};



const editCurrency = (req, res, next) => {
  const id = req.params.currencyId;
  const updateOps = {};

  if (req.file) {
    updateOps.logo = req.file.path;
  }

  // Iterate over the properties of req.body
  for (const propName in req.body) {
    // Check if the property is not inherited from the prototype chain
    if (Object.prototype.hasOwnProperty.call(req.body, propName)) {
      updateOps[propName] = req.body[propName];
    }
  }

  Currency.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Currency updated",
        request: {
          type: "GET",
          url: `${baseUrl}/currencies/` + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};


const deleteCurrency = (req, res, next) => {

  const id = req.params.currencyId;
  Currency.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        success: true,
        message: "Currency deleted",
        request: {
          type: "POST",
          url: `${baseUrl}/currencies`,
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: false,
        error: err
      });
    });
};

const deactivateCurrency = (req, res, next) => {
  const id = req.params.currencyId;
  
  Currency.updateOne({ _id: id }, { $set: { status: 'inactive' } })
    .exec()
    .then(result => {
      res.status(200).json({
        success: true,
        message: "Currency deactivated",
        request: {
          type: "GET",
          url: `${baseUrl}/currencies/` + id
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: false,
        error: err
      });
    });
};



module.exports = {
  getCurrencies,
  createCurrency,
  getCurrencyById,
  editCurrency,
  deleteCurrency,
  deactivateCurrency
};