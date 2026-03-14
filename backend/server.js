require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// --- NEW SECURITY PACKAGES ---
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();

// --- SECURITY MIDDLEWARE PIPELINE ---

// 1. Helmet: Hides your Express server details and secures HTTP headers
app.use(helmet());

// 2. Strict CORS: Only allows your specific frontend URL to talk to this database
const corsOptions = {
    origin: 'https://mian-m-jahanzaib.onrender.com', // Blocks all other websites
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// 3. Body Parser Limit: Prevents attackers from sending massive 50MB payloads to crash your server
app.use(express.json({ limit: '10kb' }));

// 5. Rate Limiter: Stops spam bots. Maximum 5 messages per IP address every 15 minutes.
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5,
    message: { success: false, message: "Too many messages sent from this IP, please try again later." }
});
// Apply the rate limiter strictly to the contact route
app.use('/api/contact', apiLimiter);


// --- DATABASE CONNECTION ---
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// --- STEP 1: Define the Schema (Now with strict data limits) ---
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxLength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, required: true, trim: true, maxLength: 200 },
  message: { type: String, required: true, trim: true, maxLength: 2000 },
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// --- STEP 2: Create the API Route ---
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Extra validation layer just in case
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, message: "All fields are required." });
    }

    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    res.status(201).json({ success: true, message: "Message Sent Successfully!" });
    console.log("📩 New Message Saved:", name);
  } catch (error) {
    // We don't send the exact error message to the frontend anymore (security best practice)
    console.error("Server Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});