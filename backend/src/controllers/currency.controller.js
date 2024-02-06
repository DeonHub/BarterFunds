const mongoose = require("mongoose");
const Currency = require("../models/currency");

const getCurrencies = (req, res, next) => {
  Currency.find()
    .select("_id name shortCode currencyImage exchangeRate createdAt")
    .exec()
    .then(result => {
      const response = {
        success: true,
        count: result.length,
        currencies: result.map(currency => {
          return {
            _id: currency._id,
            name: currency.name,
            shortCode: currency.shortCode,
            currencyImage: currency.currencyImage,
            exchangeRate: currency.exchangeRate,
            createdAt: currency.createdAt,
            request: {
              type: "GET",
              url: "http://localhost:3000/currencies/" + currency._id
            }
          };
        })
      };
      res.status(200).json(response);
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
    shortCode: req.body.shortCode,
    exchangeRate: req.body.exchangeRate,
    currencyImage: req.file.path
  });
  currency
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        success: true,
        message: "Currency created successfully",
        createdCurrency: {
          _id: result._id,
          name: result.name,
          shortCode: result.shortCode,
          currencyImage: result.currencyImage,
          exchangeRate: result.exchangeRate,
          createdAt: result.createdAt,
          request: {
            type: "GET",
            url: "http://localhost:3000/currencies/" + result._id
          }
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

const getCurrencyById = (req, res, next) => {
  const id = req.params.currencyId;
  Currency.findById(id)
    .select("_id name shortCode currencyImage exchangeRate createdAt")
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json({
          success: true,
          currency: doc,
          request: {
            type: "GET",
            url: "http://localhost:3000/currencies"
          }
        });
      } else {
        res
          .status(404)
          .json({ success:false, message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({success:false, error: err });
    });
};

const editCurrency = (req, res, next) => {
  const id = req.params.currencyId;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Currency.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "Currency updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/currencies/" + id
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
          url: "http://localhost:3000/currencies",
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
  deleteCurrency
};