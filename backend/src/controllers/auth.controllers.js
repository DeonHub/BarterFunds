const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../utils/sendMail");
const Users = require("../models/users");
const hostEmail = process.env.EMAIL_HOST_USER;
const baseUrl = process.env.BASE_URL;
const crypto = require('crypto');


const generateUsername = (name) => {
    const randomNumbers = Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit random number
    return name + randomNumbers;
}

const generateToken = (user) => {
    return jwt.sign(
      { email: user.email, userId: user._id },
      process.env.JWT_KEY,
      { expiresIn: "30d" }
    );
  };


const generateCode = () => {
    // Generate a random number between 100000 and 999999
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    
    // Convert the random number to a string and return it
    return randomNumber.toString();
  }

const sendMail = (userEmail, activationToken, subject) => {

// Define email options
const mailOptions = {
    from: hostEmail,
    to: userEmail,
    subject: subject,
    text: `Thank you for registering with BarterFunds!,\n\n\n\n`
    + `To complete your registration and activate your account, please click on the following link:\n\n\n\n`
    + `${baseUrl}/auth/account-activation?token=${activationToken}\n\n\n\n`
    + `If you did not sign up for an account with [Website Name], please disregard this email.\n\n\n`
    + `Thank you.\n\n\n`
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error occurred:", error.message);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
  

}




const Login = async (req, res, next) => {
    try {
      const user = await Users.findOne({ email: req.body.email }).exec();
      const result = await bcrypt.compare(req.body.password, user.password);

      if (!user || !result) {
        return res.status(401).json({ message: "Incorrect username or password" });
      }
  
      const token = generateToken(user);
      res.status(200).json({ message: "Login successful", token, user});
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  


const Signup = async (req, res, next) => {

    try {
      // Check if any required field is missing
      const requiredFields = ['firstname', 'surname', 'email', 'password', 'contact'];

      const missingFields = requiredFields.filter(field => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({
          message: `Missing required fields: ${missingFields.join(', ')}`
        });
      }
  
      // Check if email already exists
      const existingUser = await Users.findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(409).json({
          message: "Mail exists"
        });
      }
  
      // Hash the password
      const hash = await bcrypt.hash(req.body.password, 10);

      // Generate a verification code
      const activationToken = crypto.randomBytes(64).toString('base64');
  
      // Create and save the user
      const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        surname: req.body.surname,
        username: generateUsername(req.body.firstname),
        email: req.body.email,
        password: hash,
        contact: req.body.contact,
        activationToken: activationToken,
        activationTokenExpires: Date.now() + 3600000 
      });
      
      const result = await user.save();
      const subject = "BarterFunds Account Activation";


      // Send the verification code to the user's email
      sendMail(req.body.email, activationToken, subject);

      console.log(result);
      res.status(201).json({
        success: true,
        message: "User created successfully. Activation link sent successfully. Please check your email to verify your account.",
        user: result
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        error: err.message
      });
    }
  };


const accountActivation = (req, res, next) => {
  const activationToken = req.query.token;

  if (!activationToken) {
    return res.status(400).json({ success: false, message: 'Token is required' });
  }

  // Find user by token
  Users.findOne({
    activationToken: activationToken,
    activationTokenExpires: { $gt: Date.now() }
  })
    .then(user => {
      if (!user) {
        return res.status(404).json({ success: false, message: 'Invalid or expired reset token' });
      }

      user.verified = true;
      user.status = 'active';
      user.activationToken = undefined;
      user.activationTokenExpires = undefined;

      // Save the updated user document
      user.save()
        .then(() => {
          res.status(200).json({ success:true, message: 'User account activation successful' });
        })
        .catch(err => {
          console.error('Error activating user account:', err);
          res.status(500).json({ success: false, message: 'Internal server error' });
        });
    })
    .catch(err => {
      console.error('Error activating account:', err);
      res.status(500).json({ success:false, message: 'Internal server error' });
    });
};



const forgotPassword = (req, res, next) => {
  const email = req.body.email;
  const resetToken = crypto.randomBytes(64).toString('base64');

  Users.findOneAndUpdate(
    { email },
    { $set: { resetToken: resetToken, resetTokenExpires: Date.now() + 3600000 } },
    { new: true }
  )
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const mailOptions = {
        from: hostEmail,
        to: user.email,
        subject: 'BarterFunds Account Password Reset Request',
        text: `Greetings from BarterFunds,\n\n\n\n`
          + `We received a request to reset the password for the BarterFunds account associated with this e-mail address. Click the link below to reset your password using our secure server:\n\n\n\n`
          + `${baseUrl}/auth/reset-password?token=${resetToken}\n\n\n\n`
          + `If you did not request this, please ignore this email and your password will remain unchanged.\n\n\n`

      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending password reset email:', error);
          return res.status(500).json({ success:false, message: 'Internal server error' });
        }
        console.log('Password reset email sent:', info.response);
        res.status(200).json({ success:true, message: 'Password reset email sent' });
      });
    })
    .catch(err => {
      console.error('Error processing password reset request:', err);
      res.status(500).json({ success:false, message: 'Internal server error' });
    });
};


const resetPassword = (req, res, next) => {
  const { newPassword } = req.body;
  const token = req.query.token;

  if (!token) {
    return res.status(400).json({ success: false, message: 'Token is required' });
  }

  // Find user by token
  Users.findOne({
    resetToken: token,
    resetTokenExpires: { $gt: Date.now() }
  })
    .then(user => {
      if (!user) {
        return res.status(404).json({ success: false, message: 'Invalid or expired reset token' });
      }

      // Hash the new password
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err;
        }
        bcrypt.hash(newPassword, salt, (err, hash) => {
          if (err) {
            throw err;
          }
          // Update user password with the new hashed password
          user.password = hash;
          user.resetToken = undefined;
          user.resetTokenExpires = undefined;

          // Save the updated user document
          user.save()
            .then(() => {
              res.status(200).json({ success:true, message: 'Password reset successful' });
            })
            .catch(err => {
              console.error('Error updating password:', err);
              res.status(500).json({ success:false, message: 'Internal server error' });
            });
        });
      });
    })
    .catch(err => {
      console.error('Error resetting password:', err);
      res.status(500).json({ success:false, message: 'Internal server error' });
    });
};



const updatePassword = async (req, res, next) => {
    try {

        const userId = req.user.userId;

        // Fetch the user from the database
        const user = await Users.findById(userId);

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        // Hash the new password
        const hashedPassword = await bcrypt.hash(req.body.newPassword, 10);

        // Update the user's password
        
        user.password = hashedPassword;
        await user.save();

        // Optionally, you can send a success message
        return res.status(200).json({ message: 'Password updated successfully' });
    } catch (error) {

        console.error('Error updating password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    Login,
    Signup,
    updatePassword,
    accountActivation,
    forgotPassword,
    resetPassword
}  
