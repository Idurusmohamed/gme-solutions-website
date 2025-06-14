// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
// Enable CORS for all routes, allowing your React app to communicate with this server.
app.use(cors()); 
// Allow the server to parse incoming JSON data.
app.use(express.json()); 

// --- Routes ---
// A simple test route to make sure the server is working.
app.get('/', (req, res) => {
  res.send('GME Solutions Backend is running!');
});

// Endpoint for handling contact form submissions
app.post('/api/contact', (req, res) => {
  console.log('Received contact form data:', req.body);
  // For now, we just log the data and send a success message back.
  res.status(200).json({ message: 'Form data received successfully!' });
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});