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

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});