const mongoose = require("mongoose");
const KYC = require("../models/kyc");
const baseUrl = process.env.BASE_URL;


// Function to add KYC details
const addKYC = (req, res, next) => {

    const userId = req.user.userId;

    const kyc = new KYC({
        _id: new mongoose.Types.ObjectId(),
        userId: userId,
        firstname: req.body.firstname,
        surname: req.body.surname,
        dateOfBirth: req.body.dateOfBirth,
        nationality: req.body.nationality,
        residentialAddress: req.body.residentialAddress,
        postalAddress: req.body.postalAddress,
        identityDocumentType: req.body.identityDocumentType,
        identityDocumentNumber: req.body.identityDocumentNumber,
        issueDate: req.body.issueDate,
        expiryDate: req.body.expiryDate,
        issuingAuthority: req.body.issuingAuthority,
        photograph: req.files['photograph'][0]['path'],
        frontImage: req.files['frontImage'][0]['path'],
        backImage: req.files['backImage'][0]['path'],
        proofOfAddress: req.files['proofOfAddress'][0]['path'],
        status: req.body.status
    });

    kyc.save()
        .then(result => {
            res.status(201).json({
                success: true,
                message: "KYC details added successfully",
                createdKYC: result
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                success: false,
                error: err
            });
        });
};


// Function to delete KYC details
const deleteKYC = (req, res, next) => {
    const id = req.params.kycId;
    KYC.deleteOne({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "KYC details deleted successfully"
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

// Function to get all KYC details
const getAllKYC = (req, res, next) => {
    const filter = req.query;

    KYC.find(filter)
        .exec()
        .then(docs => {
            res.status(200).json({
                success: true,
                count: docs.length,
                kycDetails: docs
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                success: false,
                error: err
            });
        });
};

// Function to get KYC details by user ID
const getKYCByUserId = (req, res, next) => {
    const userId = req.params.userId;
    KYC.find({ userId: userId })
        .exec()
        .then(docs => {
            res.status(200).json({
                success: true,
                count: docs.length,
                kycDetails: docs
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({
                success: false,
                error: err
            });
        });
};




const getKYCById = (req, res, next) => {
    const id = req.params.kycId;
    KYC.findById(id)
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
  

module.exports = {
    addKYC,
    deleteKYC,
    getAllKYC,
    getKYCByUserId,
    getKYCById
};
