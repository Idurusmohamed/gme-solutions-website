require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Resend } = require('resend'); // <-- 1. Import Resend

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY); // <-- 2. Initialize Resend

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Database Schema and Model ---
const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});
const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);


// --- Routes ---
app.get('/', (req, res) => {
  res.send('GME Solutions Backend is running!');
});

// --- UPDATED Endpoint for handling contact form submissions ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log('Received contact form data:', { name, email });

    // Step A: Save the new submission to the database
    const newSubmission = new ContactSubmission({ name, email, message });
    await newSubmission.save();
    console.log('Data saved to database!');

    // --- 3. Step B: Send the email notification ---
    try {
      await resend.emails.send({
        from: 'GME Website <noreply@gmesolutionsllc.com>', // Must be from your verified domain
        to: 'ahmed@gmesolutionsllc.com', // The email address that will receive the notification
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Message from gmesolutionsllc.com</h1>
          <p>You have received a new message via your contact form.</p>
          <hr>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
      console.log('Email notification sent successfully!');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // We don't send an error response here because the data was still saved successfully.
      // We just log the email error on the server.
    }

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