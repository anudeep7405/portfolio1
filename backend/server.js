// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(express.json());
app.use(cors());

// POST route to send email
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        // Configure transporter (using Gmail with App Password)
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // from .env
                pass: process.env.EMAIL_PASS  // from .env
            }
        });

        // Email details
        let mailOptions = {
            from: process.env.EMAIL_USER,      // must match your Gmail
            to: process.env.EMAIL_USER,        // receiving email (your own)
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            replyTo: email                     // allows you to reply directly to sender
        };

        // Send mail
        await transporter.sendMail(mailOptions);
        res.json({ message: "✅ Message sent successfully!" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "❌ Failed to send message." });
    }
});

// Root route
app.get("/", (req, res) => {
    res.send("✅ Backend is running. Use POST /send-email to send messages.");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
