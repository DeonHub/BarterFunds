const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Use port and dbUrl as needed in your application
app.listen(port, () => {
  console.log('Server running on port 3000');
});