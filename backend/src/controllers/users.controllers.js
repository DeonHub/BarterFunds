const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Users = require("../models/users");

const getUsers = (req, res, next) => {
  Users.find()
    .select("_id firstname surname username email contact status verified createdAt")
    .exec()
    .then(result => {
      const response = {
        success: true,
        count: result.length,
        users: result.map(user => {
          return {
            _id: user._id,
            firstname: user.firstname,
            surname: user.surname,
            username: user.username,
            email: user.email,
            contact: user.contact,
            createdAt: user.createdAt,
            request: {
              type: "GET",
              url: `${process.env.BASE_URL}/users/${user._id}`
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

const getUser = async (req, res, next) => {
  const userId = req.params.userId;
  let user;

  try {
    if (mongoose.Types.ObjectId.isValid(userId)) {
      // If userId is a valid ObjectId
      user = await Users.findById(userId)
        .select("_id firstname surname username email contact status verified createdAt")
        .exec();
    } else {
      // If userId is not a valid ObjectId
      user = await Users.findOne({ username: userId })
        .select("_id firstname surname username email contact status verified createdAt")
        .exec();
    }

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No valid entry found for provided user ID"
      });
    }

    res.status(200).json({
      success: true,
      user: user,
      request: {
        type: "GET",
        url: `${process.env.BASE_URL}/users`
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};


const editUser = (req, res, next) => {
  const id = req.params.userId;
  const updateOps = {};
  
  // Check if the request body is an array
  if (!Array.isArray(req.body)) {
    return res.status(400).json({
      error: "Invalid request body format. Expected an array."
    });
  }
  
  // Loop through each item in the request body array
  req.body.forEach(ops => {
    // Check if the item has the required properties
    if (!ops.propName || !ops.value) {
      return res.status(400).json({
        error: "Each item in the request body array must have 'propName' and 'value' properties."
      });
    }
    
    // Add the property and value to the updateOps object
    updateOps[ops.propName] = ops.value;
  });
  
  // Update the user document
  Users.updateOne({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: "User details updated",
        request: {
          type: "GET",
          url: `${process.env.BASE_URL}/users/${id}`
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


const deleteUser = (req, res, next) => {

  const id = req.params.currencyId;
  Users.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json({
        success: true,
        message: "User deleted",
        request: {
          type: "POST",
          url: `${process.env.BASE_URL}/users`,
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


const blockUser = (req, res, next) => {
  const userId = req.params.userId;

  Users.updateOne({ _id: userId }, { status: 'blocked' })
    .exec()
    .then(result => {
      res.status(200).json({
        success: true,
        message: "User blocked",
        request: {
          type: "GET",
          url: `${process.env.BASE_URL}/users/${userId}`
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
  getUsers,
  getUser,
  editUser,
  deleteUser,
  blockUser
};
