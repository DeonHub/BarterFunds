const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const transporter = require("../utils/sendMail");
const Users = require("../models/users");
const hostEmail = process.env.EMAIL_HOST_USER;


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

const sendMail = (userEmail, code, subject) => {

    // Define email options
const mailOptions = {
    from: hostEmail,
    to: userEmail,
    subject: subject,
    text: "Your verification code is " + code,
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
      const code = generateCode();
  
      // Create and save the user
      const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        firstname: req.body.firstname,
        surname: req.body.surname,
        username: generateUsername(req.body.firstname),
        email: req.body.email,
        password: hash,
        contact: req.body.contact,
        verificationCode: code
      });
      const result = await user.save();
      const subject = "Account Verification";


      // Send the verification code to the user's email
      sendMail(req.body.email, code, subject);

      console.log(result);
      res.status(201).json({
        success: true,
        message: "User created successfully. Vefication code has been sent to your email. Please check your email to verify your account.",
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



const verifyEmail = (req, res, next) => {
  const email = req.body.email;
  const verificationCode = req.body.verificationCode;

  // Find the user by email
  Users.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Check if the verification code matches
      if (user.verificationCode !== verificationCode) {
        return res.status(400).json({ message: 'Incorrect verification code' });
      }

      // Update user's verified status and status to active
      user.verified = true;
      user.status = 'active';
      user.verificationCode = null;

      // Save the updated user
      return user.save();
    })
    .then(updatedUser => {
      res.status(200).json({ message: 'Email verified successfully', user: updatedUser });
    })
    .catch(err => {
      console.error('Error verifying email:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
};



// const forgotPassword = (req, res, next) => {
//   const email = req.body.email;

//   // Find the user by email
//   Users.findOne({ email })
//     .then(user => {
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }

//       // Generate a random verification code
//     //   const verificationCode = generateVerificationCode();

//       // Save the verification code to the user's document
//       user.verificationCode = verificationCode;
//       return user.save();
//     })
//     .then(user => {
//       // Send email with verification code
//       sendVerificationEmail(user.email, user.verificationCode);
//       res.status(200).json({ message: 'Verification code sent successfully' });
//     })
//     .catch(err => {
//       console.error('Error sending verification code:', err);
//       res.status(500).json({ message: 'Internal server error' });
//     });
// };


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
    verifyEmail
    // forgotPassword
}  
