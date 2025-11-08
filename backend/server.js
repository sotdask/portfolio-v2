import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

// Load .env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Check required environment variables
const requiredEnv = ["BREVO_API_KEY", "BREVO_SENDER_EMAIL", "BREVO_TO_EMAIL"];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`❌ Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL;
const BREVO_SENDER_NAME = process.env.BREVO_SENDER_NAME || "Portfolio Contact";
const BREVO_TO_EMAIL = process.env.BREVO_TO_EMAIL;

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

// Email sending endpoint
app.post("/send", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Name, email, and message are required",
      });
    }

    console.log("📧 New contact form submission:", { name, email, phone });

    // Send email via Brevo API
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
        to: [{ email: BREVO_TO_EMAIL }],
        replyTo: { name, email },
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
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
        },
        timeout: 10000,
      }
    );

    console.log("✅ Brevo response:", response.data);

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email:", error.response?.data || error);
    res.status(500).json({
      success: false,
      error: "Failed to send email",
      details: error.response?.data || error.message,
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
