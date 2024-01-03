const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());


// Secret key for JWT
const secretKey = 'qwertyuiop';

// Sample user data (should come from a database)
const users = [
  { id: 1, username: 'example', password: 'password' }
];

// Endpoint to generate token on user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if user credentials are valid (e.g., in your database)
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  // Generate a JWT token
  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
  res.json({ token });
  
});


// Middleware function to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token missing.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token.' });
    }
    req.user = decoded; // Decoded token payload (user information)
    next();
  });
};


// Example protected route
app.get('/hello', authenticateToken, (req, res) => {
  // Accessible only if token is valid
  res.json({ message: 'This is a protected route.', user: req.user });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});