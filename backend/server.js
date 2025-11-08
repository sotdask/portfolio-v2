import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import process from 'process';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://sotdask.github.io',
    'https://sotdask.gr',
    'https://www.sotdask.gr'
  ],
  credentials: true
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Portfolio backend is running',
    timestamp: new Date().toISOString()
  });
});

// Configuration check endpoint
app.get('/config', (req, res) => {
  res.json({
    hasEmailUser: !!process.env.EMAIL_USER,
    hasEmailPass: !!process.env.EMAIL_PASS,
    emailUser: process.env.EMAIL_USER || 'Not configured',
    port: PORT
  });
});

// Email sending endpoint
app.post('/send', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Log the incoming request
    console.log('📧 New contact form submission:', { name, email, phone: phone || 'Not provided' });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Missing required fields');
      return res.status(400).json({ 
        success: false, 
        error: 'Name, email, and message are required' 
      });
    }

    // Check if email configuration is set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Email configuration missing in .env file');
      return res.status(500).json({ 
        success: false, 
        error: 'Email service not configured. Please contact administrator.' 
      });
    }

    // Create email transporter
    console.log('🔧 Creating email transporter...');
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false, // STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    // Prepare email content
    const emailSubject = `Νέο μήνυμα από ${name} - Portfolio Contact Form`;
    const emailText = `
Νέο μήνυμα από το portfolio contact form:

Όνομα: ${name}
Email: ${email}
Τηλέφωνο: ${phone || 'Δεν δόθηκε'}

Μήνυμα:
${message}

---
Αυτό το μήνυμα στάλθηκε από το portfolio contact form.
`;

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use your email as sender
      to: process.env.EMAIL_USER,   // Send to yourself
      replyTo: email,              // Allow reply to sender
      subject: emailSubject,
      text: emailText,
    };

    // Send email
    console.log('📤 Sending email...');
    await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    res.json({ 
      success: true, 
      message: 'Email sent successfully! I will get back to you soon.' 
    });

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    
    // Return appropriate error message
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check email configuration.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Unable to connect to email service.';
    }

    res.status(500).json({ 
      success: false, 
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    error: 'Endpoint not found' 
  });
});

// Error handler
app.use((error, req, res, _next) => {
  console.error('Server error:', error);
  res.status(500).json({ 
    success: false, 
    error: 'Internal server error' 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Portfolio backend server running on port ${PORT}`);
  console.log(`📧 Email service: ${process.env.EMAIL_USER ? 'Configured' : 'Not configured'}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/health`);
  console.log(`⚙️  Config check: http://localhost:${PORT}/config`);
});