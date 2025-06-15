require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // <-- Import mongoose

const app = express();
const PORT = process.env.PORT || 3001;

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Database Schema and Model ---
// A Schema defines the structure of our documents in the database.
const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

// A Model is a wrapper that lets us interact with a specific collection in the DB.
const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);


// --- Routes ---
app.get('/', (req, res) => {
  res.send('GME Solutions Backend is running!');
});

// --- UPDATED Endpoint for handling contact form submissions ---
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received contact form data:', req.body);

    // Create a new submission document using our Model
    const newSubmission = new ContactSubmission({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    // Save the new document to the database
    await newSubmission.save();

    console.log('Data saved to database!');
    res.status(200).json({ message: 'Form data received and saved successfully!' });

  } catch (error) {
    console.error('Error saving to database:', error);
    res.status(500).json({ message: 'Failed to save form data.' });
  }
});

// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});