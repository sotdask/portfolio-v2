import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import process from "process";
import axios from "axios";

// Load .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://sotdask.github.io",
      "https://sotdask.gr",
      "https://www.sotdask.gr",
    ],
    credentials: true,
  })
);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Portfolio backend is running",
    timestamp: new Date().toISOString(),
  });
});

// Email API endpoint (BREVO)
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    console.log("📧 New contact form submission:", { name, email, phone });

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required",
      });
    }

    // Send email using BREVO API
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name, email },
        to: [{ email: process.env.EMAIL_USER }],
        subject: `Νέο μήνυμα από ${name} - Portfolio Contact Form`,
        htmlContent: `
          <h3>Νέο μήνυμα από το portfolio contact form</h3>
          <p><strong>Όνομα:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Τηλέφωνο:</strong> ${phone || "Δεν δόθηκε"}</p>
          <p><strong>Μήνυμα:</strong><br>${message}</p>
          <hr>
          <small>Αυτό το μήνυμα στάλθηκε μέσω Brevo API.</small>
        `,
      },
      {
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Brevo response:", response.data);

    res.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error.response?.data || error);
    res.status(500).json({
      success: false,
      error: "Failed to send email",
      details: error.response?.data,
    });
  }
});

// 404 fallback
app.use("*", (req, res) => {
  res.status(404).json({ success: false, error: "Endpoint not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});
