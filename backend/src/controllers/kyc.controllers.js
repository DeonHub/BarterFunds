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



// Function to update KYC details
const updateKYC = (req, res, next) => {
    const id = req.params.kycId;
    const updateOps = {};

    // Check if frontImage is uploaded
    if (req.files && req.files.frontImage) {
        updateOps.frontImage = req.files.frontImage.map(file => file.path);
    }

    // Check if backImage is uploaded
    if (req.files && req.files.backImage) {
        updateOps.backImage = req.files.backImage.map(file => file.path);
    }

    // Check if photograph is uploaded
    if (req.files && req.files.photograph) {
        updateOps.photograph = req.files.photograph.map(file => file.path);
    }

    // Iterate over the other properties of req.body
    for (const propName in req.body) {
        // Exclude frontImage, backImage, and photograph from the update
        if (propName !== 'frontImage' && propName !== 'backImage' && propName !== 'photograph') {
            updateOps[propName] = req.body[propName];
        }
    }

    KYC.updateOne({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                success: true,
                message: "KYC details updated successfully",
                request: {
                    type: "GET",
                    url: `${baseUrl}/kyc/` + id
                }
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
    KYC.remove({ _id: id })
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


const updateKYCStatus = (req, res, next) => {
    const id = req.params.kycId;
    const { status } = req.body;

    // Validate if the status is either "approved" or "rejected"
    if (!status || (status !== "approved" && status !== "rejected" && status !== "reviewing" )) {
        return res.status(400).json({ success: false, message: "Invalid status. Status must be either 'approved', 'rejected' or 'reviewing'." });
    }

    // Update the KYC status
    KYC.updateOne({ _id: id }, { $set: { status: status } })
        .exec()
        .then(result => {
            // If the status is approved, update the corresponding user's kycApproved field
            if (status === "approved") {
                // Get the KYC document
                KYC.findById(id)
                    .exec()
                    .then(kyc => {
                        if (!kyc) {
                            return res.status(404).json({ success: false, message: "KYC document not found." });
                        }
                        // Update the user's kycApproved field to true
                        User.updateOne({ _id: kyc.userId }, { $set: { kycApproved: true } })
                            .exec()
                            .then(() => {
                                res.status(200).json({
                                    success: true,
                                    message: `KYC status updated to ${status} successfully. User's KYC approved.`,
                                    request: {
                                        type: "GET",
                                        url: `${baseUrl}/kyc/${id}`
                                    }
                                });
                            })
                            .catch(err => {
                                console.error(err);
                                res.status(500).json({
                                    success: false,
                                    error: err
                                });
                            });
                    })
                    .catch(err => {
                        console.error(err);
                        res.status(500).json({
                            success: false,
                            error: err
                        });
                    });
            } else {
                // If the status is rejected, just send the response
                res.status(200).json({
                    success: true,
                    message: `KYC status updated to ${status} successfully`,
                    request: {
                        type: "GET",
                        url: `${baseUrl}/kyc/${id}`
                    }
                });
            }
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
    updateKYC,
    deleteKYC,
    getAllKYC,
    getKYCByUserId,
    updateKYCStatus,
    getKYCById
};
