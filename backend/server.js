require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3001;
const resend = new Resend(process.env.RESEND_API_KEY);

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// --- Database Schemas and Models ---

// MODEL 1: For Contact Form Submissions
const contactSubmissionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});
const ContactSubmission = mongoose.model('ContactSubmission', contactSubmissionSchema);

// MODEL 2: For Quote Request Submissions (NEW)
const quoteSubmissionSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    companyName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    pickupLocation: { type: String, required: true },
    deliveryLocation: { type: String, required: true },
    freightDescription: { type: String, required: true },
    weightDimensions: { type: String, required: true },
    preferredPickupDate: { type: String },
    specialHandling: { type: String },
    submittedAt: { type: Date, default: Date.now },
});
const QuoteSubmission = mongoose.model('QuoteSubmission', quoteSubmissionSchema);


// --- Routes ---
app.get('/', (req, res) => {
  res.send('GME Solutions Backend is running!');
});

// ROUTE 1: For Contact Form
app.post('/api/contact', async (req, res) => {
    // ... (This route remains the same)
    try {
        const { name, email, message } = req.body;
        const newSubmission = new ContactSubmission({ name, email, message });
        await newSubmission.save();
        console.log('Contact data saved to database!');
        await resend.emails.send({
            from: 'GME Website <noreply@gmesolutionsllc.com>',
            to: 'ahmed@gmesolutionsllc.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        });
        res.status(200).json({ message: 'Form data received and saved.' });
    } catch (error) {
        console.error('Error in /api/contact route:', error);
        res.status(500).json({ message: 'Failed to process contact form data.' });
    }
});

// ROUTE 2: For Quote Request Form (NEW)
app.post('/api/quote', async (req, res) => {
    try {
        const formData = req.body;
        console.log('Received quote request data:', formData.fullName);

        const newQuoteSubmission = new QuoteSubmission(formData);
        await newQuoteSubmission.save();
        console.log('Quote data saved to database!');

        await resend.emails.send({
            from: 'GME Website <noreply@gmesolutionsllc.com>',
            to: 'ahmed@gmesolutionsllc.com',
            subject: `New Quote Request from ${formData.fullName} (${formData.companyName})`,
            html: `
                <h1>New Quote Request</h1>
                <p><strong>Name:</strong> ${formData.fullName}</p>
                <p><strong>Company:</strong> ${formData.companyName}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
                <hr>
                <p><strong>Pickup:</strong> ${formData.pickupLocation}</p>
                <p><strong>Delivery:</strong> ${formData.deliveryLocation}</p>
                <p><strong>Freight:</strong> ${formData.freightDescription}</p>
                <p><strong>Weight/Dims:</strong> ${formData.weightDimensions}</p>
                <p><strong>Pickup Date:</strong> ${formData.preferredPickupDate || 'Not specified'}</p>
                <p><strong>Special Handling:</strong> ${formData.specialHandling || 'None'}</p>
            `,
        });
        console.log('Quote email notification sent successfully!');
        res.status(200).json({ message: 'Quote request received and saved.' });
    } catch (error) {
        console.error('Error in /api/quote route:', error);
        res.status(500).json({ message: 'Failed to process quote request data.' });
    }
});


// --- Start the Server ---
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});