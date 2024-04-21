const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your API credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer to use Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // Optional, specify the folder to upload files to
    allowed_formats: ['jpg', 'png', 'jpeg'],
    filename: function(req, file, cb) {
      cb(undefined, file.fieldname + '-' + Date.now());
    }
  }
});


const upload = multer({ storage: storage });

module.exports = {
  upload,
};
