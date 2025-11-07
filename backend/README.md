# Portfolio Backend Setup

## Email Configuration

Create a `.env` file in this directory with the following content:

```
EMAIL_USER=sotdaskalou@gmail.com
EMAIL_PASS=your_16_character_app_password_here
PORT=5000
NODE_ENV=development
```

## Gmail App Password Setup

1. Go to https://myaccount.google.com/
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → 2-Step Verification → App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password and replace `your_16_character_app_password_here`

## Installation & Running

```bash
# Install dependencies
npm install

# Start the server
npm start
```

## Endpoints

- `GET /health` - Health check
- `GET /config` - Configuration status
- `POST /send` - Send contact form email

## Testing

Test the email endpoint:
```bash
curl -X POST http://localhost:5000/send \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```


